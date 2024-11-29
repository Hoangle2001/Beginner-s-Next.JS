'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';
import contentfulClient from '@/Utils/contentfulClient'; // Đảm bảo bạn đã cấu hình đúng

export default function Informe() {
  const [informeData, setInformeData] = useState<any>(null);

  useEffect(() => {
    // Lấy dữ liệu từ Contentful khi component được render lần đầu
    const fetchInformeData = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'about', // Tên content type trong Contentful
        });
        setInformeData(response.items[0]?.fields); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchInformeData(); // Gọi hàm lấy dữ liệu
  }, []);

  if (!informeData) {
    return <div>Loading...</div>; // Hiển thị loading nếu chưa có dữ liệu
  }

  // Kiểm tra xem location có phải là object không, nếu có thì lấy thông tin từ nó
  const location = informeData.location;
  let locationDisplay = "";

  // Nếu location là đối tượng, tạo chuỗi địa chỉ hợp lệ
  if (typeof location === 'object' && location !== null) {
    if (location.lat && location.lon) {
      locationDisplay = `${location.lat},${location.lon}`;
    }
  } else {
    // Nếu location là chuỗi, sử dụng trực tiếp
    locationDisplay = location || "Hochiminh, VietNam";
  }

  return (
    <section className="w-full h-2/5 bg-white flex justify-center">
      <div className="flex items-center justify-between w-1/2">
        <div className="flex-1 flex flex-col justify-around space-y-6">
          <h1 className="text-2xl font-bold">{informeData.name || "Hoang Le"}</h1>
          <p className="max-w-md font-mono text-sm text-muted-foreground print:text-[12px]">
            {informeData.role || "Detail-oriented Full Stack Engineer"}
          </p>
          <p className="max-w-md font-mono text-xs text-muted-foreground">
            <a
              className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href={`https://maps.app.goo.gl/${locationDisplay}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locationDisplay}
            </a>
          </p>
          <div className="flex gap-6 mt-5 cursor-pointer">
            <a
              href="https://www.facebook.com/profile.php?id=100004353495201"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook
                size={40}
                className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.instagram.com/th.hoang2908/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                size={40}
                className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
              />
            </a>
            <a
              href="https://www.pinterest.com/hl5998/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsPinterest
                size={40}
                className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
              />
            </a>
            <Link href="/contact">
              <IoIosContact
                size={40}
                className="border-4 border-blue-100 hover:border-blue-300 rounded-full hover:animate-bounce"
              />
            </Link>
          </div>
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
        <img
           className="aspect-square h-full w-full"
           src={informeData.avatar?.fields?.file?.url || "/avatar.jpg"} // Kiểm tra đúng cấu trúc của avatar
           alt={informeData.name || "Hoang Le"}
        />
        </span>
      </div>
    </section>
  );
}
