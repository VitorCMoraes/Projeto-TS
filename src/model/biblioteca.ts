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
        const index = this.acervo.findIndex(item => item.codigo == codigo)
        if(index != -1){
            if(this.acervo[index].disponivel){
                this.acervo[index].disponivel = false
                console.log("Emprestimo registrado")
                return
            }
            console.log("Livro indisponivel")
            return
        }
        console.log("Livro nao encontrado")
    }

    consultarDisponibilidade(codigo: number): boolean {
        const index = this.acervo.findIndex(item => item.codigo == codigo)
        if(index != -1){
            return this.acervo[index].disponivel
        }
        console.log("Nao encontrado")
        return false
    }
}