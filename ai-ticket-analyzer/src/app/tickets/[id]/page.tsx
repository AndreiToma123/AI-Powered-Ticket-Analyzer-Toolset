import { readDB } from '@/lib/db/db-services';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AISummary from '@/app/UI/AISummary';
import ResponseDraft from '@/app/UI/AIResponseDraft';
import ChatBot from '@/app/UI/AIChatBot';

export default async function TicketPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const db = await readDB();

    const ticket = db.tickets.find((t: any) => t.id === id);

    if (!ticket) {
        return <div>Ticket not found</div>;
    }

    return (
        <div className="grid grid-cols-[1fr_350px] gap-8 h-full overflow-hidden">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-6 overflow-y-auto pr-2">
                <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-black">
                    <ArrowLeft size={20} />
                    <span> Back to Dashboard</span>
                </Link>

                {/* HEADER SECTION */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm text-gray-500">{ticket.id}</span>
                        {/* FIX 1: Added hyphen to bg-blue-100 */}
                        <span className={`text-xs px-2 py-1 rounded font-bold ${
                            ticket.status === 'Taken' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                            {ticket.status}
                        </span>
                        {/* FIX 2: Added the ticket.urgency text inside the span so it actually shows up */}
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                            ticket.urgency === 'High' ? 'bg-red-100 text-red-800' : 
                            ticket.urgency === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'
                        }`}>
                            {ticket.urgency}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold text-[#2d3436]">{ticket.subject}</h1>
                </div>

                {/* METADATA SECTION */}
                <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <span>{new Date(ticket.requestDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{ticket.email}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{ticket.category}</span>
                    </div>
                </div>

                <AISummary summary={ticket.aiSummary || "No summary available."} />

                {/* EMAIL CONTENT CARD */}
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                        <div className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-xl">
                            {ticket.name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-lg">{ticket.name}</div>
                            {/* FIX 3: Fixed typo text-gray=500 to text-gray-500 */}
                            <div className="text-gray-500">{ticket.email}</div>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {ticket.content}
                    </p>
                </div>

                <ResponseDraft initialDraft={ticket.aiDraft || ""} />
            </div>

            {/* RIGHT COLUMN (CHATBOT) */}
            <div className="flex flex-col h-full overflow-hidden rounded-lg border border-gray-200">
                <ChatBot />
            </div>
        </div>
    );
};