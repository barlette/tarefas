import Tarefa from '../model/Tarefa';
import tarefasIniciais from '../data/mock';

export default function Home() {
  let tarefas = tarefasIniciais;

  function renderizarTarefas() {
    return tarefas.itens.map((tarefa) => {
      return (
        <div key={tarefa.id}>
          <span>{tarefa.id} | </span>
          <span>{tarefa.descricao} | </span>
          <span>{tarefa.concluida ? 'Concluída' : 'Ativa'}</span>
        </div>
      );
    });
  }

  return (
    <div
      className={`
      flex
      flex-col
      justify-center
      items-center
      text-white
      bg-purple-600
      h-screen
      bg-gradient-to-tr
      from-purple-500
      to-yellow-600
    `}
    >
      {renderizarTarefas()}
    </div>
  );
}
