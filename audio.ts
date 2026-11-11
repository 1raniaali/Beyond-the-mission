/**
 * Web Audio API synthesizer for cosmic ambiance & telemetry sound effects.
 * 100% procedural with zero external audio assets.
 */

class SpaceSoundManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleSound(): boolean {
    this.initContext();
    if (!this.ctx) return false;

    if (this.isMuted) {
      this.startAmbientDrone();
      this.isMuted = false;
      this.playTelemetryChirp();
    } else {
      this.stopAmbientDrone();
      this.isMuted = true;
    }
    return !this.isMuted;
  }

  public getIsPlaying(): boolean {
    return !this.isMuted;
  }

  private startAmbientDrone() {
    if (!this.ctx) return;

    try {
      // Deep sub-drone
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneGain = this.ctx.createGain();
      this.filter = this.ctx.createBiquadFilter();

      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(82.4, this.ctx.currentTime); // E2 fifth

      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(140, this.ctx.currentTime);

      this.droneGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.droneGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 3);

      this.droneOsc1.connect(this.filter);
      this.droneOsc2.connect(this.filter);
      this.filter.connect(this.droneGain);
      this.droneGain.connect(this.ctx.destination);

      this.droneOsc1.start();
      this.droneOsc2.start();
    } catch {
      // Audio autoplay policy fallback
    }
  }

  private stopAmbientDrone() {
    if (!this.ctx || !this.droneGain) return;
    try {
      this.droneGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.droneGain?.disconnect();
        } catch {
          // ignore
        }
      }, 900);
    } catch {
      // ignore
    }
  }

  public playTelemetryChirp() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(1760, now + 0.08);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // ignore
    }
  }

  public playBeep(freq = 1200) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // ignore
    }
  }
}

export const spaceAudio = new SpaceSoundManager();
