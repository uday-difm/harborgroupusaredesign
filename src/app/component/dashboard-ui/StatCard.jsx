import Link from "next/link";
import React from "react";

export function StatCard({ label, count, href }) {
  return (
    <div className="card-elevated bg-navy-950 text-white p-6 flex flex-col justify-between transition hover:scale-[1.02]">
      <div className="text-sm font-medium text-navy-200 mb-2">{label}</div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-2xl font-semibold text-accent">{count}</span>
        {href && (
          <Link href={href} className="text-sm text-accent hover:underline font-medium">
            View All
          </Link>
        )}
      </div>
    </div>
  );
}
