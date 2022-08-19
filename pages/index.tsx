import Tarefa from '../model/Tarefa';
import tarefasIniciais from '../data/mock';
import Selecao from '../components/lista/Selecao';
import ListaItem from '../components/lista/ListaItem';
import Lista from '../components/lista/Lista';
import { useState } from 'react';
import Cabecalho from '../template/Cabecalho';
import Conteudo from '../template/Conteudo';
export default function Home() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  return (
    <div
      className={`
      flex flex-col h-screen bg-gray-300
    `}
    >
      <Cabecalho></Cabecalho>
      <Conteudo>
        <Lista
          tarefas={tarefas}
          mudou={(novasTarefas) => {
            setTarefas(novasTarefas);
          }}
        />
      </Conteudo>
    </div>
  );
}
