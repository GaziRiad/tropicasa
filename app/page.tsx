import { fetchSheetData } from "@/actions/actions";
import Footer from "@/components/Footer";
import AccordionSection from "@/components/home/AccordionSection";
import GridSection from "@/components/home/GridSection";
import HomeHero from "@/components/home/HomeHero";
import ShareBanner from "@/components/home/ShareBanner";
import TopicsBanner from "@/components/home/TopicsBanner";
import React from "react";

export default async function Home() {
  const results = await fetchSheetData();

  const Grid1Items = {
    title: "Getting Started",
    description:
      "Start your SEO journey here – the foundational insights you need to know.",
    items:
      results?.data
        ?.filter((item) => item.Topic === "What is SEO")
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  const Grid2Items = {
    title: "On & Off Page SEO",
    description:
      "Learn the essential on-page techniques and off-page tactics that drive organic growth.",
    items:
      results?.data
        ?.filter(
          (item) =>
            item.Topic === "On-Page SEO" || item.Topic === "Off-Page SEO",
        )
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  const Grid3Items = {
    title: "How to find relevant keywords",
    description:
      "Uncover the best practices for researching and selecting the right SEO keywords.",
    items:
      results?.data
        ?.filter((item) => item.Topic === "Keyword Research")
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  const Grid4Items = {
    title: "Start Acquiring Links",
    description:
      "Master the art of link-building to enhance your site’s credibility and search performance.",
    items:
      results?.data
        ?.filter((item) => item.Topic === "Link Building")
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  const Grid5Items = {
    title: "Technical SEO",
    description:
      "A deep dive into technical SEO – from site speed to mobile optimization.",
    items:
      results?.data
        ?.filter((item) => item.Topic === "Technical SEO")
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  const Grid6Items = {
    title: "Reach your Local Audience",
    description:
      "Boost your local visibility and attract nearby customers with effective Local SEO.",
    items:
      results?.data
        ?.filter((item) => item.Topic === "Local SEO")
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  const Grid7Items = {
    title: "Creating Content that Ranks ",
    description:
      "Craft SEO-friendly content that ranks high and engages your audience.",
    items:
      results?.data
        ?.filter((item) => item.Topic === "Content SEO")
        .map((item) => ({
          ID: item.ID,
          Title: item.Title,
          Description: item.Description,
          Author: item.Author,
          Category: item.Category,
          Topic: item.Topic,
          pdfId: item.HostURL,
          WebsiteURL: item.WebsiteURL,
        })) || [],
  };

  return (
    <>
      <div className="mx-auto max-w-6xl">
        <HomeHero />
        <div>
          {results && (
            <div>
              <GridSection content={Grid1Items} />
              <GridSection content={Grid2Items} />
            </div>
          )}
          <ShareBanner />
          {results && (
            <div>
              <GridSection content={Grid3Items} />
              <GridSection content={Grid4Items} />
              <GridSection content={Grid5Items} />
              <GridSection content={Grid6Items} />
              <GridSection content={Grid7Items} />
            </div>
          )}
        </div>
        <TopicsBanner />
        <AccordionSection />
      </div>
      <Footer />
    </>
  );
}
