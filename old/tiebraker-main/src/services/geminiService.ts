import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisType } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function analyzeDecision(decision: string, type: AnalysisType) {
  const model = "gemini-3.1-pro-preview";
  
  let prompt = "";
  
  switch (type) {
    case AnalysisType.PROS_CONS:
      prompt = `Provide a detailed Pros and Cons list for the following decision: "${decision}". 
      Format the response as a JSON object with the following structure:
      {
        "title": "Analysis Title",
        "summary": "A brief summary of the decision",
        "pros": ["pro 1", "pro 2", ...],
        "cons": ["con 1", "con 2", ...]
      }`;
      break;
    case AnalysisType.COMPARISON_TABLE:
      prompt = `Provide a comparison table for the options involved in this decision: "${decision}". 
      Identify the main options and compare them across relevant criteria.
      Format the response as a JSON object with the following structure:
      {
        "title": "Analysis Title",
        "summary": "A brief summary of the decision",
        "headers": ["Criterion", "Option A", "Option B", ...],
        "rows": [["Criterion 1", "Value A1", "Value B1", ...], ...]
      }`;
      break;
    case AnalysisType.SWOT:
      prompt = `Perform a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for the following decision: "${decision}". 
      Format the response as a JSON object with the following structure:
      {
        "title": "Analysis Title",
        "summary": "A brief summary of the decision",
        "strengths": ["strength 1", ...],
        "weaknesses": ["weakness 1", ...],
        "opportunities": ["opportunity 1", ...],
        "threats": ["threat 1", ...]
      }`;
      break;
  }

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });

  return JSON.parse(response.text);
}
