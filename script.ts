import { PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
const ticket = await prisma.ticket.create({
    data: {
        name: "Ticket 1",
    }
})
console.log(ticket)
}

main()
.catch(e => {
    console.error(e.message)
})
.finally(async () => {
    await prisma.$disconnect()
})