import AccordionFAQ from "@/components/help-center/AccordionFAQ";
import ContactCards from "@/components/help-center/ContactCard";

const HelpCenterPage = () => {
  return (
    <div>
      <h1 className="text-2xl text-[#1D1F2C] leading-[128%] tracking-[-0.48px] font-semibold">
        Contact Us
      </h1>
      <div className="mt-4">
        <ContactCards />
      </div>
      <div className="mt-4">
        <AccordionFAQ />
      </div>
    </div>
  );
};

export default HelpCenterPage;
