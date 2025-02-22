"use client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
type Checked = DropdownMenuCheckboxItemProps["checked"];
const DropdownMenuShad = () => {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = useState<Checked>(false);
  const [showPanel, setShowPanel] = useState<Checked>(false);
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
