'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import Head from 'next/head';
import DashboardLayout from '@/app/component/DashboardLayout';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/navigation';
import { DataTable } from '@/app/component/dashboard-ui/DataTable';
import { ConfirmDialog } from '@/app/component/dashboard-ui/ConfirmDialog';
import { useToast } from '@/app/component/dashboard-ui/Toast';

export default function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const adminsPerPage = 15;

  const router = useRouter();
  const { addToast } = useToast();
  const [adminToDelete, setAdminToDelete] = useState(null);

  const fetchAdmins = async () => {
    try {
      const res = await fetch(`/api/dashboard/admin/view-user`);
      const data = await res.json();
      setAdmins(data.data || []);
    } catch (err) {
      console.error('Failed to fetch admins:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const confirmDelete = async () => {
    if (!adminToDelete) return;
    try {
      const res = await fetch(`/api/dashboard/delete-user/${adminToDelete}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to delete admin');
      
      setAdmins((prev) => prev.filter((admin) => admin.id !== adminToDelete));
      addToast('Admin deleted successfully.', 'success');
    } catch (err) {
      addToast('Error deleting admin: ' + err.message, 'error');
    } finally {
      setAdminToDelete(null);
    }
  };

  const paginatedAdmins = admins.slice(
    currentPage * adminsPerPage,
    (currentPage + 1) * adminsPerPage
  );

  const columns = [
    { label: "S.No", key: "sno", render: (row, index) => <span className="font-medium text-navy-700">{currentPage * adminsPerPage + index + 1}</span> },
    { label: "Name", key: "name", render: (row) => <span className="text-navy-900 font-medium">{row.name}</span> },
    { label: "Email", key: "email", render: (row) => row.email },
    { label: "Role", key: "role", render: (row) => (
      <span className="capitalize">{row.role === 2 || row.role === '2' ? 'Super Admin' : 'Admin'}</span>
    )},
    { label: "Date Created", key: "date", render: (row) => (
      <span className="bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium border border-success/20">
        {row.formatted_created_date || '—'}
      </span>
    )},
    { label: "Actions", key: "actions", render: (row) => (
      <div className="flex space-x-3 justify-center">
        {/*
        <Link href={`/admin/${row.slug || row.id}`}>
          <Eye className="w-4 h-4 text-navy-500 hover:text-accent cursor-pointer transition" />
        </Link>
        */}
        <button onClick={() => router.push(`/dashboard/update-admin/${row.id}`)}>
          <Pencil className="w-4 h-4 text-navy-500 hover:text-accent cursor-pointer transition" />
        </button>
        <button onClick={() => setAdminToDelete(row.id)}>
          <Trash2 className="w-4 h-4 text-navy-500 hover:text-error cursor-pointer transition" />
        </button>
      </div>
    )}
  ];

  return (
    <DashboardLayout>
      <Head>
        <title>Admin Table</title>
        <meta name="description" content="Paginated admin list" />
      </Head>

      <div className="w-full">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <h2 className="text-2xl font-bold text-navy-900 font-display">
              Total Admins: {admins.length}
            </h2>
          </div>

          <DataTable 
            columns={columns}
            data={paginatedAdmins}
            isLoading={loading}
            keyField="id"
            emptyMessage="No admins available"
          />

          {/* Pagination */}
          {!loading && Math.ceil(admins.length / adminsPerPage) > 1 && (
            <div className="pt-4 flex justify-center">
              <ReactPaginate
                pageCount={Math.ceil(admins.length / adminsPerPage)}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                containerClassName="inline-flex space-x-2"
                pageClassName="border border-navy-200 rounded transition hover:bg-navy-50"
                pageLinkClassName="block px-3 py-2 text-sm text-navy-700 cursor-pointer"
                activeLinkClassName="bg-navy-900 text-white border-navy-900"
                previousLabel="Prev"
                nextLabel="Next"
                breakLabel="..."
                previousClassName="border border-navy-200 rounded transition hover:bg-navy-50 text-sm text-navy-700 cursor-pointer flex items-center px-3"
                nextClassName="border border-navy-200 rounded transition hover:bg-navy-50 text-sm text-navy-700 cursor-pointer flex items-center px-3"
                disabledClassName="opacity-50 cursor-not-allowed hover:bg-transparent"
              />
            </div>
          )}
        </div>
      </div>
      
      <ConfirmDialog 
        isOpen={!!adminToDelete}
        title="Delete Admin"
        message="Are you sure you want to delete this admin? This action cannot be undone."
        onConfirm={confirmDelete}
        onCancel={() => setAdminToDelete(null)}
        confirmText="Delete"
      />
    </DashboardLayout>
  );
}
