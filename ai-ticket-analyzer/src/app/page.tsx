import { readDB } from '@/lib/db/db-services';
import Dashboard from './UI/Dashboard';
import TicketList from './UI/TicketList';
import AgentList from './UI/AgentList';


export default async function DashboardPage(){
  const db = await readDB();

  return (

    <div className="grid grid-cols-[1fr_250px] gap-8 h-full">
      <div className="flex flex-col gap-8 overflow-hidden">
        <Dashboard tickets={db.tickets} />
        <TicketList tickets={db.tickets} />
      </div>
      <div>
        <AgentList employees={db.employees} />
      </div>
    </div>

  );
};