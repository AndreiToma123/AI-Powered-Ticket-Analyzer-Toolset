interface Employee {
    id: string;
    name: string;
    status: string;
}

const AgentList = ({ employees } : { employees: Employee[] }) => {
    const onlineAgent = employees.filter(t => t.status === 'Online');
    const onBreakAgent = employees.filter(t => t.status === 'On Break');
    const awayAgent = employees.filter(t => t.status === 'Away');

    return (
        <div className="bg-white p-6 rounded-lg h-fit min-h-[500px] border border-white/30">
            <div className="mb-8 flex justify-content items-center">
                <h3 className="text-xl font-semibold text-[#2d3436]">Agents</h3>
            </div>
            <div className="mb-8">
                <h4 className="text-base font-medium text-gray-500 mb-4">Online:</h4>
                <ul className="flex flex-col gap-2">
                    {onlineAgent.map(agent => (
                        <li key={agent.id} className="text-sm text-[#2d3436]">
                            {agent.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-8">
                <h4 className="text-base font-medium text-gray-500 mb-4">On Break:</h4>
                <ul className="flex flex-col gap-2">
                    {onBreakAgent.map(agent => (
                        <li key={agent.id} className="text-sm text-[#2d3436]">
                            {agent.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-8">
                <h4 className="text-base font-medium text-gray-500 mb-4">Away:</h4>
                <ul className="flex flex-col gap-2">
                    {awayAgent.map(agent => (
                        <li key={agent.id} className="text-sm text-[#2d3436]">
                            {agent.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AgentList;