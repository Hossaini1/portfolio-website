import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqType } from "@/types/dictionary-types";

// Static data
const DEFAULT_FAQ_ITEMS = [
  {
    id: 1,
    question: "How can I contact you about my project?",
    answer: "You can reach me via **email** at hello@yourdomain.com or by using the **contact form** directly on this website. Simply describe your project and I'll get back to you as soon as possible!"
  },
  {
    id: 2,
    question: "How quickly will I receive a response?",
    answer: "I typically respond within **24 hours** on business days. Often much faster! • **Mon-Fri:** Within 4-8 hours • **Weekends:** By the following Monday"
  },
  {
    id: 3,
    question: "What information should I include in my first message?",
    answer: "For a quick assessment, please include: • **Project description** (What you'd like to build) • **Timeline** (When you'd like to start/launch) • **Budget range** (Optional but helpful for tailored proposals)"
  },
  {
    id: 4,
    question: "What payment methods do you accept?",
    answer: "I accept **bank transfer**, **Visa**, **MasterCard**, and **PayPal** - providing secure payment options for all clients. Payment terms are typically 50% upfront and 50% upon completion."
  }
];

const FaqComponent = ({ t }: { t: FaqType }) => {
  // Merge translated content with fallback data
  const faqItems = DEFAULT_FAQ_ITEMS.map((defaultItem, index) => ({
    id: defaultItem.id,
    question: t?.items?.[index]?.question ?? defaultItem.question,
    answer: t?.items?.[index]?.answer ?? defaultItem.answer
  }));

  return (
    <section 
      className="min-h-full flex items-center justify-center mt-17 md:mt-27 lg:mt-41 px-5"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-xl">
        <h4 
          id="faq-heading"
          className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter text-center sm:text-start"
        >
          {t?.title ?? "Questions & Answers"}
        </h4>
        <Accordion 
          type="single" 
          className="mt-6" 
          defaultValue="question-0"
          aria-label="Frequently asked questions"
        >
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={item.id} 
              value={`question-${index}`}
            >
              <AccordionTrigger className="text-left text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqComponent;
