import { getPages } from "@/app/source";
import { SiReact } from "@icons-pack/react-simple-icons";
import { Card, Cards } from "fumadocs-ui/components/card";
export default function BlogOverview({
  category,
  hideIndex = true,
}: {
  category?: string;
  hideIndex: boolean;
}) {
  const blogs = getPages();

  return (
    <Cards>
      {blogs
        .filter((blog) => {
          if (category) {
            if (!blog.slugs.includes(category)) return false;
          }
          if (hideIndex) {
            // An index page only has one slug.
            if (blog.slugs.length < 2) return false;
          }
          return true;
        })
        .map((blog) => (
          <Card
            href={blog.url}
            key={blog.url}
            title={blog.data.title}
            description={blog.data.description ?? ""}
            icon={<SiReact />}
          />
        ))}
    </Cards>
  );
}
