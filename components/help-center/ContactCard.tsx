import MessageIcon from "@/public/icon/MessageIcon";
import PhoneIcon from "@/public/icon/PhoneIcon";
import VisitIcon from "@/public/icon/VisitIcon";

export default function ContactCards() {
  const cards = [
    {
      icon: MessageIcon,
      title: "Chat to support",
      description: "We're here to help.",
      contact: "support@example.com",
      id: "chat",
    },
    {
      icon: VisitIcon,
      title: "Visit us",
      description: "Visit our office.",
      contact: "New York, USA",
      id: "visit",
    },
    {
      icon: PhoneIcon,
      title: "Call us",
      description: "Monday to Friday from 8am to 5pm.",
      contact: "(555) 234-5678",
      id: "phone",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div
              key={card.id}
              className="p-6 border border-[#DFE1E7] bg-[#FFF] rounded-3xl"
            >
              <div>
                <div className="bg-primary rounded-[10px] p-3 w-12 h-12">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0D0D12] leading-[135%] mt-5">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#666D80] leading-[150%] mt-1.5">
                    {card.description}
                  </p>
                  <p className="text-sm leading-[150%] text-[#0D0D12] mt-3">
                    {card.contact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
