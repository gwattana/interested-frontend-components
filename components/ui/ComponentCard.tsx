import Link from "next/link";
import { ComponentMeta } from "@/lib/registry";

export default function ComponentCard({ entry }: { entry: ComponentMeta }) {
  return (
    <Link href={`/${entry.category}/${entry.slug}`} className="group block">
      <div className="border border-zinc-800 rounded-2xl p-6 bg-zinc-950 hover:border-zinc-600 transition-colors h-full flex flex-col">
        <div className="mb-3">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider bg-zinc-900 px-2 py-1 rounded">
            {entry.category}
          </span>
        </div>

        <h3 className="text-white font-semibold text-lg mb-2">{entry.name}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed flex-1">{entry.description}</p>

        {entry.tags && (
          <div className="flex flex-wrap gap-1 mt-4">
            {entry.tags.map((tag) => (
              <span key={tag} className="text-xs text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 text-sm text-zinc-500 group-hover:text-white transition-colors">
          View demo →
        </div>
      </div>
    </Link>
  );
}
