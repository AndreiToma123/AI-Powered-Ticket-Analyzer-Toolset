'use client';

import { useRouter } from 'next/navigation';

const TicketList = ({tickets}: { tickets:any[] }) => {
    const router = useRouter();

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric',
        hour: 'numeric', minute: 'numeric', hour12: false
    });
};


return (
    <div className="flex-1 bg-white p-6 rounded-lg border-white flex flex-col">
        <h2 className="text-2xl font-bold text-[#2d3436] mb-4">Tickets</h2>
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="text-[#2d3436] border-b border-[#dfe6e9]">
                    <th className="p-4">Name</th>
                    <th className="p-4">Request Date</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Urgency</th>
                </tr>
            </thead>
            <tbody>
                {tickets.map((ticket) => (
                    <tr
                    key={ticket.id}
                    onClick={() => router.push(`/tickets/${ticket.id}`)}
                    className="cursor-pointer hover:bg-grey-50 transition-colors border-b border-[#def6e9]">
                        <td className="p-4 font-medium">{ticket.name}</td>
                        <td className="p-4 font-medium">{formatDate(ticket.requestDate)}</td>
                        <td className="p-4 font-medium">{ticket.email}</td>
                        <td className="p-4 font-medium">{ticket.category}</td>
                        <td className="p-4 font-medium">{ticket.status}</td>
                        <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                            ticket.urgency ==='High' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'}
                            `}>
                            {ticket.urgency}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};
export default TicketList;