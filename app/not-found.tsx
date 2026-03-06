import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="bg-white py-28">
      <Container className="text-center">
        <h1 className="text-4xl font-bold text-base-black">Página no encontrada</h1>
        <p className="mt-4 text-base text-base-dark">La ruta solicitada no existe.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-base-black"
        >
          Volver al inicio
        </Link>
      </Container>
    </section>
  );
}
