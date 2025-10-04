"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CalendarDays, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  viewCount: number;
  thumbnail?: string;
  author: string;
  createdAt: string;
  updatedAt?: string;
};

export default function BlogCard({
  id,
  title,
  description,
  tags,
  viewCount,
  thumbnail,
  author,
  createdAt,
}: Blog) {
  return (
    <Card className="group relative bg-white/5 border border-white/10 backdrop-blur-sm hover:border-orange-500/40 transition-all duration-300 overflow-hidden rounded-xl">
      {/* Thumbnail */}
      <div className="relative w-full h-56 overflow-hidden">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-600/20 to-black flex items-center justify-center text-orange-500 text-lg font-semibold">
            No Image
          </div>
        )}
      </div>

      {/* Content */}
      <CardHeader className="p-6">
        <h3 className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-black/70 leading-relaxed line-clamp-3">
          {description}
        </p>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-orange-500/10 text-orange-400 px-2 py-1 rounded-full border border-orange-500/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between text-sm text-black/70">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4 text-orange-500" />
              <span>{new Date(createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-orange-500" />
              <span>{viewCount}</span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-orange-500 hover:gap-2 transition-all">
            <Link href={`/blog/${id}`}>Read More</Link>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>

        {/* Author */}
        <div className="mt-3 text-xs text-white/50">By {author}</div>
      </CardContent>
    </Card>
  );
}
