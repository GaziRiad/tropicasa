import {
  Dialog,
  DialogContent,
  DialogDescription,
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
        </DialogHeader>
        <div className="min-h-[520px] w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeeGs_wzkZJfvd4-l7ydoKf1nOH3Lp0LL4pJkSbYcPslz8NSw/viewform?embedded=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-md"
          >
            Loading…
          </iframe>
        </div>
        {/* <DialogFooter>
          <Button type="submit" className="">
            Submit
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
