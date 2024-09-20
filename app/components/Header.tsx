import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
// import { ModeToggle } from "./ModeToggle";

function Header() {
  const routes = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about-me" },
    { name: "Projects", href: "/projects" },
    { name: "Growth", href: "/growth" },
  ]
  return (
    <div className="relative w-full flex items-center p-6 outline-dashed outline-2 h-20 dark:outline-gray-600 outline-orange-400">
      <NavigationMenu className="absolute left-1/2 transform -translate-x-1/2">
        <NavigationMenuList className="flex space-x-4">
          {routes.map((route, index) => (
            <NavigationMenuItem key={index}>
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {route.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      {/* Przycisk po prawej stronie */}
      <div className="ml-auto">
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
}

export default Header;
