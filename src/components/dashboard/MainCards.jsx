import { ArrowDownCircle, ArrowUpCircle, CircleDollarSign } from "lucide-react";

const MainCards = () => {
  const cards = [
    {
      title: "Total Credit",
      amount: "$5,000",
      icon: <ArrowUpCircle className="text-green-500" size={35} />, // Green for credit
    },
    {
      title: "Total Debit",
      amount: "$3,000",
      icon: <ArrowDownCircle className="text-red-500" size={35} />, // Red for debit
    },
    {
      title: "Net Balance",
      amount: "$2,000",
      icon: <CircleDollarSign className="text-blue-500" size={35} />, // Blue for balance
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-2xl w-55 h-44 p-4 flex flex-col justify-between"
        >
          {/* Title */}
          <div className="flex gap-13 items-baseline">
            <h2 className="text-2xl font-semibold ">{card.title}</h2>
            <th className="text-right text-xl">⋮</th>
          </div>
          {/* Border Line */}
          <hr className="border-t border-gray-300 my-1" />

          {/* Amount & Icon Section */}
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">{card.amount}</p>
            <div className="text-2xl">{card.icon}</div>
          </div>
        </div>
      ))}
    </div>


  );
};

export default MainCards;
