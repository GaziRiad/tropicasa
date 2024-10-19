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

export default function FormModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full border-[1.5px] border-[#a6a6a6] bg-black px-4 py-3 text-sm text-white transition-all hover:bg-black/85">
          Post SEO resource
        </Button>
      </DialogTrigger>
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
