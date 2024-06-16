import { Home, Bitcoin } from "lucide-react";

type ItemType = {
  name: string;
  icon: unknown;
  route: string;
};

export const items: ItemType[] = [
  {
    name: "Dashboard",
    icon: Home,
    route: "/",
  },
  {
    name: "Coins",
    icon: Bitcoin,
    route: "/coins",
  },
];
