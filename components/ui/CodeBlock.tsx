import { highlight } from "sugar-high";
import CopyButton from "./CopyButton";

export default function CodeBlock({ code }: { code: string }) {
  const html = highlight(code);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <span className="text-xs text-zinc-500 font-mono">source</span>
        <CopyButton code={code} />
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code
          className="font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}
