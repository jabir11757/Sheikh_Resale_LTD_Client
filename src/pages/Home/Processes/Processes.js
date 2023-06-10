import React from "react";
import ProcessCard from "./ProcessCard";

const Processes = () => {
  const processData = [
    {
      id: 1,
      title: "Find your best choice",
      contact: "+88010002000",
      description:
        "Search bikes near you, by height or any bike attribute. Any question? Ask it via contact page.",
    },
    {
      id: 2,
      title: "Make an appointment with the seller",
      contact: "+88010002000",
      description:
        "Pay a deposit to reserve the bike & meet up for a testdrive. Or if you want, get it delivered straight away.",
    },
    {
      id: 3,
      title: "Confirm Order",
      contact: "+88010002000",
      description:
        "After choosing your bike, confirm your order with your valid address and available contact information.",
    },
    {
      id: 4,
      title: "Receive Order",
      contact: "+88010002000",
      description:
        "Check your bike carefully during receive it & make sure for preview 10 days promises.",
    },
    {
      id: 5,
      title: "Preview for 10 days",
      contact: "+88010002000",
      description:
        "You can check performance of your bike for 10 days. If found any problem, then within 10 days, you can exchange or refund it.",
    },
    {
      id: 6,
      title: "Submit Feedback",
      contact: "+88010002000",
      description:
        "If you happy with our services, then put a feedback. Your valuable feedback is important for our services.",
    },
  ];
  return (
    <div className="mt-24 mb-12">
      <h2 className="text-3xl font-bold text-center">Processes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {processData.map((process) => (
          <ProcessCard key={process.id} process={process} />
        ))}
      </div>
    </div>
  );
};

export default Processes;
