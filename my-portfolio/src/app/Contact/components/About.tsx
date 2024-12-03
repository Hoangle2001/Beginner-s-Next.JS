'use client'

import Link from 'next/link';
import { BsFacebook, BsInstagram, BsPinterest } from 'react-icons/bs';
import { IoIosContact } from 'react-icons/io';

export default function About() {
  return (
    <div className="sm:px-8 mt-9">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">Hoang Le</h1>
              <p className="mt-6 max-w-2xl text-base text-balance">I used to consider myself a software engineer, but the reality is that I simply enjoy creating things. If you'd like to get in touch,</p>
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
          </div>
        </div>
      </div>
    </div>

  );
}
