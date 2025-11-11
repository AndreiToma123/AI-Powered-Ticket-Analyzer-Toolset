import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const ticket = await prisma.ticket.create({
        data: {name: "John Doe", requestDate: "2023-01-01", email: "W6Wg8@example.com", category: "Category A", urgency: "Urgent", status: "Pending"
        },
    });

    console.log(ticket);
}

main()
.catch((e) => {
    console.error(e.message);
})
.finally(async () => {
    await prisma.$disconnect();
})