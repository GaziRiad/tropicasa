import { fetchDataByTitle } from "@/actions/actions";
import DownloadButton from "@/components/DownloadButton";
import Footer from "@/components/Footer";

type pageProps = {
  params: { id: string };
};

async function page({ params }: pageProps) {
  const info = await fetchDataByTitle(params.id);
  const data = info.data;

  console.log(data);
  if (!data) return <p>LOADING...</p>;

  return (
    <>
      <div className="mx-auto max-w-6xl px-5 lg:px-0">
        <h2 className="mb-4 font-display text-5xl">{data.Title}</h2>
        <p className="mb-4 text-lg">{data.Description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-6">
              <strong>Credit: </strong>
              <span>{data.Author}</span>
            </p>
            <p className="mb-6">
              <strong>Credit: </strong>
              <span>{data.Author}</span>
            </p>
          </div>
          <DownloadButton fileUrl={data.HostURL} fileName={data.Title} />
        </div>

        <iframe
          src={`${data.HostURL.replace("view", "preview")}`}
          width="100%"
          height="1200px"
          style={{ border: "none", marginBottom: "2rem" }}
          loading="lazy"
        />
      </div>
      <Footer />
    </>
  );
}

export default page;
