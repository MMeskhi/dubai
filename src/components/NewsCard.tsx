import Link from "next/link";
import type { Article } from "@/data/articles";

export default function NewsCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/media/${article.id}`}
      className="flex flex-col gap-4 no-underline text-inherit group"
    >
      <div className="rounded-2xl overflow-hidden aspect-[4/5]">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover block transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between gap-3">
          <span className="px-[14px] py-[5px] border-[1.5px] border-stroke rounded-full text-[13px] text-ink shrink-0">
            {article.categoryLabel}
          </span>
          <span className="text-[13px] text-muted shrink-0">{article.date}</span>
        </div>
        <p className="text-[15px] font-semibold text-ink leading-relaxed">
          {article.title}
        </p>
      </div>
    </Link>
  );
}
