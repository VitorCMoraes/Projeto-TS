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
        let i: number
        for(i = 0; i < this.reservas.length && this.reservas[i].numeroQuarto != numeroQuarto; i++){}

        if(i < this.reservas.length){
            this.reservas[i].nomeHospede = ""
            this.reservas[i].dataEntrada = 
        }
    }

    consultarStatusQuarto(numeroQuarto: number): string{

    }
}