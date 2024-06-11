import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";

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
        <>{children}</>
      </body>
    </html>
  );
}
