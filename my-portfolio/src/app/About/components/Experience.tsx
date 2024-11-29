'use client';

import React, { useEffect, useState } from 'react';
import contentfulClient from '@/Utils/contentfulClient'; // Đảm bảo bạn đã cấu hình đúng

export default function Experience() {
  const [experienceData, setExperienceData] = useState<any>(null);

  useEffect(() => {
    // Lấy dữ liệu từ Contentful khi component được render lần đầu
    const fetchExperienceData = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'experience', // Tên content type trong Contentful
        });
        setExperienceData(response.items); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchExperienceData(); // Gọi hàm lấy dữ liệu
  }, []);

  if (!experienceData) {
    return <div>Loading...</div>; // Hiển thị loading nếu chưa có dữ liệu
  }

  return (
    <section className="flex min-h-0 flex-col gap-y-3 w-1/2 mt-6">
      <h2 className="text-xl font-bold">Work Experience</h2>
      {experienceData.map((entry: any) => (
        <div key={entry.sys.id} className="rounded-lg bg-card text-card-foreground">
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                <a className="hover:underline" href="#">{entry.fields.name}</a> {/* Hiển thị tên */}
                <span className="inline-flex gap-x-1">
                  <div className="inline-flex items-center rounded-md border px-2 py-0.5 font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/60 align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5">
                    {entry.fields.status} {/* Hiển thị status (ví dụ: Remote) */}
                  </div>
                </span>
              </h3>
              <div className="text-sm tabular-nums text-gray-500">
                2024 - present
              </div>
            </div>
            <h4 className="font-mono text-sm leading-none print:text-[12px]">{entry.fields.role}</h4> {/* Hiển thị role */}
          </div>
          <div className="text-pretty font-mono text-muted-foreground mt-2 text-xs print:text-[10px]">
            {entry.fields.content} {/* Hiển thị content */}
          </div>
        </div>
      ))}
    </section>
  );
}
