import { Reserva } from "./model/reserva";
import { Hotel } from "./model/hotel";

let reserva1: Reserva = new Reserva(100, "Vitor", new Date(), new Date(2025, 0, 20))
let reserva2: Reserva = new Reserva(101, "Gustavo", new Date(), new Date(2025, 0, 15))
let reserva3: Reserva = new Reserva(102, "Gabriel", new Date(), new Date(2025, 11, 13))
let hotel: Hotel = new Hotel([])

hotel.registrarReserva(reserva1)
hotel.registrarReserva(reserva2)
hotel.registrarReserva(reserva3)

hotel.cancelarReserva(10)
hotel.cancelarReserva(101)

hotel.consultarStatusQuarto(100)
hotel.consultarStatusQuarto(101)