import { Request, Response} from 'express'
import ticketModel from '../Model/ticketModel';



export const addTicket = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, payment, seatId } = req.body;
    console.log('Received booking request:', req.body);
     
    // validation
    if (!name || !email || !phone || !payment) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // if (typeof seat !== 'object' || seat.id === undefined || seat.id === null) {
    //   return res.status(400).json({ message: 'Seat information is required and must have an id' });
    // }
     
    // seat is an object → mark booked as true
    const newUser = await ticketModel.create({
      name,
      email,
      phone,
      payment,
      seatBooked: true,
      seatId: seatId
    });

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