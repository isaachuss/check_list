import React, { useState } from "react";

const DIAS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
const MATERIAS = ["Matemática", "História", "Física", "Química", "Biologia", "Português"];

export default function FormularioTarefa({ adicionar }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [dias, setDias] = useState([]);
  const [materia, setMateria] = useState(MATERIAS[0]);

  function toggleDia(dia) {
    setDias(dias.includes(dia) ? dias.filter(d => d !== dia) : [...dias, dia]);
  }

  function enviar(e) {
    e.preventDefault();
    if (!titulo.trim() || dias.length === 0) return;
    adicionar({ id: Date.now(), titulo, descricao, dias, materia, concluida: false });
    setTitulo(""); setDescricao(""); setDias([]); setMateria(MATERIAS[0]);
  }

  return (
    <form onSubmit={enviar}>
      <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <div>
        {DIAS.map(d => (
          <label key={d}>
            <input type="checkbox" checked={dias.includes(d)} onChange={() => toggleDia(d)} />
            {d}
          </label>
        ))}
      </div>
      <select value={materia} onChange={e => setMateria(e.target.value)}>
        {MATERIAS.map(m => <option key={m} value={m}>{m}</option>)}
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}
