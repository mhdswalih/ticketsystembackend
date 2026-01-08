import { Request, Response} from 'express'
import ticketModel from '../Model/ticketModel';



export const addTicket = async (req: Request, res: Response) => {
  try {
    console.log('Received booking request:', req.body);
    const { name, email, phone, payment, seat, seatId } = req.body;
    // Accept seatId directly for flexibility
    const resolvedSeatId = seatId !== undefined ? seatId : (seat && seat.id);
    // validation
    if (!name || !email || !phone || !payment || resolvedSeatId === undefined) {
      console.log('Validation failed:', { name, email, phone, payment, seat, seatId });
      return res.status(400).json({ message: 'All fields are required and seatId must be provided' });
    }
    const newUser = await ticketModel.create({
      name,
      email,
      phone,
      payment,
      seatBooked: true,
      seatId: resolvedSeatId
    });
    console.log('Booking created:', newUser);
    return res.status(201).json({
      message: 'Ticket booked successfully',
      data: newUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};


export const getBooking = async (req: Request, res: Response) => {
  try {
    const bookings = await ticketModel.find();

    return res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch bookings'
    });
  }
};