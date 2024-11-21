import React from "react";
import Image from "next/image"; // Import Image từ Next.js

// Tạo kiểu dữ liệu cho Testimonial
interface TestimonialData {
  id: number;
  name: string;
  role: string;
  image: string;
}

const testimonials: TestimonialData[] = [
  { id: 1, name: "Name Goes here", role: "Assistant Manager", image: "/images/t1.png" },
  { id: 2, name: "John Doe", role: "Manager", image: "/images/t1.png" },
  { id: 3, name: "Jane Smith", role: "CEO", image: "/images/t1.png" },
  { id: 4, name: "Sarah Connor", role: "Developer", image: "/images/t1.png" }
]; // Tạo danh sách testimonials

const Testimonial: React.FC = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="flex animate-scroll gap-10">
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div key={index} className="relative rounded-xl p-8 hover:animate-pulse">
            <div className="overflow-hidden relative max-w-md mx-auto bg-blue-100 shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
              <Image
                src="/user1.png"
                alt={testimonial.name}
                className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
                width={112} // Đặt width cố định cho hình ảnh
                height={112} // Đặt height cố định cho hình ảnh
              />
              <div className="min-w-0 py-5 pl-28 pr-5">
                <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                  {testimonial.name}
                </div>
                <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
