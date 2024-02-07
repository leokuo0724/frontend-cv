import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  image?: StaticImageData;
}

export function ProjectCard({ title, description, tags, link, image }: Props) {
  return (
    <Card
      className="grid gap-4 overflow-hidden border border-muted p-3"
      style={{ gridTemplateColumns: "120px 1fr" }}
    >
      {image && (
        <a href={link} target="_blank">
          <Image className="h-30 w-30 rounded" src={image} alt={title} />
        </a>
      )}

      <div className="flex flex-col">
        <CardHeader className="mb-2">
          <div className="space-y-1">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}{" "}
                  <span className="size-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            <div className="hidden font-mono text-xs underline print:visible">
              {link
                ?.replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
            <CardDescription className="font-mono text-xs">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
