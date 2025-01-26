"use client";
import React, { useCallback, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { debounce } from "next/dist/server/utils";

const HeaderSearchBox = () => {
  const [searchedValue, setSearchedValue] = useState();
  const handleInputChange = debounce((value) => {
    setSearchedValue(value);
  }, 1000);

  return (
    <Command>
      <CommandInput
        placeholder="Type a command or search..."
        onValueChange={(value) => handleInputChange(value)}
      />

      <CommandList>
        {searchedValue && (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => alert("hi")}>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>{" "}
          </>
        )}
      </CommandList>
    </Command>
  );
};

export default HeaderSearchBox;
