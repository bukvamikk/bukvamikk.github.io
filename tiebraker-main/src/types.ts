export enum AnalysisType {
  PROS_CONS = "PROS_CONS",
  COMPARISON_TABLE = "COMPARISON_TABLE",
  SWOT = "SWOT",
}

export interface AnalysisResult {
  title: string;
  summary: string;
  type: AnalysisType;
  content: string; // Markdown or structured data
}
