import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ReactNode } from "react";

export default function FormModal({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="!mx-auto w-full max-w-[90%] px-4 sm:max-w-[425px] sm:px-6">
        <DialogHeader>
          <DialogTitle>Please fill the form</DialogTitle>
          <DialogDescription>
            Thank you for contributing to our SEO resources library.
          </DialogDescription>
        </DialogHeader>
        <div className="grid h-96 gap-4 py-4"></div>
        <DialogFooter>
          <Button type="submit" className="">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
