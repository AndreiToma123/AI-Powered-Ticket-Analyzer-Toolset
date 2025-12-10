import { db as firestore } from '../firebase';
import { collection, getDocs, addDoc, setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
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
    aiSummary: string;
    aiDraft: string;
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

const DB_PATH = path.join(process.cwd(), 'src/lib/db/db.json');
const isFirebaseConfigured = !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

export const readDb = async (): Promise<Database> => {
    if (!isFirebaseConfigured) {
        console.warn('Firebase not configured. Falling back to local db.json.');
        try {
            const data = await fs.readFile(DB_PATH, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading local database:', error);
            return { tickets: [], employees: [] };
        }
    }

    try {
        const ticketsSnapshot = await getDocs(collection(firestore, 'tickets'));
        const tickets = ticketsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Ticket));
        const employeesSnapshot = await getDocs(collection(firestore, 'employees'));
        const employees = employeesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Employee));
        return { tickets, employees };
    } catch (error) {

        console.error('Error reading database from Firebase:', error);
        try {
            const data = await fs.readFile(DB_PATH, 'utf-8');
            return JSON.parse(data);
        } catch (e) {
            return { tickets: [], employees: [] };
        }
    }
};

