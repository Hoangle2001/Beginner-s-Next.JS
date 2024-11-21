// components/Subscribe.tsx
import React from "react";
import { FaBell } from "react-icons/fa";

// Cập nhật đường dẫn hình ảnh
const bgStyle = {
  backgroundImage: `url(/bg.png)`, // Đảm bảo đường dẫn bắt đầu với "/"
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe: React.FC = () => {
  return (
    <section className="text-black w-full h-screen">
      <div
        style={{ ...bgStyle, width: "100%", height: "100vh" }}
        className="flex justify-center items-center py-24 md:py-48 fade-in"
      >
        <div className="flex flex-col justify-center scale-in">
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              450K+ Students are learning from us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae iusto minima
            </p>
            <a
              href="#"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Subscribe Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200 bounce-on-hover" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
