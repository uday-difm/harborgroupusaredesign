"use client";
import { FAQSection } from '@/common/FAQSection';
import React, { useEffect, useState } from 'react'

export const FaqRxplan = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs data from public folder
  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch('/data/faq/rxplan.json');
      const data = await res.json();
      setFaqs(data);
      setLoading(false);
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <FAQSection faqs={faqs} />
    </>
  )
}
