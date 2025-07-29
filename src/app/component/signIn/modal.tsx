import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";
import { CustomInput } from "../shareComponent/customInput";

export function Modal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <div>
              <div>Welcome!</div>
            </div>
          </DialogTitle>
          <DialogDescription>
            <>
              <CustomInput />
              account and remove your data from our servers.
            </>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <div>sadasd</div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
