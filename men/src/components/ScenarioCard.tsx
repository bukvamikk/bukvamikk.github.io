/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Choice, ChoiceId, Scenario } from '../types';
import { BookOpen, Sparkles, CheckCircle, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';

interface ScenarioCardProps {
  scenario: Scenario;
  selectedChoiceId: ChoiceId | null;
  onSelectChoice: (choice: Choice) => void;
  isCommitted: boolean;
  onClearResponse: () => void;
  onNextScenario?: () => void;
}

export function ScenarioCard({
  scenario,
  selectedChoiceId,
  onSelectChoice,
  isCommitted,
  onClearResponse,
  onNextScenario,
}: ScenarioCardProps) {
  return (
    <div
      className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 transition-all duration-300 shadow-sm"
      id={`scenario-card-${scenario.id}`}
    >
      {/* Category Tag Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-4">
        <div className="flex items-center gap-2 font-mono">
          <BookOpen size={15} className="text-emerald-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            {scenario.levelName}
          </span>
          <span className="text-xs text-neutral-350">•</span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            {scenario.topic}
          </span>
        </div>
        {isCommitted && (
          <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-250 px-3 py-1 rounded-full font-mono">
            <CheckCircle size={12} /> Committed
          </div>
        )}
      </div>

      {/* Narrative block */}
      <div className="mt-6 flex-grow space-y-4">
        <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          {scenario.title}
        </h2>
        
        <div className="relative rounded-xl bg-neutral-50 p-5 border-l-4 border-emerald-600 shadow-inner">
          <p className="font-serif text-base leading-relaxed text-neutral-700 md:text-lg italic">
            "{scenario.narrative}"
          </p>
        </div>

        <div className="pt-2">
          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
            <HelpCircle size={14} className="text-neutral-400" />
            Cognitive Prompt
          </h4>
          <p className="mt-1 font-medium text-neutral-800 md:text-md">
            {scenario.question}
          </p>
        </div>
      </div>

      {/* Choices Zone */}
      <div className="mt-8 space-y-3">
        {scenario.choices.map((choice) => {
          const isSelected = selectedChoiceId === choice.id;
          return (
            <button
              key={choice.id}
              onClick={() => onSelectChoice(choice)}
              className={`w-full text-left rounded-xl border p-4 transition-all duration-200 outline-none flex gap-4 cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-950 shadow-sm'
                  : 'border-neutral-200 bg-neutral-50/50 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 text-neutral-800 shadow-sm'
              }`}
              id={`choice-button-${scenario.id}-${choice.id}`}
            >
              {/* Bullet id */}
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold leading-none font-mono ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/10'
                    : 'bg-white border border-neutral-300 text-neutral-500'
                }`}
              >
                {choice.id}
              </div>

              {/* Text */}
              <div className="flex-grow space-y-1">
                <p className="text-sm font-medium leading-relaxed md:text-base">
                  {choice.text}
                </p>
                {isSelected && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest font-mono">
                    <Sparkles size={11} /> Double-loop feedback pending...
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation & Controls Row */}
      {selectedChoiceId && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-5 font-mono text-xs">
          <button
            onClick={onClearResponse}
            className="flex items-center gap-2 font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-800 transition-colors cursor-pointer"
            id="clear-response-btn"
          >
            <RefreshCw size={13} /> Clear Choice
          </button>
          {isCommitted && onNextScenario && (
            <button
              onClick={onNextScenario}
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 font-bold uppercase tracking-wider text-white shadow-sm hover:bg-emerald-700 transition-colors cursor-pointer animate-fade-in"
              id="next-scenario-btn"
            >
              Next Scenario <ArrowRight size={14} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
