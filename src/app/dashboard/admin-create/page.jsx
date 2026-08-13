'use client';

import { useState } from 'react';
import DashboardLayout from '@/app/component/DashboardLayout';
import { FormField } from '@/app/component/dashboard-ui/FormField';
import { useToast } from '@/app/component/dashboard-ui/Toast';

export default function CreateAdminPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'Contributor', // Default to 'Contributor'
    });

    const [loading, setLoading] = useState(false);
    const { addToast } = useToast();

    // Handle form input changes
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate password match
        if (form.password !== form.confirmPassword) {
            addToast('Passwords do not match!', 'error');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`/api/dashboard/add-user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    password: form.password,
                    role: form.role, // Role selected by the user
                    image: '', // Optional image field; can be updated with file upload logic
                }),
            });

            const result = await response.json();

            if (response.status === 201) {
                addToast('Admin created successfully!', 'success');
                setForm({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    role: 'Contributor',
                });
            } else {
                addToast(result.message || 'Something went wrong.', 'error');
            }
        } catch (error) {
            console.error('API error:', error);
            addToast('Server error. Please try again later.', 'error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <div className="w-full max-w-2xl mx-auto">
                <div className="card-elevated p-0 overflow-hidden">
                    <div className="border-b border-navy-100 py-5 px-6 bg-navy-50/50">
                        <h3 className="text-xl font-bold text-navy-900 font-display">Create Admin</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        <FormField
                            label="Full Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                        />

                        <FormField
                            type="email"
                            label="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />

                        <FormField
                            type="password"
                            label="Password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />

                        <FormField
                            type="password"
                            label="Confirm Password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            required
                        />

                        {/* Role Selection */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-navy-800">Role</label>
                            <select
                                name="role"
                                value={form.role}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 bg-white border border-navy-200 rounded-lg text-navy-900 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent hover:border-navy-300"
                            >
                                <option value="Administrator">Administrator</option>
                                <option value="Subscriber">Subscriber</option>
                                <option value="SEO Editor">SEO Editor</option>
                                <option value="SEO Manager">SEO Manager</option>
                                <option value="Contributor">Contributor</option>
                                <option value="Author">Author</option>
                                <option value="Editor">Editor</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary min-w-[140px]"
                            >
                                {loading ? 'Creating...' : 'Create Admin'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
