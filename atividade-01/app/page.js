import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Atividade 01</h1>

      <br />

      <p>Escolha um Exercicio:</p>

      <nav>
        <Link href="/exercicio1" style={{ color: "lightblue"}}>Exercicio 1 </Link>
        <Link href="/exercicio2" style={{ color: "lightblue"}}>Exercicio 2 </Link>
        <Link href="/exercicio3" style={{ color: "lightblue"}}>Exercicio 3 </Link>
        <Link href="/exercicio4" style={{ color: "lightblue"}}>Exercicio 4 </Link>
      </nav>
    </main>
  );
}