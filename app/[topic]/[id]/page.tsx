import { fetchDataByTitle } from "@/actions/actions";

type pageProps = {
  params: { id: string };
};

async function page({ params }: pageProps) {
  const info = await fetchDataByTitle(params.id);
  const data = info.data;

  if (!data) return <p>LOADING...</p>;

  return (
    <div className="mx-auto max-w-6xl px-5 lg:px-0">
      <h2 className="mb-4 font-display text-5xl">{data.Title}</h2>
      <p className="mb-4 text-lg">{data.Description}</p>
      <p className="mb-6">
        <strong>Credit: </strong>
        <span>{data.Author}</span>
      </p>

      <iframe
        src={`https://drive.google.com/file/d/${data.HostURL}/preview`}
        width="100%"
        height="960px"
        style={{ border: "none", marginBottom: "2rem" }}
        loading="lazy"
      />
    </div>
  );
}

export default page;
