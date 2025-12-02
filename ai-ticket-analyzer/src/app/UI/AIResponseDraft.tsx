'use client'
import { useState } from 'react';
import { Send, Save } from 'lucide-react';

const ResponseDraft = ({ initialDraft } : { initialDraft: string }) => {
    const [draft, setDraft] = useState(initialDraft);

    return (
        <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between items-centered">
                <h3 className="text-xl font-emsi-bold text-gray-800">Reply</h3>
                <div className="bg-blue-700 text-white px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <span>AI Generated Draft</span>
                </div>
            </div>

            <textarea
            className="w-full min-h-[200px] p-4 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-blue-500"
            value={draft}
            onChange ={(e) => setDraft(e.target.value)}
            />

            <div className="flex justify-end gap-4">
                <button className="px-4 py-2 rounded-md font-semi-bold bg-blue-700 text-white hover:bg-blue-800 fex items-center gap-2">Send Reply</button>
            </div>
        </div>
    );
};

export default ResponseDraft;