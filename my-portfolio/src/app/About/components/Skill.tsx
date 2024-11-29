'use client'

import React, { useEffect, useState } from 'react';
import contentfulClient from '@/Utils/contentfulClient'; // Đảm bảo bạn đã cấu hình đúng client

export default function Skill() {
  const [skills, setSkills] = useState<string[]>([]); // Lưu trữ các kỹ năng dưới dạng mảng chuỗi

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        // Lấy dữ liệu từ Contentful với content_type là 'skill'
        const response = await contentfulClient.getEntries({
          content_type: 'skill', // content_type là 'skill'
        });

        // Trích xuất các entry từ response và lưu vào state
        const skillsData = response.items.map((item: any) => item.fields.name); // Giả sử trường 'name' chứa tên kỹ năng
        setSkills(skillsData);
      } catch (error) {
        console.error('Error fetching skills data from Contentful:', error);
      }
    };

    fetchSkillsData(); // Gọi hàm lấy dữ liệu khi component render
  }, []); // Chỉ chạy 1 lần khi component được render

  return (
    <section className="flex w-1/2 min-h-0 flex-col gap-y-3 mt-6">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-1">
        {/* Lặp qua mảng skills để hiển thị các kỹ năng */}
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap border-transparent bg-black text-white hover:bg-slate-500 print:text-[10px]"
            >
              {skill}
            </div>
          ))
        ) : (
          <div>Loading skills...</div> // Hiển thị khi chưa có dữ liệu
        )}
      </div>
    </section>
  );
}
