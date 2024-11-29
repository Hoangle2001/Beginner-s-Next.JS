import Hero from "@/components/Hero";
import "@/app/globals.css";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Banner from "@/components/Banner";
import Subscribe from "@/components/Subscribe";
import contentfulClient from "@/Utils/contentfulClient";

export default async function Home() {
  const response = await contentfulClient.getEntries({
    content_type: "hero", // Tên content type trong Contentful
  });

  console.log('>>>>', JSON.stringify(response.items, null, 2)); // Kiểm tra dữ liệu trả về từ Contentful

  const hero = response.items[0]?.fields;
  return (
    <main className="flex flex-col bg-white w-full justify-center row-start-2 items-center sm:items-start">
      <Hero
        title={hero?.title || "Default Title"} // Xử lý khi thiếu dữ liệu
        body={hero?.body || "Default Body"} // Kiểm tra body có kiểu Document hoặc string
        image={
          hero?.image?.fields?.file?.url
            ? `https:${hero.image.fields.file.url}`
            : "/default-image.jpg"
        } // Xử lý ảnh mặc định
      />
      <Project />
      <Services />
      <Testimonial />
      <Banner />
      <Subscribe />
    </main>
  );
}
