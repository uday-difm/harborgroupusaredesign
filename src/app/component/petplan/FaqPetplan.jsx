"use client";
import { FAQSection } from '@/comman/FAQSection';
import React, { useEffect, useState } from 'react'

export const FaqPetplan = () => {
    const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs data from public folder
  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await fetch('/data/faq/petplan.json');
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
      <FAQSection faqs={faqs}/>
    </>
  )
}
