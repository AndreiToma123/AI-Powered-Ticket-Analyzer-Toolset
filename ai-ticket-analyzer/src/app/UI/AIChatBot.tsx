'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I am your AI assistant. How can I help you?", sender: 'bot'}
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if(!input.trim()) return;
        setMessages([...messages, { id: Date.now(), text: input, sender: 'user'}]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { id: Date.now() + 1 , text: "I am demo bot.", sender:'bot'}]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-full bg-white border-l border-gray-200">
            <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-gray-50">
                <span>AI Assistant</span>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {messages.map(msg => (
                    <div key={msg.id} className={`max-w-[85%] px-4 py-2 rounded-md text-sm ${
                        msg.sender ==='bot' ? 'bg-gray-100 self-start' : 'bg-blue-600 text-white self-end'
                    }`}>
                        {msg.text}
                        </div>
                ))}
            </div>
            <div className="p-4 border-t border-gray-200 flex gap-2">
                <input
                className="flex-1 p-2 border border-gray-200 rounded-md text-sm"
                placeholder="Ask a question"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()} 
                />
                <button onClick={handleSend} className="text-blue-600"><Send size={20}/></button>
            </div>
        </div>
    );
};

export default ChatBot;