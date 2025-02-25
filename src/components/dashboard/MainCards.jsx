import { ArrowDownCircle, ArrowUpCircle, CircleDollarSign } from "lucide-react";

const MainCards = () => {
  const cards = [
    {
      title: "Total Credit",
      amount: "$5,000",
      icon: <ArrowUpCircle className="text-green-500" size={40} />, // Green for credit
    },
    {
      title: "Total Debit",
      amount: "$3,000",
      icon: <ArrowDownCircle className="text-red-500" size={40} />, // Red for debit
    },
    {
      title: "Net Balance",
      amount: "$2,000",
      icon: <CircleDollarSign className="text-blue-500" size={40} />, // Blue for balance
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-xl rounded-full p-6 flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-2xl font-bold">{card.amount}</p>
          </div>
          {card.icon}
        </div>
      ))}
    </div>
  );
};

export default MainCards;
