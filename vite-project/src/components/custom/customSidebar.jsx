import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SidebarCustomContent } from "@/components/custom/sidebarContent"

function CustomSidebar({ children }) {
    return (
      <>
        <SidebarCustomContent />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </>
    );
  }

export default CustomSidebar
