import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "@/app/source";
import type { ReactNode } from "react";
import "fumadocs-ui/style.css";
import { RootProvider } from "fumadocs-ui/provider";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <DocsLayout
        tree={pageTree}
        nav={{
          title: "Aaron Claes",
          githubUrl: "https://github.com/AaronClaes",
        }}
      >
        {children}
      </DocsLayout>
    </RootProvider>
  );
}
