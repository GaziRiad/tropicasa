import { fetchDataByTopic } from "@/actions/actions";
import Slider from "@/components/Slider";
import React from "react";

type pageProps = {
  params: { topic: string };
};

export default async function page({ params }: pageProps) {
  const topic = decodeURIComponent(params.topic.replace(/_/g, " "));
  const info = await fetchDataByTopic(topic);
  const data = info.data;

  if (!data) return <p>Loading...</p>;

  return (
    <div className="mx-auto max-w-6xl px-5 lg:px-0">
      <h2 className="mb-4 font-display text-5xl">{topic}</h2>
      <p className="mb-4 text-lg">
        SEO, or Search Engine Optimization, is the process of improving a
        website&apos;s visibility on search engines like Google. By optimizing
        content, keywords, and technical aspects, SEO helps websites rank higher
        in search results, attracting more organic traffic. The goal is to align
        a site’s content with what users are searching for, making it easier for
        search engines to understand and recommend the site. This involves a mix
        of on-page elements (like headings, images, and keywords) and off-page
        factors (such as backlinks) to enhance user experience and authority.
      </p>

      <Slider slides={data} />
    </div>
  );
}
