'use client';

import { useEffect, useState } from 'react';
import type { CopyCodeTexts } from '../../texts';

// Knappen "Kopiera koden" på länksidan. Kopierar koden som den visas (XXXX-XXXX) – appen tar den
// både med och utan bindestreck.
export default function CopyCode({ code, texts }: { code: string; texts: CopyCodeTexts }) {
  const [state, setState] = useState<'ready' | 'copied' | 'failed'>('ready');

  // "Kopierad!" visas en stund och sedan står det "Kopiera koden" igen.
  useEffect(() => {
    if (state !== 'copied') return;
    const timer = setTimeout(() => setState('ready'), 2500);
    return () => clearTimeout(timer);
  }, [state]);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(code);
      ok = true;
    } catch {
      ok = copyWithSelection(code);
    }
    setState(ok ? 'copied' : 'failed');
  }

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={copy}
        className="rounded-full bg-[#14231e] px-6 py-2.5 font-bold text-[#fbf8f1] shadow-[0_4px_0_#04150f] transition-transform hover:-translate-y-0.5"
      >
        {state === 'copied' ? texts.copied : texts.button}
      </button>
      <p role="status" className="mt-2 min-h-[1.25rem] text-sm text-[#7a1a15]">
        {state === 'failed' && texts.failed}
        {state === 'copied' && <span className="sr-only">{texts.copied}</span>}
      </p>
    </div>
  );
}

// Reserv när navigator.clipboard saknas eller inte får användas (till exempel i vissa appars
// inbyggda webbläsare): markera texten i ett dolt fält och kopiera den.
function copyWithSelection(text: string): boolean {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.top = '0';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  let ok = false;
  try {
    ok = document.execCommand('copy');
  } catch {
    ok = false;
  }
  area.remove();
  return ok;
}
