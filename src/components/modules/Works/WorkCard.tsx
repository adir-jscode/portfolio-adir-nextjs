import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  id: string;
  name: string;
  description: string;
  technology: string[];
  githubLink?: string;
  liveLink?: string;
  thumbnail?: string;
};

export default function WorkCard({
  id,
  name,
  description,
  technology,
  githubLink,
  liveLink,
  thumbnail,
}: Project) {
  return (
    <Card
      key={id}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-all"
    >
      {/* Thumb */}
      <div className="relative h-48 w-full overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-600/20 to-black text-orange-500">
            <span className="text-sm font-semibold">No Thumbnail</span>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <h3 className="text-lg md:text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
          {name}
        </h3>
        <p className="mt-2 text-sm text-black/70 line-clamp-3">{description}</p>

        {/* Tech badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technology.map((t) => (
            <span
              key={t}
              className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-xs text-orange-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-3">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm text-black hover:border-orange-500/50 hover:text-orange-400 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm text-black hover:border-orange-500/50 hover:text-orange-400 transition-colors"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {/* see more */}
          <Link
            href={`/projects/${id}`}
            className="ml-auto inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm text-black hover:border-orange-500/50 hover:text-orange-400 transition-colors"
          >
            <span>Details</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
