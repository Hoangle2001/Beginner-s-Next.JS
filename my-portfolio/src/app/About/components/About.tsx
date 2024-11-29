'use client';

import React, { useEffect, useState } from 'react';
import contentfulClient from '@/Utils/contentfulClient'; // Đảm bảo bạn đã cấu hình đúng

export default function About() {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    // Lấy dữ liệu từ Contentful khi component được render lần đầu
    const fetchAboutData = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'about', // Tên content type trong Contentful
        });
        setAboutData(response.items[0]?.fields); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchAboutData(); // Gọi hàm lấy dữ liệu
  }, []);

  if (!aboutData) {
    return <div>Loading...</div>; // Hiển thị loading nếu chưa có dữ liệu
  }

  return (
    <section className="flex w-1/2 min-h-0 flex-col gap-y-3 mt-6">
      <h1 className="text-2xl font-bold">About Me</h1>
      <p className="font-mono text-sm text-muted-foreground print:text-[12px]">
        {aboutData.about || "As a Full Stack Engineer, I specialize in taking products from concept to launch. I excel in leading teams and creating environments where individuals perform at their best. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience working remotely with companies worldwide."}
      </p>
    </section>
  );
}
