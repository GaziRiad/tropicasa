import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadCrumbCompProps = {
  type?: "page" | "topics";
  data: {
    ID?: string;
    Topic: string;
    Title?: string;
  };
};

export function BreadCrumbComp({ type = "page", data }: BreadCrumbCompProps) {
  return (
    <Breadcrumb className="mb-7">
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href="/" className="text-sm lg:text-lg">
            Home
          </Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href={`/${data.Topic}`} className="text-sm lg:text-lg">
            {data.Topic}
          </Link>
        </BreadcrumbItem>
        {type === "page" && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link
                href={`/${data.Topic}/${data.ID}`}
                className="text-sm lg:text-lg"
              >
                {data.Title}
              </Link>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
