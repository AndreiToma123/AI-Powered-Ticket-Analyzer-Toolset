import { Bell } from "lucide-react";

const Header = () => {
    return (
        <header className="h-20 bg-white flex items-center justify-between px-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-6">
                <Bell size={20} className="text-gray-600" />
                <div className="text-right">
                    <span className="block font-semibold">Andrei Toma</span>
                    <span className="block text-sm text-gray-600">Customer Support</span>
                </div>
            </div>
        </header>
    );
};

export { Header };