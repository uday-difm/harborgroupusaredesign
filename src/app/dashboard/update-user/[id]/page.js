'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import DashboardLayout from '@/app/component/DashboardLayout';
import { FormField } from '@/app/component/dashboard-ui/FormField';
import { useToast } from '@/app/component/dashboard-ui/Toast';

export default function UpdateAdminPage() {
    const params = useParams();
    const id = params.id;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        bio: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        instagram: ''
    });

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const { addToast } = useToast();

    useEffect(() => {
        async function fetchAdmin() {
            if (!id) return;

            try {
                const res = await fetch(`/api/dashboard/getuser/${id}`);
                const data = await res.json();
                console.log("GET API Response:", data);

                if (res.ok) {
                    const user = data.user;
                    setFormData({
                        name: user.name || '',
                        email: user.email || '',
                        role: user.role || '',
                        bio: user.bio || '',
                        facebook: user['facebook'] || '',
                        twitter: user['twitter'] || '',
                        linkedin: user['linkedin'] || '',
                        instagram: user['instagram'] || ''
                    });
                } else {
                    addToast(data.message || 'Failed to fetch admin data', 'error');
                }
            } catch (err) {
                console.error(err);
                addToast('Error fetching admin data', 'error');
            } finally {
                setFetching(false);
            }
        }

        fetchAdmin();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage('');

        try {
            const res = await fetch(`/api/dashboard/update-user/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("PUT API Response:", data);
            
            if (res.ok) {
                addToast(data.message || 'Admin updated successfully!', 'success');
            } else {
                addToast(data.message || 'Failed to update admin', 'error');
            }
        } catch (err) {
            console.error(err);
            addToast('Something went wrong!', 'error');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <DashboardLayout>
                <p className="text-center mt-20">Loading admin data...</p>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="w-full max-w-4xl mx-auto">
                <div className="card-elevated p-0 overflow-hidden">
                    <div className="border-b border-navy-100 py-5 px-6 bg-navy-50/50">
                        <h3 className="text-xl font-bold text-navy-900 font-display">Update Admin</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Row 1: Name & Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                label="Full Name"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <FormField
                                type="email"
                                label="Email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Row 2: Role & Bio */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-navy-800">Role</label>
                                <select
                                    name="role"
                                    value={formData.role}
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

                            <FormField
                                as="textarea"
                                label="Bio"
                                name="bio"
                                placeholder="Bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows={1}
                            />
                        </div>

                        {/* Row 3: Facebook & Twitter */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                label="Facebook URL"
                                name="facebook"
                                placeholder="Facebook URL"
                                value={formData.facebook}
                                onChange={handleChange}
                            />
                            <FormField
                                label="Twitter URL"
                                name="twitter"
                                placeholder="Twitter URL"
                                value={formData.twitter}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Row 4: LinkedIn & Instagram */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                label="LinkedIn URL"
                                name="linkedin"
                                placeholder="LinkedIn URL"
                                value={formData.linkedin}
                                onChange={handleChange}
                            />
                            <FormField
                                label="Instagram URL"
                                name="instagram"
                                placeholder="Instagram URL"
                                value={formData.instagram}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn-primary min-w-[140px]"
                            >
                                {loading ? 'Updating...' : 'Update Admin'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}
