/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Choice, Scenario } from '../types';
import { X, Shield, Scale, MessageSquare, Flame, Check } from 'lucide-react';

interface DoubleLoopModalProps {
  isOpen: boolean;
  onClose: () => void;
  scenario: Scenario;
  choice: Choice;
  onConfirm: () => void;
  isCommitted: boolean;
}

export function DoubleLoopModal({
  isOpen,
  onClose,
  scenario,
  choice,
  onConfirm,
  isCommitted,
}: DoubleLoopModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay closely matching Bento styling */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          id="double-loop-modal-backdrop"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-800 shadow-2xl md:p-8"
          id="double-loop-modal-box"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 cursor-pointer"
            aria-label="Close details"
            id="close-double-loop"
          >
            <X size={20} />
          </button>

          {/* Level Header Info */}
          <div className="mb-4 flex flex-wrap items-center gap-2 font-mono">
            <span className="rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-neutral-600">
              {scenario.levelName}
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase text-emerald-700">
              {scenario.topic}
            </span>
          </div>

          <h3 className="font-display text-xl font-medium tracking-tight text-neutral-900 md:text-2xl" id="modal-scenario-title">
            Double-Loop Systemic Analysis
          </h3>
          <p className="mt-1 text-sm text-neutral-500 italic">
            Scenario: "{scenario.title}" — Selected Choice {choice.id}
          </p>

          <hr className="my-5 border-neutral-200" />

          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            {/* The Selected Choice Text */}
            <div className="rounded-xl border border-dashed border-neutral-200 bg-neutral-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-mono">
                Selected Action Path
              </span>
              <p className="mt-1 text-sm md:text-base text-neutral-800 font-serif leading-relaxed">
                "{choice.text}"
              </p>
            </div>

            {/* Systemic Loop Block */}
            <div className="space-y-2">
              <h4 className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wider font-mono ${
                choice.scores.egalitarianIndex <= 3 
                  ? 'text-red-700' 
                  : choice.scores.egalitarianIndex <= 7 
                  ? 'text-amber-700' 
                  : 'text-emerald-700'
              }`}>
                <Scale size={16} />
                Systemic Impact (Dismantling or Reinforcing)
              </h4>
              <p className={`text-sm md:text-base leading-relaxed p-4 rounded-xl border ${
                choice.scores.egalitarianIndex <= 3 
                  ? 'bg-red-50 text-red-900 border-red-200' 
                  : choice.scores.egalitarianIndex <= 7 
                  ? 'bg-amber-50 text-amber-900 border-amber-200' 
                  : 'bg-emerald-50 text-emerald-900 border-emerald-100'
              }`}>
                {choice.systemicImpact}
              </p>
            </div>

            {/* Split Grid for Double Loop Dynamics */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 space-y-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-700 font-mono">
                  <Flame size={14} />
                  Revealed Ego-Threat
                </span>
                <p className="text-sm text-amber-900 leading-relaxed">
                  {choice.egoThreat}
                </p>
              </div>

              <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 space-y-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 font-mono">
                  <Shield size={14} />
                  Egalitarian Goal
                </span>
                <p className="text-sm text-blue-900 leading-relaxed">
                  {choice.egalitarianGoal}
                </p>
              </div>
            </div>

            {/* Projected Scores Effect */}
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono">
                Relational Style Weightings
              </span>
              <div className="mt-3 grid grid-cols-3 gap-3 text-center font-mono">
                <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-sm">
                  <div className="text-lg font-bold text-emerald-600">+{choice.scores.egalitarianIndex}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Egalitarian</div>
                </div>
                <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-sm">
                  <div className="text-lg font-bold text-amber-600">+{choice.scores.conflictResolution}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Conflict Res</div>
                </div>
                <div className="rounded-lg bg-white p-2 border border-neutral-200 shadow-sm">
                  <div className="text-lg font-bold text-blue-600">+{choice.scores.boundaryResiliency}</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Resiliency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons footer */}
          <div className="mt-6 flex flex-col gap-3 border-t border-neutral-200 pt-5 sm:flex-row sm:justify-end font-mono">
            <button
              onClick={onClose}
              className="rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-600 transition-all hover:bg-neutral-50 hover:text-neutral-800 cursor-pointer shadow-sm"
              id="modal-explore-alternative"
            >
              Explore Other Paths
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 cursor-pointer"
              id="modal-commit-action"
            >
              <Check size={16} />
              {isCommitted ? 'Keep Commitment' : 'Commit & Lock Response'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
