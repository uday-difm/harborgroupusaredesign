import { ToastProvider } from '@/app/component/dashboard-ui/Toast';

export default function DashboardRootLayout({ children }) {
  return <ToastProvider>{children}</ToastProvider>;
}
