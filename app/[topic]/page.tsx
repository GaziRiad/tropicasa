import { fetchAllTopics, fetchDataByTopic } from "@/actions/actions";
import { BreadCrumbComp } from "@/components/BreadCrumbComp";
import SelectTopic from "@/components/SelectTopic";
import Slider from "@/components/Slider";
import { Metadata } from "next";
import React from "react";

type pageProps = {
  params: { topic: string };
};

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const topic = decodeURIComponent(params.topic.replace(/_/g, " "));

  return {
    title: `${topic} - Free SEO Resources & Community Contributions`,
  };
}

export default async function page({ params }: pageProps) {
  const res = await fetchAllTopics();
  const topics = res.data;

  const topic = decodeURIComponent(params.topic.replace(/_/g, " "));
  const info = await fetchDataByTopic(topic);
  const data = info.data;

  if (!data) return <p>Loading...</p>;

  return (
    <div className="mx-auto mb-16 max-w-6xl px-5 lg:px-0">
      <BreadCrumbComp type="topics" data={{ Topic: topic }} />
      <div className="flex items-center gap-4">
        <h2 className="mb-2 font-display text-3xl lg:mb-4 lg:text-5xl">
          {topic}
        </h2>
        {topics && <SelectTopic topics={topics} />}
      </div>
      <p className="mb-2 text-lg lg:mb-4">
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
