import React, { useState, useEffect } from "react";
import { 
  Moon, 
  Sun, 
  ChevronRight, 
  Loader2, 
  CheckCircle2, 
  XCircle, 
  Table as TableIcon, 
  LayoutGrid, 
  ArrowRight,
  History,
  Trash2,
  Brain
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { analyzeDecision } from "./services/geminiService";
import { AnalysisType } from "./types";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PsychologyAlt = Brain;

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [decision, setDecision] = useState("");
  const [analysisType, setAnalysisType] = useState<AnalysisType>(AnalysisType.PROS_CONS);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (isDark) {
      root.classList.add("dark");
      body.classList.add("dark");
    } else {
      root.classList.remove("dark");
      body.classList.remove("dark");
    }
  }, [isDark]);

  const handleAnalyze = async () => {
    if (!decision.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await analyzeDecision(decision, analysisType);
      setResult({ ...data, type: analysisType });
      setHistory(prev => [{ ...data, type: analysisType, timestamp: new Date().toISOString() }, ...prev]);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => setHistory([]);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <PsychologyAlt className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              The Tiebreaker
            </h1>
          </div>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1 space-y-6">
            <section className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">
                New Decision
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1.5 opacity-70">
                    What's on your mind?
                  </label>
                  <textarea
                    value={decision}
                    onChange={(e) => setDecision(e.target.value)}
                    placeholder="e.g., Should I buy a new car or repair my old one?"
                    className="w-full min-h-[120px] p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 border-none focus:ring-2 focus:ring-blue-500 transition-all resize-none placeholder-neutral-400 dark:placeholder-neutral-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 opacity-70">
                    Analysis Method
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { id: AnalysisType.PROS_CONS, label: "Pros & Cons", icon: CheckCircle2 },
                      { id: AnalysisType.COMPARISON_TABLE, label: "Comparison Table", icon: TableIcon },
                      { id: AnalysisType.SWOT, label: "SWOT Analysis", icon: LayoutGrid },
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setAnalysisType(type.id)}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-xl border transition-all text-left",
                          analysisType === type.id
                            ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400"
                            : "border-neutral-100 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                        )}
                      >
                        <type.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={loading || !decision.trim()}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      Analyze Decision
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </section>

            {/* History Section */}
            {history.length > 0 && (
              <section className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-2">
                    <History className="w-4 h-4" />
                    History
                  </h2>
                  <button 
                    onClick={clearHistory}
                    className="text-xs text-red-500 hover:underline flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    Clear
                  </button>
                </div>
                <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {history.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setResult(item)}
                      className="w-full text-left p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors border border-transparent hover:border-neutral-100 dark:hover:border-neutral-700"
                    >
                      <p className="text-sm font-medium line-clamp-1">{item.title}</p>
                      <p className="text-xs opacity-50 mt-1">{new Date(item.timestamp).toLocaleDateString()}</p>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Result Section */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key={result.timestamp || "current"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-white dark:bg-neutral-900 p-8 rounded-3xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                          {result.type.replace("_", " ")}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
                        {result.title}
                      </h2>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {result.summary}
                      </p>
                    </div>

                    <div className="space-y-8">
                      {result.type === AnalysisType.PROS_CONS && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h3 className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold">
                              <CheckCircle2 className="w-5 h-5" />
                              Pros
                            </h3>
                            <ul className="space-y-3">
                              {result.pros.map((pro: string, i: number) => (
                                <motion.li 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  key={i} 
                                  className="flex gap-3 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-100/50 dark:border-emerald-800/30 text-sm"
                                >
                                  <span className="text-emerald-500 font-bold">•</span>
                                  {pro}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h3 className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold">
                              <XCircle className="w-5 h-5" />
                              Cons
                            </h3>
                            <ul className="space-y-3">
                              {result.cons.map((con: string, i: number) => (
                                <motion.li 
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  key={i} 
                                  className="flex gap-3 p-3 rounded-xl bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100/50 dark:border-rose-800/30 text-sm"
                                >
                                  <span className="text-rose-500 font-bold">•</span>
                                  {con}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {result.type === AnalysisType.COMPARISON_TABLE && (
                        <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-neutral-50 dark:bg-neutral-800/50">
                                {result.headers.map((header: string, i: number) => (
                                  <th key={i} className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {result.rows.map((row: string[], i: number) => (
                                <tr key={i} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                                  {row.map((cell: string, j: number) => (
                                    <td key={j} className="p-4 text-sm border-b border-neutral-100 dark:border-neutral-800/50">
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {result.type === AnalysisType.SWOT && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[
                            { title: "Strengths", data: result.strengths, color: "bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/50 text-blue-700 dark:text-blue-400" },
                            { title: "Weaknesses", data: result.weaknesses, color: "bg-amber-50 dark:bg-amber-900/10 border-amber-100 dark:border-amber-800/50 text-amber-700 dark:text-amber-400" },
                            { title: "Opportunities", data: result.opportunities, color: "bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400" },
                            { title: "Threats", data: result.threats, color: "bg-rose-50 dark:bg-rose-900/10 border-rose-100 dark:border-rose-800/50 text-rose-700 dark:text-rose-400" },
                          ].map((section, i) => (
                            <div key={i} className={cn("p-6 rounded-2xl border", section.color)}>
                              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                              <ul className="space-y-2">
                                {section.data.map((item: string, j: number) => (
                                  <li key={j} className="text-sm flex gap-2">
                                    <span className="opacity-50">•</span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl">
                  <div className="w-16 h-16 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-4">
                    <PsychologyAlt className="w-8 h-8 text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-2">
                    Ready to decide?
                  </h3>
                  <p className="text-neutral-500 max-w-xs">
                    Enter your decision on the left and choose an analysis method to get started.
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #374151;
        }
      `}</style>
    </div>
  );
}
