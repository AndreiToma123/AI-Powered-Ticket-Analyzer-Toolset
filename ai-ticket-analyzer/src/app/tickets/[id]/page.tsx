import { readDB } from '@/app/lib/db/db-services';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function TicketPage ({ params }: { params: Promise<{id: string}> }) {
    const { id } = await params;
    const db = await readDB();

    const ticket = db.tickets.find((t: any) => t.id ===id);

    if(!ticket){
        return <div>Ticket not found</div>;
    }

    return (
        <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-black">
                <ArrowLeft size={20} />
                <span> Back to Dashboard</span>
            </Link>
        
        <div className="flex justify-between items-start">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm text-gray-500">{ticket.id}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold">
                        {ticket.status}
                    </span>
            </div>
            <h1 className="text-3xl font-bold text-[#2d3436]">{ticket.subject}</h1>
        </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl">
                    {ticket.name.charAt(0)}
                </div>
                <div>
                    <div className="font-bold text-lg">{ticket.name}</div>
                    <div className="text-gray=500">{ticket.email}</div>
                </div>
            </div>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {ticket.content}
            </p>
        </div>
        </div>
    );
};