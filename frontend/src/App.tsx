import { useState } from 'react';
import TextArea from './components/TextArea';
import AnalyzeButton from './components/AnalyzeButton';
import ResultsCard from './components/ResultsCard';
import { analyzeText } from './services/api';
import type { AnalysisResult } from './services/api';

function App() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await analyzeText(text);
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        setError(response.error || 'Analysis failed. Please try again.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText('');
    setResult(null);
    setError(null);
  };

  return (
    <div className="app">
      {/* Hero */}
      <header className="hero">
        <h1 className="hero__title">
          Detect the <span>Slop.</span>
        </h1>
        <p className="hero__subtitle">Powered by Groq</p>
      </header>

      {/* Input */}
      {!result && (
        <>
          <TextArea value={text} onChange={setText} disabled={loading} />
          <AnalyzeButton
            onClick={handleAnalyze}
            loading={loading}
            disabled={!text.trim()}
          />
        </>
      )}

      {/* Error */}
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}

      {/* Results */}
      {result && <ResultsCard result={result} onClear={handleClear} />}

      {/* Footer */}
      <footer className="footer">
        SlopSweep &mdash; Because the internet deserves better.
      </footer>
    </div>
  );
}

export default App;
