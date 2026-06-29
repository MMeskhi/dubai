import Link from "next/link";
import type { Article } from "@/data/articles";
import NewsCard from "@/components/NewsCard";

const ArrowIcon = () => (
  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5F413D"
      strokeWidth="2"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  </span>
);

export default function RelatedMedia({
  articles,
  currentId,
}: {
  articles: Article[];
  currentId: number;
}) {
  const current = articles.find((a) => a.id === currentId);
  const related = articles
    .filter((a) => a.id !== currentId)
    .sort((a, b) => {
      if (!current) return 0;
      if (a.category === current.category && b.category !== current.category)
        return -1;
      if (b.category === current.category && a.category !== current.category)
        return 1;
      return 0;
    })
    .slice(0, 4);

  return (
    <section className="bg-white py-[100px] max-[768px]:py-16 max-[480px]:py-12">
      <div className="container mx-auto px-6 max-[1200px]:px-12 max-[600px]:px-5">
        <div className="text-center flex flex-col items-center gap-5 mb-12 max-[768px]:mb-8">
          <h2 className="font-heading text-[2.5rem] font-extrabold text-ink leading-tight max-[768px]:text-[2rem] max-[480px]:text-[1.75rem]">
            <span className="text-accent">Related</span> Media
          </h2>
          <p className="text-base text-muted max-w-[660px] leading-relaxed">
            Discover more stories, expert insights, and updates related to this
            topic, including recent news, treatment innovations, and
            perspectives from across Atlantis Clinic.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-12 text-left max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1">
          {related.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/media" className="btn-pill">
            <span>View All News</span>
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
