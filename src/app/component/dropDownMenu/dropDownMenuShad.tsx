"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
// type Checked = DropdownMenuCheckboxItemProps["checked"];
const DropdownMenuShad = () => {

  return (
    <div className="relative col-start-2 col-span-1">
      <DropdownMenu >
        <DropdownMenuTrigger asChild >
          <Bars3Icon className={"h-10 w-14 text-white"} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen sm:w-0" align="start">
    <DropdownMenuItem >Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownMenuShad;
