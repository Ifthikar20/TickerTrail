import { Header } from "@/components/ui/Header";

type props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: props) => {
  return (
    <> 
      <Header/>
    
      <main className="px-3 lg:px-14  bg-slate-200">{children}</main>
    </>
  );
};

export default DashboardLayout;
