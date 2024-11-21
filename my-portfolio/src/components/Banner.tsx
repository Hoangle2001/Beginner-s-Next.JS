import React from "react";
import Image from "next/image"; // Sử dụng Image từ Next.js để tối ưu hóa hình ảnh
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <div className="flex items-center justify-center text-black">
      <div className="container py-4 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex items-center">
          <div className="animate-opacity-in">
            <Image
              src="/banner.png"
              alt="Banner"
              width={450}
              height={350}
              className="object-cover drop-shadow"
            />
          </div>
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <div className="animate-opacity-in text-3xl md:text-4xl font-bold !leading-snug">
              Bringing Innovative Front-End Solutions to Life
            </div>
            <div className="flex flex-col gap-6">
              <div className="animate-opacity-in flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-200 duration-300 hover:shadow-2xl">
                <FaBookReader className="text-2xl" />
                <p className="text-lg">Custom-Built Web Solutions</p>
              </div>
              <div className="animate-opacity-in flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-200 duration-300 hover:shadow-2xl">
                <GrUserExpert className="text-2xl" />
                <p className="text-lg">Expertise in Front-End Development</p>
              </div>
              <div className="animate-opacity-in flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-blue-200 duration-300 hover:shadow-2xl">
                <MdOutlineAccessTime className="text-2xl" />
                <p className="text-lg">Continuous Support & Maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
