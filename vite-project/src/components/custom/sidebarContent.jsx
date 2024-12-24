import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarRail,
    SidebarGroupLabel
  } from "@/components/ui/sidebar"
import { FaMedium } from "react-icons/fa";
import { NotebookTabs, SquareUser } from 'lucide-react';
  
export function SidebarCustomContent() {
    const scrollToAboutMe = () => {
      const section = document.getElementById('about-me');
      section.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
      const section = document.getElementById('contact');
      section.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToVirtuTrade = () => {
      const section = document.getElementById('virtutrade');
      section.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToTastefully = () => {
      const section = document.getElementById('tastefully');
      section.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToMDG = () => {
      const section = document.getElementById('mdg');
      section.scrollIntoView({ behavior: 'smooth' });
    }

    return (
      <Sidebar collapsible='icon'>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem className='lg'>
              <SidebarMenuButton><FaMedium style={{height:'1.7em'}} />
              <span style={{marginLeft:'2px', fontSize:'1rem', fontWeight:'700'}}>miguellouis/portfolio</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={scrollToAboutMe}><SquareUser /><span style={{marginLeft:'2px',fontWeight:'450'}}>About Me</span></SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={scrollToContact}><NotebookTabs /><span style={{marginLeft:'2px',fontWeight:'450'}}>Contact</span></SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarMenu>
              <SidebarGroupLabel>Projects</SidebarGroupLabel>
              <SidebarMenuItem>
                  <SidebarMenuButton onClick={scrollToVirtuTrade}> •<span style={{marginLeft:'2px',fontWeight:'450'}}>VirtuTrade</span></SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <SidebarMenuButton onClick={scrollToTastefully}> •<span style={{marginLeft:'2px',fontWeight:'450'}}>Tastefully 2.0</span></SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                  <SidebarMenuButton onClick={scrollToMDG}> •<span style={{marginLeft:'2px',fontWeight:'450'}}>Maison De Guzman</span></SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
        <SidebarRail />
      </Sidebar>
    )
}
  