"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketController_1 = require("../Controller/ticketController");
const ticketRouter = (0, express_1.Router)();
ticketRouter.post('/confirm-booking', ticketController_1.addTicket);
ticketRouter.get('/get-bookings', ticketController_1.getBooking);
exports.default = ticketRouter;
