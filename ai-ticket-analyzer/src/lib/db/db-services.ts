import { db } from '../firebase';
import { collection, getDocs, setDoc, doc} from 'firebase/firestore';

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
    aiSummary?:string;
    aiDraft?:string;
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

export const readDB = async (): Promise<Database> => {
    try {
        const ticketsSnapshot = await getDocs(collection(db, 'tickets'));
        const tickets = ticketsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Ticket));
        const employeesSnapshot = await getDocs(collection(db,'employees'));
        const employees = employeesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Employee));
        return { tickets, employees };
    } catch (error) {
        console.error('Error reading from Firebase:', error);
        return { tickets: [], employees: []};
    }
};

export const addTicket = async ( ticket: Ticket): Promise<void> => {
    try{
        await setDoc(doc(db, 'tickets', ticket.id), ticket);
    } catch (error) {
        console.error('Error adding the ticket:', error);
        throw error;
    }
};