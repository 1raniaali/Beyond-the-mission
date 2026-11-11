import React, { useState } from 'react';
import { 
  QUIZ_QUESTIONS, 
  QUIZ_RANKS, 
  QuizQuestion, 
  QuizRank 
} from '../data/quizQuestions';
import { SpaceObject } from '../types';
import { SPACE_OBJECTS } from '../data/spaceObjects';
import { spaceAudio } from '../utils/audio';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  Award, 
  RotateCcw, 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  BookOpen, 
  ExternalLink,
  Flame,
  Globe,
  Compass,
  Check,
  ChevronRight
} from 'lucide-react';

interface SpaceQuizProps {
  onSelectObject?: (obj: SpaceObject) => void;
  onOpenDreamweaverGuide?: () => void;
}

export const SpaceQuiz: React.FC<SpaceQuizProps> = ({ 
  onSelectObject,
  onOpenDreamweaverGuide 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Array<{
    questionId: string;
    chosenIndex: number;
    isCorrect: boolean;
  }>>([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Filter questions based on active category
  const filteredQuestions = selectedCategory === 'All'
    ? QUIZ_QUESTIONS
    : QUIZ_QUESTIONS.filter(q => q.category === selectedCategory);

  const currentQ: QuizQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setUserAnswers([]);
    setIsQuizCompleted(false);
    spaceAudio.playTelemetryChirp();
  };

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.correctIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      spaceAudio.playTelemetryChirp();
    } else {
      setStreak(0);
      spaceAudio.playBeep(350);
    }

    setUserAnswers(prev => [
      ...prev,
      {
        questionId: currentQ.id,
        chosenIndex: index,
        isCorrect
      }
    ]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < filteredQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      spaceAudio.playTelemetryChirp();
    } else {
      setIsQuizCompleted(true);
      spaceAudio.playTelemetryChirp();
    }
  };

  const calculateFinalRank = (): QuizRank => {
    const percent = Math.round((score / filteredQuestions.length) * 100);
    const rank = QUIZ_RANKS.find(r => percent >= r.minScore) || QUIZ_RANKS[QUIZ_RANKS.length - 1];
    return rank;
  };

  const handleInspectArtifact = (objectId?: string) => {
    if (!objectId || !onSelectObject) return;
    const found = SPACE_OBJECTS.find(o => o.id === objectId);
    if (found) {
      onSelectObject(found);
    }
  };

  const categories = [
    { id: 'All', label: 'All Artifacts' },
    { id: 'Moon', label: 'Lunar Relics' },
    { id: 'Mars', label: 'Martian Relics' },
    { id: 'Engineering', label: 'Spaceflight Tech' },
    { id: 'Ethics', label: 'Preservation & Law' },
  ];

  const progressPercent = Math.round(((currentIndex + (isAnswered ? 1 : 0)) / filteredQuestions.length) * 100);

  return (
    <section id="space-quiz" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#04050b] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.12),rgba(255,255,255,0))]" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-cyan-300 text-xs font-code tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Space Knowledge Evaluation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-space text-white tracking-tight">
            Space Archaeology & Relics Quiz
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Test your knowledge of the human-made artifacts left on the Moon and Mars—from Apollo rover titanium tires and laser retroreflectors to Martian parachutes and space preservation treaties.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map(cat => {
              const count = cat.id === 'All' 
                ? QUIZ_QUESTIONS.length 
                : QUIZ_QUESTIONS.filter(q => q.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-space font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-semibold'
                      : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:bg-slate-850'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 opacity-60 text-[10px] font-code">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* QUIZ ACTIVE STATE */}
        {!isQuizCompleted ? (
          <div className="bg-[#080a18] border border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-8">
            
            {/* Top Telemetry Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-5 text-xs font-code">
              
              {/* Question Index */}
              <div className="flex items-center gap-2">
                <span className="text-slate-400">TELEMETRY:</span>
                <span className="text-cyan-400 font-bold">
                  QUESTION {currentIndex + 1} OF {filteredQuestions.length}
                </span>
                <span className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 text-[10px] border border-slate-700">
                  {currentQ.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 text-[10px] border border-purple-800/40">
                  {currentQ.difficulty}
                </span>
              </div>

              {/* Score & Streak Counters */}
              <div className="flex items-center gap-4">
                {streak >= 2 && (
                  <div className="flex items-center gap-1 text-amber-400 font-bold animate-pulse">
                    <Flame className="w-4 h-4 fill-amber-500 text-amber-400" />
                    <span>{streak}x STREAK</span>
                  </div>
                )}
                <div className="text-slate-400">
                  SCORE: <span className="text-white font-bold">{score}</span> / {filteredQuestions.length}
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Question Statement */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-space text-white leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options Grid */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === currentQ.correctIndex;

                let cardStyle = 'bg-slate-900/60 border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 text-slate-200 cursor-pointer';

                if (isAnswered) {
                  if (isCorrectOption) {
                    cardStyle = 'bg-emerald-950/50 border-emerald-500 text-emerald-100 font-medium shadow-md shadow-emerald-950/40';
                  } else if (isSelected && !isCorrectOption) {
                    cardStyle = 'bg-rose-950/50 border-rose-500 text-rose-100 shadow-md shadow-rose-950/40';
                  } else {
                    cardStyle = 'bg-slate-900/40 border-slate-850/60 text-slate-500 opacity-60';
                  }
                }

                const letter = ['A', 'B', 'C', 'D'][idx];

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${cardStyle}`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-code text-xs font-bold shrink-0 mt-0.5 border ${
                      isAnswered && isCorrectOption
                        ? 'bg-emerald-500 text-black border-emerald-400'
                        : isAnswered && isSelected && !isCorrectOption
                        ? 'bg-rose-500 text-white border-rose-400'
                        : 'bg-slate-800 text-cyan-300 border-slate-700'
                    }`}>
                      {letter}
                    </div>

                    <div className="flex-1 text-sm sm:text-base leading-relaxed">
                      {option}
                    </div>

                    {isAnswered && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation & Deep Link Dossier */}
            {isAnswered && (
              <div className="mt-6 p-5 rounded-xl bg-slate-900/90 border border-slate-700/80 space-y-4 animate-fadeIn">
                <div className="flex items-start gap-3">
                  {selectedOption === currentQ.correctIndex ? (
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0 border border-emerald-500/30">
                      <Check className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 shrink-0 border border-rose-500/30">
                      <XCircle className="w-5 h-5" />
                    </div>
                  )}
                  <div className="space-y-1.5 flex-1">
                    <span className="font-space font-bold text-sm block text-white">
                      {selectedOption === currentQ.correctIndex ? 'Correct Analysis!' : 'Scientific Debriefing'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>

                {/* Fun Fact Capsule */}
                {currentQ.funFact && (
                  <div className="p-3.5 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-200 flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cyan-300 font-code uppercase tracking-wider block text-[10px]">Archaeologist Field Note:</strong>
                      {currentQ.funFact}
                    </div>
                  </div>
                )}

                {/* Actions & Next Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-800">
                  {currentQ.relatedObjectId ? (
                    <button
                      onClick={() => handleInspectArtifact(currentQ.relatedObjectId)}
                      className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-space font-medium underline underline-offset-4"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Inspect {currentQ.relatedObjectName || 'Artifact Dossier'}</span>
                    </button>
                  ) : <div />}

                  <button
                    onClick={handleNext}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-space font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-102"
                  >
                    <span>{currentIndex + 1 < filteredQuestions.length ? 'Next Question' : 'View Mission Report'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* QUIZ COMPLETED / RESULTS CARD */
          <div className="bg-[#080a18] border border-cyan-500/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-8 animate-fadeIn text-center">
            
            {/* Rank Badge & Calling */}
            <div className="space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 mx-auto flex items-center justify-center text-3xl shadow-xl shadow-cyan-500/20">
                <Award className="w-8 h-8 text-white" />
              </div>

              <div className="text-xs font-code text-cyan-400 tracking-widest uppercase">
                ARCHAEOLOGY EVALUATION COMPLETE
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-space text-white">
                {calculateFinalRank().title}
              </h3>

              <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-code text-slate-300">
                Callsign: <span className="text-cyan-300 font-bold">{calculateFinalRank().callsign}</span> • {calculateFinalRank().badge}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                {calculateFinalRank().description}
              </p>
            </div>

            {/* Score Grid */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] font-code text-slate-400 uppercase block">Score</span>
                <span className="text-xl sm:text-2xl font-bold text-white font-space">
                  {score}/{filteredQuestions.length}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] font-code text-slate-400 uppercase block">Accuracy</span>
                <span className="text-xl sm:text-2xl font-bold text-cyan-300 font-space">
                  {Math.round((score / filteredQuestions.length) * 100)}%
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                <span className="text-[10px] font-code text-slate-400 uppercase block">Best Streak</span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400 font-space">
                  {maxStreak}x
                </span>
              </div>
            </div>

            {/* Answer Review Accordion */}
            <div className="text-left space-y-3 pt-4 border-t border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-space">
                Telemetry Log & Answer Breakdown
              </h4>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {filteredQuestions.map((q, idx) => {
                  const record = userAnswers.find(a => a.questionId === q.id);
                  const isCorrect = record?.isCorrect ?? false;
                  return (
                    <div 
                      key={q.id}
                      className={`p-3 rounded-lg border text-xs flex items-center justify-between gap-3 ${
                        isCorrect 
                          ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-200' 
                          : 'bg-rose-950/20 border-rose-900/40 text-rose-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                        )}
                        <span className="font-space font-medium text-slate-200 line-clamp-1">
                          {idx + 1}. {q.question}
                        </span>
                      </div>
                      <span className="font-code text-[11px] shrink-0 font-bold">
                        {isCorrect ? '+1 Pt' : '0 Pts'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-space font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>

              {onOpenDreamweaverGuide && (
                <button
                  onClick={onOpenDreamweaverGuide}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-space font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>How to Open in Dreamweaver</span>
                </button>
              )}
            </div>

          </div>
        )}

        {/* Dreamweaver Info Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/20 to-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0 font-space">
              Dw
            </div>
            <div>
              <span className="text-xs font-bold text-white font-space block">
                Want to customize this quiz or open the project in Adobe Dreamweaver?
              </span>
              <span className="text-[11px] text-slate-400">
                Learn how to open code in Dreamweaver, use Live View with static builds, and publish via FTP.
              </span>
            </div>
          </div>

          <button
            onClick={onOpenDreamweaverGuide}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-space font-medium text-xs whitespace-nowrap flex items-center gap-1.5 transition-colors shrink-0"
          >
            <span>Dreamweaver Guide</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
