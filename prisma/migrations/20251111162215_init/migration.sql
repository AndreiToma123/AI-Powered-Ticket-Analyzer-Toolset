-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "requestDate" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "urgency" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
