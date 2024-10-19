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
        <Button className="text-sm rounded-full bg-black border-[1.5px] border-[#a6a6a6] transition-all text-white py-3 px-4 hover:bg-black/85">
          Post SEO resource
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Please fill the form</DialogTitle>
          <DialogDescription>
            Thank you for contributing to our SEO resources library.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 h-96"></div>
        <DialogFooter>
          <Button type="submit" className="">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
