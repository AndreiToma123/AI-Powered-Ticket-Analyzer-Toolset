'use client'

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/router';
import { Lock, Mail } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push('/');
        } catch (err:any) {
            console.error(err);
            setError('Wrong email or password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] w-full max-w-md">
                <div className="text-center-mb-8">
                    <h1 className="text-2xl fonr-bold text-[#2s3436] mb-2">Welcome</h1>
                    <p className="text-[#636e72]">Sign in to access the dashboard</p>         
                    </div>
                    {
                        error && (
                            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 text-center">
                                {error}
                            </div>
                        )
                    }

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[#2d3436] mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b2bec3]" size = {20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dfe6e9] focus:outline-none focus:ring-[#6c5ce7]/20 focus:border-[#6c5ce7]"
                                    placeholder="name@company.fi"
                                    required
                                    />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#2d3436] mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b2bec3]" size = {20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dfe6e9] focus:outline-none focus:ring-[#6c5ce7]/20 focus:border-[#6c5ce7]"
                                    placeholder="******"
                                    required
                                    />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#dfe6e9] focus:outline-none focus:ring-[#6c5ce7]/20 focus:border-[#6c5ce7]"
                        >
                            {loading ? 'Sign in...' : 'Sign In'}
                        </button>
                    </form>
                    
                    </div> 
        </div>
    );

}