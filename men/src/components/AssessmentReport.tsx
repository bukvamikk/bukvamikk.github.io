/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChoiceId, Scenario } from '../types';
import { Scale, MessageSquare, Shield, Check, Copy, Award, Heart, Printer, CheckSquare, Edit, RotateCcw } from 'lucide-react';

interface AssessmentReportProps {
  scenarios: Scenario[];
  answeredScenarios: Record<string, ChoiceId>;
  notes: Record<string, string>;
  onSaveNotes: (scenarioId: string, note: string) => void;
  onReset: (bypassConfirm?: boolean) => void;
}

export function AssessmentReport({
  scenarios,
  answeredScenarios,
  notes,
  onSaveNotes,
  onReset,
}: AssessmentReportProps) {
  const [copied, setCopied] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [customCovenantGoal, setCustomCovenantGoal] = useState(() => {
    return localStorage.getItem('consen_teach_covenant_custom_goal') || 
      "I will proactively prepare for and initiate our Relational Sync every second Sunday evening to audit collective chores, emotional loads, and check in on boundaries before our weeks launch.";
  });

  const totalAnswered = Object.keys(answeredScenarios).length;
  
  // Calculate scores
  let totalEgalitarian = 0;
  let totalConflict = 0;
  let totalResiliency = 0;
  let possibleEgalitarian = 0;
  let possibleConflict = 0;
  let possibleResiliency = 0;

  scenarios.forEach(scene => {
    const answer = answeredScenarios[scene.id];
    if (answer) {
      const selectedChoice = scene.choices.find(c => c.id === answer);
      if (selectedChoice) {
        totalEgalitarian += selectedChoice.scores.egalitarianIndex;
        totalConflict += selectedChoice.scores.conflictResolution;
        totalResiliency += selectedChoice.scores.boundaryResiliency;
        
        // maximum possible score per scenario is 10 for each dimension
        possibleEgalitarian += 10;
        possibleConflict += 10;
        possibleResiliency += 10;
      }
    }
  });

  const egalitarianIndex = possibleEgalitarian > 0 ? Math.round((totalEgalitarian / possibleEgalitarian) * 100) : 0;
  const conflictResolution = possibleConflict > 0 ? Math.round((totalConflict / possibleConflict) * 100) : 0;
  const boundaryResiliency = possibleResiliency > 0 ? Math.round((totalResiliency / possibleResiliency) * 100) : 0;

  // Grade definitions
  const getEgalitarianGrade = (score: number) => {
    if (score >= 80) return {
      title: "Conscious Peer Partner",
      desc: "You prioritize total cognitive division of labor, actively reject traditional patriarchal defaults, and support relationship resources with radical egalitarian parity."
    };
    if (score >= 50) return {
      title: "Emergent Egalitarian Ally",
      desc: "You have strong intentions to build an equal relationship, but occasionally retreat into managerial/helper defaults when cognitive workloads become overwhelming."
    };
    return {
      title: "Traditional Role Accustomed",
      desc: "You frequently fall into traditional peace-keeping or labor divisions where domestic loads default to traditional expectations, leaving deeper power power disparities unexamined."
    };
  };

  const getConflictGrade = (score: number) => {
    if (score >= 80) return {
      title: "Systems-Regulated Partner",
      desc: "You treat friction as operational feedback. You deploy intentional pauses to protect nervous systems and demand mutual accountability over ego defenses."
    };
    if (score >= 50) return {
      title: "Individualistic Pacifying Style",
      desc: "You seek to resolve issues but resort to quick verbal bargains, sometimes leaving subtle undercurrents of cold isolation or defensive gasps unaddressed."
    };
    return {
      title: "Reactively Escalating Style",
      desc: "Arguments instantly activate fight-or-flight states, causing high-stakes shouting matches, defensive button-pushing, or complete stonewalling cycles."
    };
  };

  const getResiliencyGrade = (score: number) => {
    if (score >= 80) return {
      title: "Unified Value Shield",
      desc: "You maintain rigorous boundaries against traditional societal defaults, blocking sexist extended family pressures or chauvinistic peer systems from contaminating your home."
    };
    if (score >= 50) return {
      title: "Permeable Ally",
      desc: "You wish to preserve custom values, but struggle with social anxiety or guilt when explaining boundaries to old friends or generational family lines."
    };
    return {
      title: "Erosion-Prone Space",
      desc: "Your home remains heavily open to external expectations, often surrendering your egalitarian goals for public social ease or generational peace."
    };
  };

  const egGrade = getEgalitarianGrade(egalitarianIndex);
  const cfGrade = getConflictGrade(conflictResolution);
  const brGrade = getResiliencyGrade(boundaryResiliency);

  // Compile active commitments text for copying
  const generateCovenantText = () => {
    let text = "=== MY PROACTIVE ALLYSHIP COVENANT ===\n\n";
    text += `Date Generated: ${new Date().toLocaleDateString()}\n`;
    text += `Egalitarian Index: ${egalitarianIndex}%\n`;
    text += `Conflict Resolution Score: ${conflictResolution}%\n`;
    text += `Boundary Resiliency: ${boundaryResiliency}%\n\n`;
    text += `--- My Core Structural Commitments ---\n`;
    
    scenarios.forEach(scene => {
      const ansId = answeredScenarios[scene.id];
      if (ansId) {
        const choice = scene.choices.find(c => c.id === ansId);
        if (choice && choice.scores.egalitarianIndex >= 8) {
          text += `* [${scene.title}] We commit: ${choice.text}\n`;
        }
      }
    });

    text += `\n--- Our Live Custom Goals ---\n`;
    text += `${customCovenantGoal}\n\n`;
    text += "========================================\n";
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCovenantText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveGoal = (val: string) => {
    setCustomCovenantGoal(val);
    localStorage.setItem('consen_teach_covenant_custom_goal', val);
  };

  const handleResetEverythingStateBased = () => {
    localStorage.removeItem('consen_teach_covenant_custom_goal');
    setCustomCovenantGoal("I will proactively prepare for and initiate our Relational Sync every second Sunday evening to audit collective chores, emotional loads, and check in on boundaries before our weeks launch.");
    setShowResetConfirm(false);
    onReset(true);
  };

  return (
    <div className="space-y-6 animate-fade-in" id="assessment-report-section">
      {/* Intro Banner */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-emerald-600" />
            <span className="text-[10px] font-bold tracking-widest font-mono uppercase text-neutral-500">Reflective Report</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
            My Self-Reflective Allyship Report
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Unfolded below are your calculated indices from <strong className="text-neutral-900 font-mono">{totalAnswered} of 30</strong> answered scenarios. Use these metrics as self-reflective compasses to assess your power balances and build co-equal intimacy.
          </p>
        </div>
        
        <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl text-center min-w-[120px] shadow-sm">
          <div className="text-3xl font-display font-bold text-emerald-600">{Math.round((totalAnswered / 30) * 100)}%</div>
          <div className="text-[9px] uppercase tracking-wider font-mono text-neutral-500 font-semibold mt-1">Journey Done</div>
        </div>
      </div>

      {/* Index Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Egalitarian Index */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col justify-between" id="egalitarian-metric-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="rounded-xl bg-emerald-50 p-2.5 text-emerald-600 border border-emerald-100">
                <Scale size={20} />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 font-mono">Metric One</span>
                <h3 className="font-semibold text-base text-neutral-800">Egalitarian Index</h3>
              </div>
            </div>

            {/* Score circle */}
            <div className="py-2 flex justify-between items-baseline">
              <span className="text-5xl font-display font-extrabold text-emerald-600">{egalitarianIndex}%</span>
              <span className="text-[10px] font-bold font-mono bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-2.5 py-0.5">
                Score
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-neutral-100 border border-neutral-200/55 overflow-hidden">
              <div 
                className="h-full bg-emerald-600 rounded-full transition-all duration-500"
                style={{ width: `${egalitarianIndex}%` }}
              />
            </div>

            {/* Assessment Label */}
            <div className="pt-2 border-t border-neutral-100 space-y-1">
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider font-mono">{egGrade.title}</div>
              <p className="text-xs text-neutral-600 leading-relaxed">{egGrade.desc}</p>
            </div>
          </div>
        </div>

        {/* Conflict Resolution */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col justify-between" id="conflict-metric-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="rounded-xl bg-amber-50 p-2.5 text-amber-600 border border-amber-100">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 font-mono">Metric Two</span>
                <h3 className="font-semibold text-base text-neutral-800">Conflict Resolution</h3>
              </div>
            </div>

            {/* Score circle */}
            <div className="py-2 flex justify-between items-baseline">
              <span className="text-5xl font-display font-extrabold text-amber-600">{conflictResolution}%</span>
              <span className="text-[10px] font-bold font-mono bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-2.5 py-0.5">
                Score
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-neutral-100 border border-neutral-200/55 overflow-hidden">
              <div 
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${conflictResolution}%` }}
              />
            </div>

            {/* Assessment Label */}
            <div className="pt-2 border-t border-neutral-100 space-y-1">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider font-mono">{cfGrade.title}</div>
              <p className="text-xs text-neutral-600 leading-relaxed">{cfGrade.desc}</p>
            </div>
          </div>
        </div>

        {/* Boundary Resiliency */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col justify-between" id="resiliency-metric-card">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600 border border-blue-100">
                <Shield size={20} />
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 font-mono">Metric Three</span>
                <h3 className="font-semibold text-base text-neutral-800">Boundary Resiliency</h3>
              </div>
            </div>

            {/* Score circle */}
            <div className="py-2 flex justify-between items-baseline">
              <span className="text-5xl font-display font-extrabold text-blue-600">{boundaryResiliency}%</span>
              <span className="text-[10px] font-bold font-mono bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-2.5 py-0.5">
                Score
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full rounded-full bg-neutral-100 border border-neutral-200/55 overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${boundaryResiliency}%` }}
              />
            </div>

            {/* Assessment Label */}
            <div className="pt-2 border-t border-neutral-100 space-y-1">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">{brGrade.title}</div>
              <p className="text-xs text-neutral-600 leading-relaxed">{brGrade.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alliance Covenant Section */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 space-y-6 shadow-sm" id="covenant-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-emerald-600 font-mono">
              <Award size={18} />
              <span className="text-[10px] font-bold uppercase tracking-wider">My Proactive Alignment Instrument</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-neutral-900 md:text-2xl">
              My Self-Reflective Allyship Covenant
            </h3>
            <p className="text-xs text-neutral-500">
              This pact collects your committed relational actions as a partner. You can copy or print this text to seal your vows.
            </p>
          </div>

          {showResetConfirm ? (
            <div className="flex gap-2 items-center shrink-0 font-mono bg-red-50 p-2 rounded-xl border border-red-250 border-red-200" id="reset-confirm-box">
              <span className="text-[10px] sm:text-xs font-bold text-red-700 px-2">Reset everything?</span>
              <button
                onClick={handleResetEverythingStateBased}
                className="rounded-lg bg-red-600 hover:bg-red-700 px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all cursor-pointer"
                id="confirm-reset-yes-btn"
              >
                Yes, Reset
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="rounded-lg bg-white border border-neutral-300 px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-600 hover:bg-neutral-55 hover:bg-neutral-50 transition-all cursor-pointer"
                id="confirm-reset-no-btn"
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="flex gap-2 shrink-0 font-mono flex-wrap justify-end">
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-600 shadow-sm hover:bg-red-50 hover:text-red-700 transition-all cursor-pointer"
                id="reset-covenant-btn"
              >
                <RotateCcw size={13} />
                Reset Everything
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-205 border-neutral-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-600 shadow-sm hover:bg-neutral-50 hover:text-neutral-800 transition-all cursor-pointer"
                id="copy-covenant-btn"
              >
                <Copy size={13} />
                {copied ? 'Copied!' : 'Copy Covenant'}
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-emerald-700 transition-all cursor-pointer"
                id="print-covenant-btn"
              >
                <Printer size={13} />
                Print Page
              </button>
            </div>
          )}
        </div>

        {/* Dynamic Commitments list */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-600 flex items-center gap-1.5 font-mono">
            <CheckSquare size={14} className="text-emerald-600" />
            Active Relational Asserts
          </h4>
          
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {totalAnswered === 0 ? (
              <p className="text-sm italic text-neutral-500 block p-4 bg-neutral-50 border border-neutral-200 rounded-xl leading-relaxed">
                Your committed actions will populate here as you complete journey scenarios. Choose paths with high egalitarian scores to build your covenant!
              </p>
            ) : (
              scenarios.map(scene => {
                const answer = answeredScenarios[scene.id];
                if (!answer) return null;
                const choice = scene.choices.find(c => c.id === answer);
                if (!choice) return null;

                const isEgalitarianPath = choice.scores.egalitarianIndex >= 8;

                return (
                  <div 
                    key={scene.id} 
                    className="flex gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-200 items-start shadow-inner"
                    id={`covenant-item-${scene.id}`}
                  >
                    <div className={`mt-0.5 rounded-full p-1 text-white ${isEgalitarianPath ? 'bg-emerald-600' : 'bg-neutral-400'}`}>
                      <Check size={11} fill="currentColor" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-xs font-bold text-neutral-900">
                          {scene.title}
                        </span>
                        <span className="text-[9px] font-mono bg-neutral-200 px-1.5 py-0.5 rounded text-neutral-600 font-semibold">
                          Choice {answer}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-neutral-700">
                        "{choice.text}"
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Live Notes / Custom Covenant Edit block */}
        <div className="space-y-2 border-t border-neutral-200 pt-5">
          <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
            <Edit size={14} className="text-emerald-600" />
            My Custom Living Goals & Reflection Log (Self-reflective space)
          </label>
          <textarea
            value={customCovenantGoal}
            onChange={(e) => handleSaveGoal(e.target.value)}
            placeholder="Type any private personal agreements, partner reflections, or personal promises here to seal them into your covenant..."
            className="w-full min-h-[96px] rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 shadow-inner font-serif"
            id="covenant-custom-notes"
          />
        </div>

        {/* Bottom stats note */}
        <div className="flex border-t border-neutral-200 pt-4 justify-between items-center font-mono flex-wrap gap-2 text-[10px] text-neutral-500">
          <span>ConsenTeach Framework — Sovereign Egalitarian Protocol</span>
          <button 
            onClick={onReset}
            className="text-emerald-600 font-bold hover:underline cursor-pointer"
            id="reset-dashboard-btn"
          >
            Reset All Scenario Choices
          </button>
        </div>
      </div>
    </div>
  );
}
