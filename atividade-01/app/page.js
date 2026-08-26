import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Meu Site</h1>

      <p>Escolha uma página:</p>

      <nav>
        <Link href="/exercicio1">Página 1</Link>
        <Link href="/exercicio2">Página 2</Link>
        <Link href="/exercicio3">Página 3</Link>
        <Link href="/exercicio4">Página 4</Link>
      </nav>
    </main>
  );
}