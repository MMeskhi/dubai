'use client'

import { useState } from 'react'
import Link from 'next/link'
import { articles } from '@/data/articles'

type Filter = 'all' | 'dental' | 'skincare'

export default function MediaFilters() {
  const [filter, setFilter] = useState<Filter>('all')

  const filtered = filter === 'all' ? articles : articles.filter(a => a.category === filter)

  return (
    <>
      <div className="media-filters">
        {(['all', 'dental', 'skincare'] as Filter[]).map(f => (
          <button
            key={f}
            className={`media-filter${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? 'All Media' : f === 'dental' ? 'Dental' : 'Skincare'}
          </button>
        ))}
      </div>

      <div className="media-grid">
        {filtered.map(article => (
          <article key={article.id} className="media-card animate-on-scroll visible" data-category={article.category}>
            <Link href={`/media/${article.id}`} className="media-card__link">
              <div className="media-card__image">
                <img src={article.image} alt={article.title} className="media-card__img" />
                <div className="media-card__overlay" />
              </div>
              <div className="media-card__content">
                <div className="media-card__meta">
                  <span className="media-card__tag">{article.categoryLabel}</span>
                  <span className="media-card__date">{article.date}</span>
                </div>
                <h3 className="media-card__title">{article.title}</h3>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="media-load-more">
        <button className="media-load-more__btn">
          <span>Load More</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </>
  )
}
