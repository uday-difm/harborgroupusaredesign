import React from 'react';
import Link from 'next/link';

export const Breadcrumbs = ({ items = [], variant = 'light' }) => {
  const textColorClass = variant === 'dark' ? 'text-white/70' : 'text-navy-500';
  const hoverColorClass = variant === 'dark' ? 'hover:text-white' : 'hover:text-navy-900';
  const separatorColorClass = variant === 'dark' ? 'text-white/40' : 'text-navy-300';
  const activeColorClass = variant === 'dark' ? 'text-white font-semibold' : 'text-navy-900 font-semibold';

  // Ensure "Home" is always at the beginning
  const hasHome = items.length > 0 && items[0].label.toLowerCase() === 'home';
  const allItems = hasHome ? items : [{ label: 'Home', href: '/' }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className={`flex flex-wrap items-center gap-2 text-sm ${textColorClass}`}>
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                {isLast || !item.href ? (
                  <span className={activeColorClass} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className={`transition-colors ${hoverColorClass}`}>
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <span className={separatorColorClass} aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* JSON-LD for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": allItems.map((item, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": item.label,
              ...(item.href && { "item": `https://harborgroupusa.com${item.href}` })
            }))
          })
        }}
      />
    </>
  );
};
