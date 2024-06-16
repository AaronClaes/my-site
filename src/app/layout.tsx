import "@/styles/globals.css";
import "fumadocs-ui/style.css";

import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { RootProvider } from "fumadocs-ui/provider";

export const metadata = {
  title: "Aaron Claes",
  description: "My personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{ colorScheme: "dark" }}
      lang="en"
      className={`${GeistSans.variable} dark`}
    >
      <body>
        <RootProvider>
          <div className="h-[calc(100vh-64px)]">{children}</div>
          <Analytics />
        </RootProvider>
      </body>
    </html>
  );
}
