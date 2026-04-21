import { registry } from "@/lib/registry";
import ComponentCard from "@/components/ui/ComponentCard";

const categories = [...new Set(registry.map((e) => e.category))];

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-14">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-14">
          <h1 className="text-4xl font-bold text-white mb-3">Component Lab</h1>
          <p className="text-zinc-400 text-lg">
            A personal collection of interesting frontend components.
          </p>
        </div>

        {categories.length === 0 ? (
          <p className="text-zinc-600">No components yet. Add one to the registry.</p>
        ) : (
          <div className="flex flex-col gap-14">
            {categories.map((category) => {
              const entries = registry.filter((e) => e.category === category);
              return (
                <section key={category}>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {entries.map((entry) => (
                      <ComponentCard key={`${entry.category}/${entry.slug}`} entry={entry} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
