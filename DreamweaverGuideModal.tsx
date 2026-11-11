import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  Terminal, 
  Globe, 
  UploadCloud, 
  CheckCircle2, 
  Copy, 
  Check, 
  FolderTree, 
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Code
} from 'lucide-react';

interface DreamweaverGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DreamweaverGuideModal: React.FC<DreamweaverGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'static-build' | 'code-site' | 'ftp-upload' | 'troubleshoot'>('static-build');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#090b17] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/40 text-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-[#0d1024]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 font-bold text-sm tracking-tighter">
              Dw
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-space font-bold text-white tracking-wide">
                  How to Open in Adobe Dreamweaver
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-code bg-cyan-950/80 text-cyan-300 border border-cyan-600/40 rounded-full">
                  React 19 + Vite Guide
                </span>
              </div>
              <p className="text-xs text-slate-400 font-sans">
                Step-by-step instructions for editing code, using Dreamweaver Live View, and publishing via FTP.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-1 px-6 pt-3 border-b border-slate-800 bg-[#070914] text-xs font-space font-medium">
          <button
            onClick={() => setActiveTab('static-build')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'static-build'
                ? 'bg-slate-900 text-cyan-300 border-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/50'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Method 1: Live View via Static Build (Recommended)</span>
          </button>
          <button
            onClick={() => setActiveTab('code-site')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'code-site'
                ? 'bg-slate-900 text-cyan-300 border-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/50'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Method 2: Project Workspace (Code Mode)</span>
          </button>
          <button
            onClick={() => setActiveTab('ftp-upload')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'ftp-upload'
                ? 'bg-slate-900 text-cyan-300 border-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/50'
            }`}
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Method 3: Direct FTP Publishing</span>
          </button>
          <button
            onClick={() => setActiveTab('troubleshoot')}
            className={`px-4 py-2.5 rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
              activeTab === 'troubleshoot'
                ? 'bg-slate-900 text-cyan-300 border-cyan-400 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/50'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Troubleshooting & FAQ</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* TAB 1: Static Build (Live View) */}
          {activeTab === 'static-build' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 text-blue-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-white block">Why use this method?</span>
                  Modern web apps built with React and TypeScript require a compilation step. Building the static version converts all TypeScript and Three.js components into standard production HTML, CSS, and JS that Dreamweaver's built-in <strong>Live View</strong> and <strong>Design View</strong> can render natively!
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/20 text-cyan-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-cyan-500/40">
                    1
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Download or Clone the Project Folder</h4>
                    <p className="text-xs text-slate-300">
                      Ensure you have the project directory on your local machine with <code className="text-cyan-300 font-code">package.json</code> and <code className="text-cyan-300 font-code">src/</code>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/20 text-cyan-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-cyan-500/40">
                    2
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Install Dependencies and Generate Production Build</h4>
                    <p className="text-xs text-slate-300">
                      Open your command prompt or terminal in the project folder and run:
                    </p>
                    <div className="bg-[#050711] border border-slate-800 rounded-xl p-3 flex items-center justify-between font-code text-xs text-cyan-300">
                      <code>npm install && npm run build</code>
                      <button
                        onClick={() => copyToClipboard('npm install && npm run build', 'b1')}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedCmd === 'b1' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="text-[11px]">{copiedCmd === 'b1' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      This will output a standalone <code className="text-amber-300 font-code">dist/</code> directory containing pre-rendered HTML, bundled styles, and assets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/20 text-cyan-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-cyan-500/40">
                    3
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Open the <code className="text-amber-300">dist/</code> Folder as a Dreamweaver Site</h4>
                    <ol className="text-xs text-slate-300 list-decimal list-inside space-y-1 pl-1">
                      <li>Launch <strong>Adobe Dreamweaver</strong>.</li>
                      <li>In the top menu, go to <strong className="text-white">Site &gt; New Site...</strong></li>
                      <li>In the <strong>Site Name</strong> box, type <code className="text-cyan-300 font-code">Beyond The Mission (Live)</code>.</li>
                      <li>Click the folder icon next to <strong>Local Site Folder</strong>, and select the generated <code className="text-amber-300 font-code">dist</code> folder!</li>
                      <li>Click <strong className="text-white">Save</strong>.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-600/20 text-cyan-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-cyan-500/40">
                    4
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Inspect and Preview in Dreamweaver Live View</h4>
                    <p className="text-xs text-slate-300">
                      In the Dreamweaver <strong>Files Panel</strong> (right side), double-click <code className="text-cyan-300 font-code">index.html</code>. 
                      Switch to <strong className="text-white">Live View</strong> mode at the top. The 3D WebGL scenes, interactive maps, audio synthesis, and quiz will render completely inside Dreamweaver!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Code Site Setup */}
          {activeTab === 'code-site' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/30 text-purple-200 text-xs">
                <span className="font-bold text-white block mb-1">Editing Source Code in Dreamweaver:</span>
                Dreamweaver includes an advanced code editor with syntax highlighting, multi-file search, code collapse, and emmet support. You can manage the entire React codebase directly in Dreamweaver.
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-purple-500/40">
                    1
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Create New Dreamweaver Project Site</h4>
                    <p className="text-xs text-slate-300">
                      In Dreamweaver: Go to <strong className="text-white">Site &gt; New Site...</strong> and point the <strong>Local Site Folder</strong> to the main project root (the folder containing <code className="text-cyan-300 font-code">src/</code>, <code className="text-cyan-300 font-code">package.json</code>, and <code className="text-cyan-300 font-code">vite.config.ts</code>).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-purple-500/40">
                    2
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Start the Vite Development Server</h4>
                    <p className="text-xs text-slate-300">
                      In your terminal (or Dreamweaver terminal window if configured):
                    </p>
                    <div className="bg-[#050711] border border-slate-800 rounded-xl p-3 flex items-center justify-between font-code text-xs text-cyan-300">
                      <code>npm run dev</code>
                      <button
                        onClick={() => copyToClipboard('npm run dev', 'b2')}
                        className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copiedCmd === 'b2' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span className="text-[11px]">{copiedCmd === 'b2' ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-600/20 text-purple-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-purple-500/40">
                    3
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Edit Components with Code Autocomplete</h4>
                    <p className="text-xs text-slate-300">
                      Navigate to <code className="text-cyan-300 font-code">src/components/</code> to modify the 3D viewers, timeline, or quiz. 
                      Save any file, and Vite instantly updates your live preview without having to refresh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Direct FTP Upload */}
          {activeTab === 'ftp-upload' && (
            <div className="space-y-5 animate-fadeIn">
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-200 text-xs">
                <span className="font-bold text-white block mb-1">Publishing to your Web Host:</span>
                One of Adobe Dreamweaver&apos;s most popular features is built-in FTP/SFTP deployment. You can upload the static build directly to your Apache, Nginx, cPanel, or shared hosting server.
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-emerald-500/40">
                    1
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Configure Dreamweaver Remote Server</h4>
                    <ol className="text-xs text-slate-300 list-decimal list-inside space-y-1 pl-1">
                      <li>Go to <strong className="text-white">Site &gt; Manage Sites...</strong></li>
                      <li>Select your site and click the pencil (Edit) icon.</li>
                      <li>Click the <strong className="text-white">Servers</strong> category on the left, then click the <strong className="text-emerald-400">+</strong> (Add server) button.</li>
                      <li>Choose <strong>FTP</strong> or <strong>SFTP</strong>, enter your server address, username, password, and Root Directory (e.g. <code className="text-cyan-300 font-code">public_html/</code>).</li>
                      <li>Click <strong>Test</strong> to verify the connection, then click <strong>Save</strong>.</li>
                    </ol>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600/20 text-emerald-400 font-bold font-code text-xs flex items-center justify-center shrink-0 border border-emerald-500/40">
                    2
                  </div>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-bold text-white font-space text-sm">Upload with One Click (&quot;Put&quot; Files)</h4>
                    <p className="text-xs text-slate-300">
                      In the Dreamweaver <strong>Files</strong> panel, select all items inside your <code className="text-amber-300 font-code">dist/</code> folder and click the blue <strong>Put Files (Upload arrow)</strong>.
                      Dreamweaver will securely transfer the website assets to your public web server!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Troubleshooting */}
          {activeTab === 'troubleshoot' && (
            <div className="space-y-4 animate-fadeIn text-xs">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  Q: Why is Live View white/blank when I open the root index.html?
                </h4>
                <p className="text-slate-300">
                  Because the root <code className="text-cyan-300 font-code">index.html</code> references <code className="text-cyan-300 font-code">/src/main.tsx</code> (TypeScript module), which browsers and Dreamweaver cannot interpret without Vite running.
                  <strong>Solution:</strong> Run <code className="text-amber-300 font-code">npm run build</code>, and open the <code className="text-amber-300 font-code">dist/index.html</code> file in Dreamweaver instead!
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-cyan-400" />
                  Q: Can I edit the text and HTML directly inside Dreamweaver?
                </h4>
                <p className="text-slate-300">
                  Yes! All museum data, astronaut quotes, and specifications are located in clean, typed files under <code className="text-cyan-300 font-code">src/data/spaceObjects.ts</code>, <code className="text-cyan-300 font-code">src/data/missionsTimeline.ts</code>, and <code className="text-cyan-300 font-code">src/data/quizQuestions.ts</code>. You can edit text, years, and descriptions, and Dreamweaver will syntax-highlight them.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-400" />
                  Q: What Node.js version is recommended?
                </h4>
                <p className="text-slate-300">
                  Node.js 18.x, 20.x, or 22.x LTS. Check your version with <code className="text-cyan-300 font-code">node -v</code> in your terminal.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#070914] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 font-code">
            Documentation included in root <span className="text-cyan-300">DREAMWEAVER_GUIDE.md</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-space font-semibold transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
