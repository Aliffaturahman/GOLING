const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const validateOrders = async (req, res) => {
  const { order_ids } = req.body; 

  try {
    const tickets = await prisma.ticket.findMany({
      where: {
        transaction_id: {
          in: order_ids,
        },
      },
      include: {
        transaction: { 
          include: {
            destination: { 
              select: {
                name: true,
                description: true,
                hero_image: true,
                image_url: true,
              },
            },
          },
        },
      },
    });

    const validatedTickets = tickets.map(ticket => ({
      ticket_id: ticket.ticket_id,
      transaction: {
        id: ticket.transaction.id,
        name: ticket.transaction.name,
        phone: ticket.transaction.phone,
        email: ticket.transaction.email,
        ticket_qty: ticket.transaction.ticket_qty,
        total_price: ticket.transaction.total_price,
        date_booking: ticket.transaction.date_booking,
        snap_url: ticket.transaction.snap_url,
        destination: {
          name: ticket.transaction.destination.name,
        },
      },
    }));

    res.json(validatedTickets);
  } catch (error) {
    console.error("Error validating tickets:", error);
    res.status(500).json({ error: "Error validating tickets" });
  }
};

module.exports = {
  validateOrders,
};
