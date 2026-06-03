interface AnalyzeButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

export default function AnalyzeButton({ onClick, loading, disabled }: AnalyzeButtonProps) {
  return (
    <button
      id="analyze-btn"
      className={`btn-analyze ${loading ? 'btn-analyze--loading' : ''}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Sweeping for Slop...' : 'Sweep for Slop'}
    </button>
  );
}
