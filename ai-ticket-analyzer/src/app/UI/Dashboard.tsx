const Dashboard = ({tickets}: {tickets:any[]}) =>{
    const pendingTickets = tickets.length;
    const inProgressTickets = tickets.filter(t => t.status === 'Taken').length;

    return (
        <><div className="flex gap-8">
            <div className="flex-1 bg-[#2d3436] text-white px-8 py-6 rounded-lg flex justify-between items-center">
                <h3 className="text-base font-medium mb-1 opacity-90">Pending Tickets</h3>
                <div className="text-3xl font-bold">{pendingTickets}</div>
            </div>
        </div><div className="flex-1 bg-white text-[#2d3436] border border-[#dfe6e9] px-8 py-6 rounded-lg flex justify-between items-center">
                <div>
                    <h3 className="text-base font-medium mb-1 opacity-90">In Progress Tickets</h3>
                    <div className="text-3xl font-bold">{inProgressTickets}</div>

                </div>
            </div></>
       

    );
};

export default Dashboard;