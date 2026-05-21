/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { SCENARIOS } from './data/scenarios';
import { Choice, ChoiceId, Scenario } from './types';
import { DoubleLoopModal } from './components/DoubleLoopModal';
import { ScenarioCard } from './components/ScenarioCard';
import { AssessmentReport } from './components/AssessmentReport';
import { Dictionary } from './components/Dictionary';
import { 
  Heart, 
  Scale, 
  Shield, 
  MessageSquare, 
  Sparkles, 
  Search, 
  ChevronRight, 
  Award, 
  CheckCircle, 
  Layers, 
  UserCheck, 
  Compass,
  FileText,
  LayoutDashboard,
  BookOpen
} from 'lucide-react';

export default function App() {
  // --- States ---
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("l1-s1");
  const [answeredScenarios, setAnsweredScenarios] = useState<Record<string, ChoiceId>>(() => {
    const saved = localStorage.getItem('consen_teach_answered_scenarios');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [activeTab, setActiveTab] = useState<'active-game' | 'report' | 'dictionary'>('active-game');
  const [activeLevelFilter, setActiveLevelFilter] = useState<0 | 1 | 2 | 3>(1); // Default to Level 1
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // States for Double Loop Modal
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Notes/reflections states
  const [notes, setNotes] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('consen_teach_scenarios_notes');
    return saved ? JSON.parse(saved) : {};
  });

  // Keep localStorage synced
  useEffect(() => {
    localStorage.setItem('consen_teach_answered_scenarios', JSON.stringify(answeredScenarios));
  }, [answeredScenarios]);

  useEffect(() => {
    localStorage.setItem('consen_teach_scenarios_notes', JSON.stringify(notes));
  }, [notes]);

  const activeScenario = SCENARIOS.find(s => s.id === selectedScenarioId) || SCENARIOS[0];

  // Filters & searches list of scenarios
  const filteredScenarios = SCENARIOS.filter(s => {
    const matchesLevel = activeLevelFilter === 0 || s.level === activeLevelFilter;
    const matchesQuery = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         s.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.narrative.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesQuery;
  });

  const totalAnswered = Object.keys(answeredScenarios).length;

  // --- Handlers ---
  const handleSelectChoice = (choice: Choice) => {
    setSelectedChoice(choice);
    setIsModalOpen(true);
  };

  const handleConfirmChoice = () => {
    if (selectedChoice) {
      setAnsweredScenarios(prev => ({
        ...prev,
        [activeScenario.id]: selectedChoice.id
      }));
    }
  };

  const handleClearResponse = () => {
    setAnsweredScenarios(prev => {
      const updated = { ...prev };
      delete updated[activeScenario.id];
      return updated;
    });
  };

  const handleNextScenario = () => {
    const currentIndex = SCENARIOS.findIndex(s => s.id === activeScenario.id);
    if (currentIndex < SCENARIOS.length - 1) {
      setSelectedScenarioId(SCENARIOS[currentIndex + 1].id);
    } else {
      // Unlocked report tab at end of list
      setActiveTab('report');
    }
  };

  const handleSaveNotes = (scenarioId: string, noteText: string) => {
    setNotes(prev => ({
      ...prev,
      [scenarioId]: noteText
    }));
  };

  const handleReset = (bypassConfirm = true) => {
    if (bypassConfirm || window.confirm("Are you sure you want to delete all selections and reset your progress indices?")) {
      setAnsweredScenarios({});
      localStorage.removeItem('consen_teach_answered_scenarios');
      setSelectedScenarioId("l1-s1");
      setActiveTab('active-game');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 md:p-6 font-sans transition-colors duration-300" id="applet-root">
      
      {/* Light Ambient Backdrop colors */}
      <div className="fixed top-0 right-0 -z-50 h-[30rem] w-[30rem] rounded-full bg-emerald-500/5 blur-3xl opacity-60" />
      <div className="fixed bottom-0 left-0 -z-50 h-[35rem] w-[35rem] rounded-full bg-blue-500/5 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl p-4 md:p-0">
        
        {/* Core Header Section - Material light elevated bento styled card */}
        <header className="mb-6 rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col items-start justify-between gap-6 md:p-8 sm:flex-row sm:items-center shadow-sm">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white">
                <Heart size={11} fill="currentColor" />
              </span>
              <span className="text-[10px] font-bold tracking-widest font-mono uppercase text-neutral-500">Men's Self-Reflective Allyship Suite</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl" id="applet-header-title">
              ConsenTeach<span className="text-emerald-600 font-light">//for Men</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-neutral-600">
              This is an interactive space designed for men to reflect on power dynamics, unlearn traditional patriarchal habits, and co-create genuine, balanced partnerships with one another. Thank you for showing up and doing the work.
            </p>
          </div>

          {/* Tab Navigation Controls */}
          <div className="flex rounded-xl bg-neutral-100 border border-neutral-200 p-1 shadow-sm" id="app-tab-navigation">
            <button
              onClick={() => setActiveTab('active-game')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'active-game'
                  ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
              id="tab-btn-cases"
            >
              <LayoutDashboard size={14} className={activeTab === 'active-game' ? 'text-emerald-600' : 'text-neutral-500'} />
              Study Workshop
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'report'
                  ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
              id="tab-btn-report"
            >
              <FileText size={14} className={activeTab === 'report' ? 'text-emerald-600' : 'text-neutral-500'} />
              Covenant & Scores
              {totalAnswered > 0 && (
                <span className="ml-1 rounded-full bg-emerald-600 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                  {totalAnswered}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('dictionary')}
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === 'dictionary'
                  ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200'
                  : 'text-neutral-500 hover:text-neutral-800'
              }`}
              id="tab-btn-dictionary"
            >
              <BookOpen size={14} className={activeTab === 'dictionary' ? 'text-emerald-600' : 'text-neutral-500'} />
              Dictionary
            </button>
          </div>
        </header>

        {/* Dynamic Inner Tab Viewports */}
        {activeTab === 'active-game' ? (
          <div className="grid gap-6 lg:grid-cols-12 items-start" id="active-game-viewport">
            
            {/* RIGHT COLUMN: Progress Binder / Directory (4 cols) */}
            <div className="lg:col-span-4 lg:order-last space-y-6" id="scenarios-sidebar">
              
              {/* Score Indicators Mini-Card */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                  <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-500">Live Core Progress</h4>
                  <span className="text-xs font-semibold font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {totalAnswered} / 30 Finished
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center font-mono">
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
                    <div className="text-[10px] text-neutral-500 font-semibold tracking-tight uppercase">Equal</div>
                    <div className="text-base font-bold text-emerald-600 mt-0.5">
                      {totalAnswered === 0 ? '--' : `${Math.round((SCENARIOS.reduce((acc, curr) => {
                        const r = answeredScenarios[curr.id];
                        if (r) {
                          const c = curr.choices.find(o => o.id === r);
                          return acc + (c?.scores.egalitarianIndex || 0);
                        }
                        return acc;
                      }, 0) / (totalAnswered * 10)) * 100)}%`}
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
                    <div className="text-[10px] text-neutral-500 font-semibold tracking-tight uppercase">Conflict</div>
                    <div className="text-base font-bold text-amber-600 mt-0.5">
                      {totalAnswered === 0 ? '--' : `${Math.round((SCENARIOS.reduce((acc, curr) => {
                        const r = answeredScenarios[curr.id];
                        if (r) {
                          const c = curr.choices.find(o => o.id === r);
                          return acc + (c?.scores.conflictResolution || 0);
                        }
                        return acc;
                      }, 0) / (totalAnswered * 10)) * 100)}%`}
                    </div>
                  </div>
                  <div className="bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
                    <div className="text-[10px] text-neutral-500 font-semibold tracking-tight uppercase">Resilient</div>
                    <div className="text-base font-bold text-blue-600 mt-0.5">
                      {totalAnswered === 0 ? '--' : `${Math.round((SCENARIOS.reduce((acc, curr) => {
                        const r = answeredScenarios[curr.id];
                        if (r) {
                          const c = curr.choices.find(o => o.id === r);
                          return acc + (c?.scores.boundaryResiliency || 0);
                        }
                        return acc;
                      }, 0) / (totalAnswered * 10)) * 100)}%`}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveTab('report')}
                  className="w-full text-center py-2 bg-neutral-900 hover:bg-neutral-800 text-white transition-colors border border-transparent rounded-xl font-bold uppercase tracking-widest text-[9px] font-mono block cursor-pointer shadow-sm"
                  id="view-report-shortcut"
                >
                  Examine Partnership Assessment
                </button>
              </div>

              {/* Filtering list block */}
              <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-lg font-semibold text-neutral-900">Scenario Directory</h3>
                  <p className="text-xs text-neutral-500">Discover cases by Level tier or keywords.</p>
                </div>

                {/* Search Box */}
                <div className="relative rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 flex items-center shadow-inner focus-within:ring-1 focus-within:ring-emerald-500/50 focus-within:border-emerald-500/50 transition-all">
                  <Search size={16} className="text-neutral-400 mr-2 shrink-0" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search topics (e.g., 'Chore')..."
                    className="w-full bg-transparent text-sm text-neutral-800 outline-none placeholder:text-neutral-400"
                    id="search-input-scenarios"
                  />
                </div>

                {/* Level Tier Filter Group */}
                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  <button
                    onClick={() => setActiveLevelFilter(0)}
                    className={`rounded-lg px-2.5 py-1.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeLevelFilter === 0
                        ? 'bg-neutral-900 text-white shadow-sm font-semibold'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    All Tiers
                  </button>
                  <button
                    onClick={() => setActiveLevelFilter(1)}
                    className={`rounded-lg px-2.5 py-1.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeLevelFilter === 1
                        ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    Level 1
                  </button>
                  <button
                    onClick={() => setActiveLevelFilter(2)}
                    className={`rounded-lg px-2.5 py-1.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeLevelFilter === 2
                        ? 'bg-amber-600 text-white shadow-sm font-semibold'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    Level 2
                  </button>
                  <button
                    onClick={() => setActiveLevelFilter(3)}
                    className={`rounded-lg px-2.5 py-1.5 font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      activeLevelFilter === 3
                        ? 'bg-blue-600 text-white shadow-sm font-semibold'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    Level 3
                  </button>
                </div>
              </div>

              {/* Scenarios Catalog Interactive List */}
              <div className="max-h-[50vh] overflow-y-auto space-y-1 rounded-xl pr-2" id="scenarios-list">
                {filteredScenarios.length === 0 ? (
                  <p className="text-center p-6 text-xs text-neutral-500 italic">No matching relationship scenarios found.</p>
                ) : (
                  filteredScenarios.map((scene) => {
                    const isSelected = selectedScenarioId === scene.id;
                    const answerId = answeredScenarios[scene.id];

                    return (
                      <button
                        key={scene.id}
                        onClick={() => setSelectedScenarioId(scene.id)}
                        className={`w-full text-left p-3 transition-all outline-none rounded-xl flex items-center justify-between gap-3 border cursor-pointer ${
                          isSelected
                            ? 'bg-white border-emerald-600 text-neutral-900 shadow-md font-semibold'
                            : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300 shadow-sm'
                        }`}
                        id={`catalog-item-${scene.id}`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className={`text-[9px] px-1.5 py-0.5 font-mono font-bold rounded border ${
                              scene.level === 1 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                              scene.level === 2 ? 'bg-amber-50 text-amber-700 border-amber-200' :
                              'bg-blue-50 text-blue-700 border-blue-200'
                            }`}>
                              L{scene.level}
                            </span>
                            <span className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-neutral-900' : 'text-neutral-800'}`}>
                              {scene.title}
                            </span>
                          </div>
                          <span className="text-[10px] text-neutral-500 font-medium block">
                            {scene.topic}
                          </span>
                        </div>

                        {answerId ? (
                          <div className={`shrink-0 flex items-center justify-center font-mono rounded-full h-5 w-5 bg-emerald-50 border border-emerald-200 text-emerald-700`}>
                            <span className="text-[10px] font-extrabold">{answerId}</span>
                          </div>
                        ) : (
                          <div className="shrink-0 h-1.5 w-1.5 rounded-full bg-neutral-300 mr-1" />
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* LEFT COLUMN: Active Case Study Stage (8 cols) */}
            <main className="lg:col-span-8 lg:order-first flex flex-col space-y-6" id="active-scenario-stage">
              
              <ScenarioCard
                scenario={activeScenario}
                selectedChoiceId={answeredScenarios[activeScenario.id] || null}
                onSelectChoice={handleSelectChoice}
                isCommitted={!!answeredScenarios[activeScenario.id]}
                onClearResponse={handleClearResponse}
                onNextScenario={handleNextScenario}
              />

              {/* Already Answered educational summary details drawer */}
              {answeredScenarios[activeScenario.id] && (
                <div 
                  className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm space-y-3"
                  id="historical-double-loop"
                >
                  <div className="flex items-center gap-1 text-xs font-bold font-mono uppercase tracking-wider text-neutral-600">
                    <Sparkles size={14} className="text-emerald-600 animate-pulse" />
                    Review Double-Loop Logic
                  </div>
                  <p className="text-xs text-neutral-500 leading-relaxed">
                    You have committed your path in this scenario. You can evaluate alternative outcomes by selecting other paths above, or review the systemic explanation of your committed stance below:
                  </p>
                  <blockquote className="border-l-4 border-emerald-600 pl-4 py-2 italic text-sm text-neutral-700 bg-neutral-50 rounded-r-lg">
                    "{activeScenario.choices.find(c => c.id === answeredScenarios[activeScenario.id])?.systemicImpact}"
                  </blockquote>
                </div>
              )}
            </main>
          </div>
        ) : activeTab === 'report' ? (
          <div id="report-viewport" className="transition-all duration-300">
            <AssessmentReport
              scenarios={SCENARIOS}
              answeredScenarios={answeredScenarios}
              notes={notes}
              onSaveNotes={handleSaveNotes}
              onReset={handleReset}
            />
          </div>
        ) : (
          <div id="dictionary-viewport" className="transition-all duration-300">
            <Dictionary />
          </div>
        )}

        {/* Systemic Double Loop Deep-Dive Modal */}
        {selectedChoice && (
          <DoubleLoopModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            scenario={activeScenario}
            choice={selectedChoice}
            onConfirm={handleConfirmChoice}
            isCommitted={answeredScenarios[activeScenario.id] === selectedChoice.id}
          />
        )}
      </div>

      {/* Styled Footer */}
      <footer className="mt-20 border-t border-neutral-200 py-8 text-center font-mono text-[10px]" id="applet-footer">
        <p className="text-neutral-500">
          ConsenTeach Suite • Masculine Self-Reflection & Peer Egalitarianism Instrument
        </p>
        <p className="text-neutral-400 mt-1 italic">
          Crafted with absolute professional integrity to build conscious, democratic partnerships.
        </p>
      </footer>
    </div>
  );
}
