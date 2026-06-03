const API_BASE = 'http://127.0.0.1:5000/api';

export interface AnalysisResult {
  _id: string;
  slop_score: number;
  reasoning: string;
  flagged_phrases: string[];
  verdict: 'authentic' | 'suspicious' | 'slop';
}

export interface AnalyzeResponse {
  success: boolean;
  data?: AnalysisResult;
  error?: string;
}

export async function analyzeText(text: string): Promise<AnalyzeResponse> {
  const response = await fetch(`${API_BASE}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Something went wrong.');
  }

  return response.json();
}
