import { useEffect, useRef, useState } from 'react';
import type { AnalysisResult } from '../services/api';

interface ResultsCardProps {
  result: AnalysisResult;
  onClear: () => void;
}

export default function ResultsCard({ result, onClear }: ResultsCardProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const circleRef = useRef<SVGCircleElement>(null);

  const circumference = 2 * Math.PI * 70; // radius = 70

  useEffect(() => {
    // Animate the score counting up
    let start = 0;
    const end = result.slop_score;
    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 16);

    const timer = setInterval(() => {
      start += 1;
      setDisplayScore(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    // Animate the SVG ring
    if (circleRef.current) {
      const offset = circumference - (result.slop_score / 100) * circumference;
      setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.style.strokeDashoffset = `${offset}`;
        }
      }, 100);
    }

    return () => clearInterval(timer);
  }, [result.slop_score, circumference]);

  const verdictClass = result.verdict;

  return (
    <div className="results">
      <div className="results__card">
        {/* Score Ring */}
        <div className="score-section">
          <div className="score-ring">
            <svg viewBox="0 0 160 160">
              <circle
                className="score-ring__bg"
                cx="80"
                cy="80"
                r="70"
              />
              <circle
                ref={circleRef}
                className={`score-ring__fill score-ring__fill--${verdictClass}`}
                cx="80"
                cy="80"
                r="70"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: circumference,
                }}
              />
            </svg>
            <span className={`score-ring__value score-ring__value--${verdictClass}`}>
              {displayScore}
            </span>
          </div>

          <span className={`verdict-badge verdict-badge--${verdictClass}`}>
            {result.verdict}
          </span>
        </div>

        {/* Reasoning */}
        <div className="reasoning-section">
          <h3 className="reasoning-section__title">Analysis</h3>
          <p className="reasoning-section__text">{result.reasoning}</p>
        </div>

        {/* Flagged Phrases */}
        {result.flagged_phrases && result.flagged_phrases.length > 0 && (
          <div className="flagged-section">
            <h3 className="flagged-section__title">Flagged Phrases</h3>
            <div className="flagged-phrases">
              {result.flagged_phrases.map((phrase, idx) => (
                <span key={idx} className="flagged-phrase">
                  "{phrase}"
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <button id="clear-btn" className="btn-clear" onClick={onClear}>
        Clear &amp; Try Again
      </button>
    </div>
  );
}
