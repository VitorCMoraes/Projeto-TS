import { Reserva } from "./reserva";

export class Hotel {
    private reservas: Reserva[]

    constructor(reservas: Reserva[]){
        this.reservas = reservas
    }

    registrarReserva(reserva: Reserva): void{
        this.reservas.push(reserva)
    }

    cancelarReserva(numeroQuarto: number): void{
        const index = this.reservas.findIndex(item => item.numeroQuarto == numeroQuarto)
        if(index != -1){
            this.reservas.splice(index, 1)
            console.log("Reserva cancelada")
            return
        }
        console.log("Reserva nao encontrada")
        return
    }

    consultarStatusQuarto(numeroQuarto: number): string{
        const index = this.reservas.findIndex(item => item.numeroQuarto == numeroQuarto)
        return index != -1 ? "Quarto indisponivel" : "Quarto disponivel"
    }
}