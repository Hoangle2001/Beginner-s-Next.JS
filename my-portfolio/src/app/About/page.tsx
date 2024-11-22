import Link from "next/link";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

export default function About() {
  return (
    <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 -space-y-1.5">
          <h1 className="text-2xl font-bold">Hoang Le</h1>
          <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            Detail-oriented Full Stack Engineer dedicated to building high-quality products.
          </p>
          <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
            <a
              className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href="https://maps.app.goo.gl/1ZsySoADTARWr8MT8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hochiminh, VietNam
            </a>
          </p>
          <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
            <div className="flex mt-5 space-x-4 cursor-pointer">
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
        </div>
        <span className="relative flex shrink-0 overflow-hidden rounded-xl size-28">
          <img className="aspect-square h-full w-full" src="/avatar.jpg" alt="Hoang Le" />
        </span>
      </div>
    </section>
  );
}
