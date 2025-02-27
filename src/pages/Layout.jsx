import { SidebarProvider } from "../components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; 
import { AiOutlineLoading3Quarters } from "react-icons/ai"; 
 

  
 

// eslint-disable-next-line react/prop-types
export default function Layout({ isLoading }) {
  return (
    <SidebarProvider >
      <div className="flex flex-col  min-h-screen">
        <NavBar />
        <div className="flex no-scroll mt-20 flex-grow">
          <AppSidebar />
        <div className="flex no-scroll flex-col">
          <main className="flex-1">
            {isLoading ? (
              <div className="bg-white text-primary text-6xl w-screen h-screen flex justify-center items-center">
                <AiOutlineLoading3Quarters className="animate-spin" />
              </div>
            ) : (
              <Outlet />
            )}
          </main>
        <Footer />
        </div>
        </div>
        
      </div>
    </SidebarProvider>
  );
}
