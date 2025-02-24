import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-5 h-[89vh] flex flex-col items-center justify-centerpx-4">
      <h1 className="text-3xl font-bold tracking-wide mb-4">
        Hunting Coder
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        A Blog By a hunting coder for other hunting coders
      </p>
      <div className="relative">
        <Image
          className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          src="/Coder.jpg"
          height={250}
          width={500}
          alt="Hunting Coder"
        />
        <div className="absolute inset-0 rounded-xl shadow-lg blur-md opacity-20"></div>
      </div>
    </div>
  );
}
