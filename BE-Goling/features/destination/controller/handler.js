const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function getAllDestination(req, res) {
    try {
        const destinations = await prisma.destination.findMany();
        const destinationsWithImages = await Promise.all(destinations.map(async (destination) => {
            const imageUrls = await prisma.imageDestination.findMany({
                where: {
                    destination_id: destination.id
                }
            });
            return { ...destination, imageUrls };
        }));
        res.status(200).json(destinationsWithImages);
    } catch (error) {
        console.error('Error getting destinations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getDestionationById(req, res){
    try{
        const {id} = req.params;
        const destination = await prisma.destination.findUnique({
            where: {id}
        });
        const imageUrls = await prisma.imageDestination.findMany({
            where: {
                destination_id: destination.id
            }
        });
        res.status(200).json({ ...destination, imageUrls });
    } catch (error) {
        console.error('Error getting destination by id:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = { getAllDestination, getDestionationById };
