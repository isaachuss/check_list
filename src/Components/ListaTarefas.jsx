import React, { useState } from "react";

const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const MATERIAS = ["Matemática", "História", "Física", "Química", "Biologia", "Português"];

export default function ListaTarefas({ tarefas, toggleConcluida, remover }) {
  const [filtroDia, setFiltroDia] = useState("");
  const [filtroMateria, setFiltroMateria] = useState("");

  const filtradas = tarefas.filter(t =>
    (filtroDia ? t.dias.includes(filtroDia) : true) &&
    (filtroMateria ? t.materia === filtroMateria : true)
  );

  if (filtradas.length === 0) return <p>Nenhuma tarefa.</p>;

  return (
    <>
      <div>
        <select value={filtroDia} onChange={e => setFiltroDia(e.target.value)}>
          <option value="">Todos os dias</option>
          {DIAS.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <select value={filtroMateria} onChange={e => setFiltroMateria(e.target.value)}>
          <option value="">Todas as matérias</option>
          {MATERIAS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>
      <ul>
        {filtradas.map(t => (
          <li key={t.id} style={{ textDecoration: t.concluida ? "line-through" : "none" }}>
            <h3>{t.titulo}</h3>
            <p>{t.descricao}</p>
            <small>{t.dias.join(", ")} | {t.materia}</small>
            <button onClick={() => toggleConcluida(t.id)}>
              {t.concluida ? "Desmarcar" : "Concluir"}
            </button>
            <button onClick={() => remover(t.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
