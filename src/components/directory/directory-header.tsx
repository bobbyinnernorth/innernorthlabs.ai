import { FlaskConical } from "lucide-react";

export function DirectoryHeader() {
  return (
    <header className="flex flex-col items-center gap-4 pb-12 pt-20 text-center">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
          <FlaskConical className="h-6 w-6 text-white" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Inner North Labs
        </h1>
      </div>
      <p className="text-lg text-zinc-400">Landing Page Options</p>
      <p className="max-w-md text-sm text-zinc-500">
        Browse and preview different landing page designs. Click any card to see
        the full page.
      </p>
    </header>
  );
}
