import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqType } from "@/types/dictionary-types";



const FAQ = ({t}:{t:FaqType}) => {

 const faqItems = [
    {
      id: 1,
      question: t?.items?.[0]?.question ?? "How can I contact you about my project?",
      answer: t?.items?.[0]?.answer ?? "You can reach me via **email** at hello@yourdomain.com or by using the **contact form** directly on this website. Simply describe your project and I'll get back to you as soon as possible!"
    },
    {
      id: 2,
      question: t?.items?.[1]?.question ?? "How quickly will I receive a response?",
      answer: t?.items?.[1]?.answer ?? "I typically respond within **24 hours** on business days. Often much faster! • **Mon-Fri:** Within 4-8 hours • **Weekends:** By the following Monday"
    },
    {
      id: 3,
      question: t?.items?.[2]?.question ?? "What information should I include in my first message?",
      answer: t?.items?.[2]?.answer ?? "For a quick assessment, please include: • **Project description** (What you'd like to build) • **Timeline** (When you'd like to start/launch) • **Budget range** (Optional but helpful for tailored proposals)"
    },
    {
      id: 4,
      question: t?.items?.[3]?.question ?? "What payment methods do you accept?",
      answer: t?.items?.[3]?.answer ?? "I accept **bank transfer**, **Visa**, **MasterCard**, and **PayPal** - providing secure payment options for all clients. Payment terms are typically 50% upfront and 50% upon completion."
    }
  ];
  return (
    <div className="min-h-full flex items-center justify-center mt-17 md:mt-27 lg:mt-41 px-5">
      <div className="max-w-xl">
        <h4 className="text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-tighter text-center sm:text-start">
          {t?.title ?? "Questions & Answers"}
        </h4>

        <Accordion type="single" className="mt-6" defaultValue="question-0">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.id} value={`question-${index}`}>
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
    </div>
  );
};

export default FAQ;
