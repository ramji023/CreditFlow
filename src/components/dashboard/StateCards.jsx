import { ArrowUpRight, ArrowDownRight, DollarSign, Users } from "lucide-react";

const StateCards = () => {
    const stats = [
        {
            title: "Total Credit",
            amount: "₹15,000",
            change: "+12.5% from last month",
            changeColor: "text-green-600",
            bgColor: "bg-green-100",
            icon: <ArrowUpRight className="h-6 w-6 text-green-600" />,
        },
        {
            title: "Total Debit",
            amount: "₹5,000",
            change: "-8.3% from last month",
            changeColor: "text-red-600",
            bgColor: "bg-red-100",
            icon: <ArrowDownRight className="h-6 w-6 text-red-600" />,
        },
        {
            title: "Net Balance",
            amount: "₹10,000",
            change: "+5.2% from last month",
            changeColor: "text-green-600",
            bgColor: "bg-blue-100",
            icon: <DollarSign className="h-6 w-6 text-blue-600" />,
        },
        {
            title: "Active Customers",
            amount: "24",
            change: "+2 this month",
            changeColor: "text-green-600",
            bgColor: "bg-purple-100",
            icon: <Users className="h-6 w-6 text-purple-600" />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">{stat.title}</p>
                            <p className="text-2xl font-bold text-gray-900">{stat.amount}</p>
                            <p className={`text-sm ${stat.changeColor}`}>{stat.change}</p>
                        </div>
                        <div className={`${stat.bgColor} p-3 rounded-full`}>{stat.icon}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StateCards;
