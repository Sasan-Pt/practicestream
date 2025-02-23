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
    <div className="w-full">
    <Command className="md:min-w-[300px] md:min-w-[400px] w-full">
      <CommandInput
        placeholder="Type to search..."
        onValueChange={(value) => handleInputChange(value)}
        className="sm:min-w-[300px] md:min-w-[400px] w-full"
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
    </div>
  );
};

export default HeaderSearchBox;
