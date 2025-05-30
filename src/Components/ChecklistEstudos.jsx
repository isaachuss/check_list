import React, { useState } from "react";
import FormularioTarefa from "./FormularioTarefa";
import ListaTarefas from "./ListaTarefas";
import "./ChecklistEstudos.css";

export default function ChecklistEstudos() {
  const [tarefas, setTarefas] = useState([]);

  function adicionar(tarefa) {
    setTarefas([...tarefas, tarefa]);
  }

  function toggleConcluida(id) {
    setTarefas(tarefas.map(t => t.id === id ? {...t, concluida: !t.concluida} : t));
  }

  function remover(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  return (
    <div className="centralizar-tudo">
      <h1>Checklist de Estudos</h1>
      <FormularioTarefa adicionar={adicionar} />
      <ListaTarefas tarefas={tarefas} toggleConcluida={toggleConcluida} remover={remover} />
    </div>
  );
}
