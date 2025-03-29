import { HandCoins, Banknote,TrendingUp  } from 'lucide-react';

const Card = () => {
    const cards = [
        {
            title: "Total Monthly Budget",
            amount: "₹15,000",
            change: "+12.5% from last month",
            changeColor: "text-green-600",
            bgColor: "bg-yellow-200",
            icon: <HandCoins className="h-6 w-6 text-yellow-600" />,
        },
        {
            title: "Total Monthly Spent",
            amount: "₹",
            change: "+0.5% from last month",
            changeColor: "text-red-600",
            bgColor: "bg-red-100",
            icon: <Banknote className="h-6 w-6 text-red-600" />,
        },
        {
            title: "Total Monthly Saving",
            amount: "₹15,000",
            change: "+100.0% from last month",
            changeColor: "text-green-600",
            bgColor: "bg-green-100",
            icon: <TrendingUp  className="h-6 w-6 text-green-600" />,
        }
    ];

    return (
        <>
            <div className="flex justify-center gap-6 mb-8">
                {cards.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 w-70">
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
        </>
    )
}

export default Card;