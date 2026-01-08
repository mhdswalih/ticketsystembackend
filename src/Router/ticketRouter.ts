import { Router } from 'express'
import { addTicket, getBooking } from '../Controller/ticketController'

const ticketRouter = Router()

ticketRouter.post('/confirm-booking', addTicket);
ticketRouter.get('/get-bookings',getBooking)


export default ticketRouter