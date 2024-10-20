import { fetchDataByTitle } from "@/actions/actions";
import { BreadCrumbComp } from "@/components/BreadCrumbComp";
import DownloadButton from "@/components/DownloadButton";
import Footer from "@/components/Footer";
import Link from "next/link";

type pageProps = {
  params: { id: string };
};

async function page({ params }: pageProps) {
  const info = await fetchDataByTitle(params.id);
  const data = info.data;

  if (!data) return <p>LOADING...</p>;

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 lg:px-0">
        <BreadCrumbComp data={data} />

        <h2 className="mb-2 font-display text-3xl lg:mb-4 lg:text-5xl">
          {data.Title}
        </h2>
        <p className="mb-2 text-lg lg:mb-4">{data.Description}</p>
        <div className="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-3">
            <p>
              <strong>Credit: </strong>
              <span>{data.Author}</span>
            </p>
            <p>
              <strong>Website: </strong>
              <Link
                href={data.WebsiteURL}
                target="_blank"
                className="underline underline-offset-2 transition-all hover:text-blue-700"
              >
                {data.WebsiteURL}
              </Link>
            </p>
          </div>
          <DownloadButton fileUrl={data.HostURL} fileName={data.Title} />
        </div>
        <div className="mx-auto w-full lg:w-[90%]">
          <iframe
            src={`${data.HostURL.replace("view", "preview")}`}
            width="100%"
            height="1200px"
            style={{ border: "none", marginBottom: "2rem" }}
            loading="lazy"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
