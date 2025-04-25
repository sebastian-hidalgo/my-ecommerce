import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Welcome to My E-commerce
      </h1>
      <p className="text-xl text-gray-600 text-center max-w-2xl">
        A modern e-commerce platform built with Next.js, Supabase, and Tailwind CSS
      </p>
    </div>
  );
}
