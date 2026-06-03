import { useState } from 'react';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

export default function TextArea({ value, onChange, disabled }: TextAreaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const maxLength = 10000;

  return (
    <div className="input-area">
      <div className="textarea-wrapper">
        <textarea
          id="slop-input"
          className={`textarea ${isFocused ? 'textarea--focused' : ''}`}
          placeholder="Paste the text you wish to analyze..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          maxLength={maxLength}
        />
      </div>
      <div className="char-count">
        {value.length.toLocaleString()} / {maxLength.toLocaleString()}
      </div>
    </div>
  );
}
