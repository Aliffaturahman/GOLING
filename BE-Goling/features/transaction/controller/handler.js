const { PrismaClient } = require("@prisma/client");
const { CreateTransaction } = require("../../../config/midtrans");
const { randomID, randomTicket } = require("../../../helper/utils");
const prisma = new PrismaClient();

async function createTransaction(req, res) {
  const { name, phone, email, ticket_qty, date_booking, destination_id } =
    req.body;
  const price = ticket_qty * 35000;
  const transactionId = randomID();
  const ticketId = randomTicket();

  const snap_url = await CreateTransaction(transactionId, price);
  const isoDate = new Date(date_booking).toISOString();

  try {
    const transaction = await prisma.transaction.create({
      data: {
        id: transactionId,
        name: name,
        phone: phone,
        email: email,
        ticket_qty: ticket_qty,
        total_price: price,
        date_booking: isoDate,
        destination_id: destination_id,
        snap_url: snap_url,
      },
    });

    res.status(201).json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function webhook(req, res) {
  const { transaction_status, order_id, fraud_status } = req.body;

  let orderId = order_id;
  let transactionStatus = transaction_status;
  let fraudStatus = fraud_status;
  const ticketId = randomTicket();

  const date_booking = await prisma.transaction.findUnique({
    where: {
      id: orderId,
    },
  });

  var expiredAt = new Date(
    new Date(date_booking.date_booking).getTime() + 3 * 24 * 60 * 60 * 1000
  );

  if (transactionStatus == "capture") {
    if (fraudStatus == "accept") {
      // TODO set transaction status on your database to 'success'
      // and response with 200 OK
      const createTicket = await prisma.ticket.create({
        data: {
          transaction_id: orderId,
          ticket_id: ticketId,
          expired_at: expiredAt,
        },
      });
      console.log(createTicket);
    }
  } else if (transactionStatus == "settlement") {
    // TODO set transaction status on your database to 'success'
    // and response with 200 OK
    const createTicket = await prisma.ticket.create({
      data: {
        transaction_id: orderId,
        ticket_id: ticketId,
        expired_at: expiredAt,
      },
    });
    console.log(createTicket);
  } else if (
    transactionStatus == "cancel" ||
    transactionStatus == "deny" ||
    transactionStatus == "expire"
  ) {
    // TODO set transaction status on your database to 'failure'
    // and response with 200 OK
  } else if (transactionStatus == "pending") {
    // TODO set transaction status on your database to 'pending' / waiting payment
    // and response with 200 OK
  }
}
module.exports = { createTransaction, webhook };
