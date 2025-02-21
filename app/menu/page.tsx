"use client";
import { useRouter } from "next/navigation";

export default function MenuPage() {
  const router = useRouter();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-bold mb-4">Menú Principal</h2>
        <button
          onClick={() => router.push("/camara")}
          className="w-full bg-green-500 text-white p-2 rounded mb-2"
        >
          Cámara en Vivo
        </button>
      </div>
    </div>
  );
}
