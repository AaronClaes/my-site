import type { ReactNode } from "react";
import Topbar from "./_components/topbar";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Topbar />
      <main className="h-full w-full p-4">{children}</main>
    </div>
  );
}
