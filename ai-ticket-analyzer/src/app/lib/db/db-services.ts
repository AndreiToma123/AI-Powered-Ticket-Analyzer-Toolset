import fs from 'fs/promises';
import path from 'path';

export interface Ticket {
    id: string;
    name: string;
    requestDate: string;
    email: string;
    category: string;
    urgency: string;
    status: string;
    subject: string;
    content: string;
}

export interface Employee {
    id: string;
    name: string;
    status: string;
}

interface Database {
    tickets: Ticket[];
    employees: Employee[];
}



export const readDB = async(): Promise<Database> => {
    const filePath = path.join(process.cwd(), 'src/app/lib/db/db.json');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent);
};