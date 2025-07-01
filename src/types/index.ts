export interface SidebarProps {
  name: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
  clickEvent: () => void;
}
export interface ExtractedItemProps {
  icon: React.ReactNode;
  text: string;
}
