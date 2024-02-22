import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {
  CalendarSearch,
  Home,
  CreditCard,
  CircleUser,
  Settings,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export const navbarItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Events", href: "/dashboard/events", icon: CalendarSearch },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Account", href: "/dashboard/account", icon: CircleUser },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function UserNav({
  name,
  email,
  image,
}: {
  name: string;
  email: string;
  image: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-12 w-12 border-gray-500 rounded-full"
        >
          <Avatar>
            <AvatarImage src={image} alt="image" />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs laeding-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navbarItems.map((item, index) => (
            <DropdownMenuItem asChild key={index}>
              <Link
                href={item.href}
                className="w-full flex justify-between items-center cursor-pointer"
              >
                {item.name}
                <span>
                  <item.icon className="w-4 h-4 " />
                </span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="w-full flex justify-between items-center cursor-pointer"
          asChild
        >
          <LogoutLink>
            Logout
            <span>
              <LogOut className="w-4 h-4" />
            </span>
          </LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
