"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login"); // Redirige automáticamente a /login
  }, []);

  return <p>Redirigiendo...</p>;
}
