'use client';

import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '@/app/hooks/useAppContext';
import { cn } from '@/lib/utils';
import { Folder, GitBranch, TerminalSquare } from 'lucide-react';

interface TerminalInputProps {
  value: string;
  disable: boolean;
  type: 'history' | 'current';
}

const TerminalInput = ({ value, disable, type }: TerminalInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState(value);
  const { setCmd } = useAppContext();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCmd(input);
      setInput('');
    }
  };

  return (
    <div className={cn('pt-4', type === 'current' && 'px-4')}>
      
      {/* === TOP BAR (Enhanced Colors + Soft Glow) === */}
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center gap-2 bg-[#1b1b1b] px-4 py-1.5 rounded-md shadow-lg border border-[#2a2a2a]">
          <TerminalSquare className="size-5 text-[#4CAF50]" />
          <p className="text-sm text-gray-200 font-medium">Terminal</p>
        </div>

        <div className="flex items-center gap-2 bg-[#202020] px-4 py-1.5 rounded-md shadow-lg border border-[#2a2a2a]">
          <Folder className="size-5 text-[#2E8BFF]" />
          <p className="text-sm text-gray-200 font-medium">portfolio</p>
        </div>

        {value && (
          <div className="flex items-center gap-2 bg-[#252525] px-4 py-1.5 rounded-md shadow-lg border border-[#2a2a2a]">
            <GitBranch className="size-5 text-[#FFD166]" />
            <p className="text-sm text-gray-200 font-medium">{value}</p>
          </div>
        )}
      </div>

      {/* === INPUT AREA (More Styling + Better Contrast) === */}
      <div className="flex items-center gap-3 bg-[#0d0d0d]/80 p-3 rounded-lg border border-[#1d1d1d] shadow-inner">
        {/* Prompt Symbol */}
        <span className="text-[#4CAF50] font-mono text-lg font-semibold">$</span>

        <input
          type="text"
          ref={inputRef}
          disabled={disable}
          onKeyDown={handleKeyDown}
          value={type === 'current' ? input : value === 'greet' ? ' ' : value}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent w-full text-gray-100 font-mono tracking-wide focus:outline-none placeholder:text-gray-500"
          placeholder="type a command (try: help)"
        />
      </div>
    </div>
  );
};

export default TerminalInput;
