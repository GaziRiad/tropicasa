import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Item = {
  title: string;
  text: string;
};

const Items: Item[] = [
  {
    title: "What’s is SEO and why is it important",
    text: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on search engine results pages (SERPs). It helps increase your site’s visibility, attract organic traffic, and grow your online presence.",
  },
  {
    title: "How can these SEO PDF’s help me improve my website?",
    text: "These PDFs provide step-by-step guides, expert tips, and strategies on various SEO topics, from keyword research to technical SEO. They offer the knowledge you need to implement effective SEO techniques and boost your site's performance.",
  },
  {
    title: "Are all the SEO resources on this site free?",
    text: "Yes, every SEO resource we aggregate is available for free. Our goal is to provide top-quality SEO guides, tips, and strategies without any cost to you.",
  },
  {
    title: "What’s the difference between on-page and off-page SEO?",
    text: "On-page SEO focuses on optimizing elements on your website, like content and meta tags. Off-page SEO involves strategies outside of your website, such as building backlinks and promoting your content to improve your site’s authority.",
  },
  {
    title: "How do I know which strategies are the best for my website?",
    text: 'Start with the basics covered in our "What’s SEO?" section, then explore topics like keyword research and technical SEO. Our PDFs cover various strategies so you can choose what best fits your website’s needs and goals.',
  },
];

export default function AccordionSection() {
  return (
    <div>
      <h2 className="lg:text-6xl text-3xl font-display font-bold capitalize mb-7 text-secondary">
        Topicasa SEO FAQ
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-6 mb-20"
      >
        {Items.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.title}
            className="bg-white py-2 px-6 rounded-[36px]"
          >
            <AccordionTrigger className="text-[#ff914d] text-lg font-normal hover:no-underline [&>svg]:text-black [&>svg]:h-8 [&>svg]:w-8">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-lg pr-4 text-primary">
              {item.text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
