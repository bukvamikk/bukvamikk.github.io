/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ChoiceId = 'A' | 'B' | 'C';

export interface Choice {
  id: ChoiceId;
  text: string;
  systemicImpact: string; // The double-loop logic explaining immediate vs systemic effects
  egoThreat: string;      // Specific relational "Ego-Threat" highlighted
  egalitarianGoal: string; // Specific constructive "Egalitarian Goal" supported
  scores: {
    egalitarianIndex: number;
    conflictResolution: number;
    boundaryResiliency: number;
  };
}

export interface Scenario {
  id: string;
  title: string;
  level: 1 | 2 | 3;
  levelName: string;
  levelFocus: string;
  topic: string;
  narrative: string;
  question: string;
  choices: [Choice, Choice, Choice];
}

export interface UserState {
  answeredScenarios: Record<string, ChoiceId>;
  isCompleted: boolean;
  notes: Record<string, string>; // Optional notes/journal for couples reflections
}
