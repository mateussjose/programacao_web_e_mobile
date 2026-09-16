"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);

  const [dadosJogador1, setDadosJogador1] = useState([1, 1]);
  const [dadosJogador2, setDadosJogador2] = useState([1, 1]);

  const [jogadorAtual, setJogadorAtual] = useState(1);

  const [resultado, setResultado] = useState("");

  const [vitoriasJogador1, setVitoriasJogador1] = useState(0);
  const [vitoriasJogador2, setVitoriasJogador2] = useState(0);

  const [fimDeJogo, setFimDeJogo] = useState(false);

  function sortearDados() {
    return [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
  }

  function jogar(jogador) {
    if (jogador !== jogadorAtual || fimDeJogo) {
      return;
    }

    const novosDados = sortearDados();

    if (jogador === 1) {
      setDadosJogador1(novosDados);
    } else {
      setDadosJogador2(novosDados);
    }

    if (jogador === 1) {
      setJogadorAtual(2);
      setResultado("");
    } else {
      const somaJogador1 = dadosJogador1[0] + dadosJogador1[1];
      const somaJogador2 = novosDados[0] + novosDados[1];

      let novoResultado = "";

      if (somaJogador1 > somaJogador2) {
        novoResultado = "Jogador 1 venceu";
        setVitoriasJogador1((valor) => valor + 1);
      } else if (somaJogador2 > somaJogador1) {
        novoResultado = "Jogador 2 venceu";
        setVitoriasJogador2((valor) => valor + 1);
      } else {
        novoResultado = "Empate";
      }

      setResultado(novoResultado);

      if (rodada === 5) {
        setFimDeJogo(true);
      } else {
        setRodada((valor) => valor + 1);
        setJogadorAtual(1);
      }
    }
  }

  function jogarNovamente() {
    setRodada(1);
    setDadosJogador1([1, 1]);
    setDadosJogador2([1, 1]);
    setJogadorAtual(1);
    setResultado("");
    setVitoriasJogador1(0);
    setVitoriasJogador2(0);
    setFimDeJogo(false);
  }

  function resultadoFinal() {
    if (vitoriasJogador1 > vitoriasJogador2) {
      return "Jogador 1 venceu a partida";
    }

    if (vitoriasJogador2 > vitoriasJogador1) {
      return "Jogador 2 venceu a partida";
    }

    return "Empate geral";
  }

  return (
    <main className="jogo">
      <h1>Jogo de Dados</h1>

      <h2>Rodada {rodada} / 5</h2>

      <div className="jogadores">
        <section className="jogador">
          <h2>Jogador 1</h2>

          <div className="dados">
            <Dado valor={dadosJogador1[0]} />
            <Dado valor={dadosJogador1[1]} />
          </div>

          <p>
            Soma: {dadosJogador1[0] + dadosJogador1[1]}
          </p>

          <button
            onClick={() => jogar(1)}
            disabled={jogadorAtual !== 1 || fimDeJogo}
          >
            Jogar
          </button>
        </section>

        <section className="jogador">
          <h2>Jogador 2</h2>

          <div className="dados">
            <Dado valor={dadosJogador2[0]} />
            <Dado valor={dadosJogador2[1]} />
          </div>

          <p>
            Soma: {dadosJogador2[0] + dadosJogador2[1]}
          </p>

          <button
            onClick={() => jogar(2)}
            disabled={jogadorAtual !== 2 || fimDeJogo}
          >
            Jogar
          </button>
        </section>
      </div>

      <div className="mensagem">
        <h2>{resultado || "Aguardando jogadas..."}</h2>
      </div>

      {fimDeJogo && (
        <div className="resultado-final">
          <h2>{resultadoFinal()}</h2>

          <button onClick={jogarNovamente}>
            Jogar Novamente
          </button>
        </div>
      )}
    </main>
  );
}