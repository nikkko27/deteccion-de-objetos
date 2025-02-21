"use client";
import { useRouter } from "next/navigation";

export default function MenuPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Menú Principal</h1>
      <button onClick={() => router.push("/camera")} className="bg-green-500 text-white p-2 rounded mb-2">
        📷 Cámara en Vivo
      </button>
      <button onClick={() => router.push("/settings")} className="bg-gray-500 text-white p-2 rounded">
        ⚙️ Configuración
      </button>
    </div>
  );
}
