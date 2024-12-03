import Image from "next/image";

export default function Picture() {
  return (
    <div className="my-8">
      <div className="hide-scrollbar -my-4 flex gap-8 overflow-y-auto py-4 px-8">
        <div className="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 transform">
          <Image
            src="/user1.png"
            alt="User profile"
            className="absolute inset-0 h-full w-full object-cover"
            width={112}
            height={112}
          />
        </div>
      </div>
    </div>
  );
}
