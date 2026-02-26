import { BackButton } from "@/components/shared/back-button";
import type { ReactNode } from "react";

export default function PreviewLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <BackButton />
      {children}
    </div>
  );
}
