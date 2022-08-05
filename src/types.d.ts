interface NavItem {
  name: string;
  link: string;
}

interface ItemCard {
  image: string;
  name: string;
  price: number;
  company: string;
  availableAt: string;
  contact: number;
}

type sidebarOptions = string[];

interface sidebarSection {
  heading: string;
  options: sidebarOptions;
}
