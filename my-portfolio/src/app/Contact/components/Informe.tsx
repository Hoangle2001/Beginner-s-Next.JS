'use client'
import Image from "next/image";

export default function Informe() {
  return (
    <div className="sm:px-8 mt-12"> 
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col gap-16">
                <div>
                  <article className="md:grid md:grid-cols-4 md:items-baseline">
                    <div className="md:col-span-3 group relative flex flex-col items-start">
                      <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 text-balance">
                        <span className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></span>
                          <a href="#">
                            <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                            <span className="relative z-10">How to write code?</span>
                          </a>
                      </h2>
                      <div className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5" >
                        <span className="absolute inset-y-0 left-0 flex items-center">
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        </span>
                        2024-12-03
                      </div>
                      <p className="relative z-10 mt-2 text-sm">Different stages of company require different thinking</p>
                      <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary">
                        Read node
                      <span className="ml-1">→</span>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
              <div className="lg:ml-auto space-y-10 lg:pl-16 xl:pl-24">
                <div className="max-w-[420px] rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                  <h2 className="max-w-[420px] rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <span>Work</span>
                  </h2>
                  <ol className="mt-6 space-y-4">
                    <li className="flex gap-4">
                      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        src="/user1.png"
                        alt="User profile"
                        className="h-7 w-7 rounded-full object-cover"
                        width={112}
                        height={112}
                      />
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-x-2">
                        <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">WeatherApp</dd>
                        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">2023-2024</dd>
                        <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">Front-end</dd>
                      </dl>
                    </li>
                    <li className="flex gap-4">
                      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        src="/user1.png"
                        alt="User profile"
                        className="h-7 w-7 rounded-full object-cover"
                        width={112}
                        height={112}
                      />
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-x-2">
                        <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Landing Page</dd>
                        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">2023-2024</dd>
                        <dd className="w-full text-xs text-zinc-500 dark:text-zinc-400">Front-end</dd>
                      </dl>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
