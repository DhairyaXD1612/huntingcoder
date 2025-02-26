import Image from "next/image";
import TypingSpan from "./components/TypingSpan";

export default function Home() {
  return (
    <div className="pt-5 bg-gray-200 h-[89vh] flex flex-col items-center px-4">
      <h1 className="font-mono text-3xl font-bold text-[#4ec9b0] tracking-wide mt-5 mb-10 underline underline-offset-[14px]">
        &lt;<TypingSpan/>Coder/&gt;
      </h1>
      <p className="text-lg text-gray-600 mb-6 mx-[5%] text-justify leading-relaxed">
        A Blog By a hunting coder for other hunting coders ..
      </p>
      <div className="relative">
        <Image
          className="rounded-xl shadow-2xl transition-transform duration-300 hover:scale-105"
          src="/Coder.jpg"
          height={250}
          width={500}
          alt="Hunting Coder"
        />
      </div>
      
    </div>
  );
}