"use client";
import React, { useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { debounce } from "next/dist/server/utils";

const HeaderSearchBox = () => {
  const [searchedValue, setSearchedValue] = useState();
  const handleInputChange = debounce((value) => {
    setSearchedValue(value);
  }, 1000);

  return (
    <Command className="sm:min-w-[290px] md:min-w-[400px]">
      <CommandInput
        placeholder="Type to search..."
        onValueChange={(value) => handleInputChange(value)}
        className="sm:min-w-[290px] md:min-w-[400px]"
      />

      <CommandList>
        {searchedValue && (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Result">
              <CommandItem onSelect={() => alert("hi")}>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </>
        )}
      </CommandList>
    </Command>
  );
};

export default HeaderSearchBox;
