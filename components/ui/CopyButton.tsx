"use client";

import { useState } from "react";

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="text-xs text-zinc-500 hover:text-white transition-colors px-2 py-1 rounded hover:bg-zinc-700"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
