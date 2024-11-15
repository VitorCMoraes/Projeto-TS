import { Tarefa } from "./model/tarefa";
import { GestorTarefas } from "./model/gestorTarefas";

let tarefa1: Tarefa = new Tarefa(1, "Corrigir funcoes", "Pendente", "Feature nova")
let tarefa2: Tarefa = new Tarefa(2, "Criar novas Classes", "Concluida", "Correcao de bug no portal")
let tarefa3: Tarefa = new Tarefa(3, "Realizar testes das novas funcionalidades", "Pendente", "Feature nova")
let gestorTarefas: GestorTarefas = new GestorTarefas([])

gestorTarefas.adicionarTarefa(tarefa1)
gestorTarefas.adicionarTarefa(tarefa2)
gestorTarefas.adicionarTarefa(tarefa3)

gestorTarefas.atualizarStatus(4, "Concluida")
gestorTarefas.atualizarStatus(1, "Concluida")

const tarefasProjeto1: Tarefa[] = gestorTarefas.consultarTarefasPorProjeto("Criacao da nova pagina de atividades")
console.log(tarefasProjeto1.length != 0 ? tarefasProjeto1 : "Nenhuma tarefa encontrada")

const tarefasProjeto2: Tarefa[] = gestorTarefas.consultarTarefasPorProjeto("Feature nova")
console.log(tarefasProjeto2.length != 0 ? tarefasProjeto2 : "Nenhuma tarefa encontrada")