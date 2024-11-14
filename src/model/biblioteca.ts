import { Livro } from "./livro"

export class Biblioteca {
    private acervo: Livro[]

    constructor(acervo: Livro[]){
        this.acervo = acervo
    }

    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro)
    }

    registrarEmprestimo(codigo: number): void {
        let i: number
        for(i = 0; i < this.acervo.length && this.acervo[i].codigo != codigo; i++){}

        if(i < this.acervo.length){
            if(this.acervo[i].disponivel == true){
                this.acervo[i].disponivel = false
                console.log("Emprestimo registrado")
                return
            }
            console.log("Livro indisponivel")
            return
        }
        console.log("Nao encontrado")
    }

    consultarDisponibilidade(codigo: number): boolean {
        let i: number
        for(i = 0; i < this.acervo.length && this.acervo[i].codigo != codigo; i++){}

        if(i < this.acervo.length){
            return this.acervo[i].disponivel
        }
        console.log("Nao encontrado")

        return false
    }
}