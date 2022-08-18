import Tarefa from '../model/Tarefa';
import tarefasIniciais from '../data/mock';
import Selecao from '../components/lista/Selecao';
import ListaItem from '../components/lista/ListaItem';
import Lista from '../components/lista/Lista';
import { useState } from 'react';
export default function Home() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  return (
    <div
      className={`
      flex flex-col justify-center items-center h-screen
      bg-gray-300
    `}
    >
      <Lista
        tarefas={tarefas}
        mudou={(novasTarefas) => {
          setTarefas(novasTarefas);
        }}
      />
    </div>
  );
}
