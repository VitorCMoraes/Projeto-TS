import { Biblioteca } from "./model/biblioteca";
import { Livro } from "./model/livro";

let biblioteca: Biblioteca = new Biblioteca([])
let livro1: Livro = new Livro(1, "Harry Potter 1", "J. K. Rowling", true)
let livro2: Livro = new Livro(2, "Harry Potter 2", "J. K. Rowling", true)
let livro3: Livro = new Livro(3, "Harry Potter 3", "J. K. Rowling", true)

biblioteca.adicionarLivro(livro1)
biblioteca.adicionarLivro(livro2)
biblioteca.adicionarLivro(livro3)

biblioteca.registrarEmprestimo(4)
biblioteca.registrarEmprestimo(2)
biblioteca.registrarEmprestimo(2)

console.log(biblioteca.consultarDisponibilidade(6) ? "Livro disponivel" : "Livro indisponivel")
console.log(biblioteca.consultarDisponibilidade(3) ? "Livro disponivel" : "Livro indisponivel")
console.log(biblioteca.consultarDisponibilidade(2) ? "Livro disponivel" : "Livro indisponivel")