import { DocsLayout } from "fumadocs-ui/layout";
import { pageTree } from "../source";
import { SiLinkedin, SiX } from "@icons-pack/react-simple-icons";

type SiteDocsLayoutProps = {
  children: React.ReactNode;
};

export default function SiteDocsLayout({ children }: SiteDocsLayoutProps) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: "Aaron Claes",
        githubUrl: "https://github.com/AaronClaes",
      }}
      sidebar={{ enabled: false }}
      links={[
        {
          text: "X",
          url: "https://x.com/aaronclaes",
          icon: <SiX />,
          external: true,
          type: "secondary",
        },
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/aaron-claes-618626207/",
          icon: <SiLinkedin />,
          external: true,
          type: "secondary",
        },
        {
          text: "Blogs",
          url: "/blogs",
          type: "main",
          active: "nested-url",
        },
      ]}
      containerProps={{ className: "h-full" }}
    >
      {children}
    </DocsLayout>
  );
}
