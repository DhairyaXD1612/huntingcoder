import TypingSpan from "./components/TypingSpan";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <h1 className="text-5xl font-bold m-5 ">&lt;Hunting Coder/&gt;</h1>
      <h2 className="font-bold text-3xl my-5">Learn <TypingSpan /></h2>
      <Image 
        src="/Coder.jpg"
        className="rounded-md"
        height={200}
        width={400}
        alt=""
        />
    </div>
  );
}
