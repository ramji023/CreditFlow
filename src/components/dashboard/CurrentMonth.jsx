import React from "react";
import { CalendarDays } from "lucide-react";

const CalendarWidget = () => {
    const currentMonth = new Date().toLocaleString("default", { month: "long" });

    return (
        <div className="flex items-center gap-2 p-6 w-fit">
            {/* Colored Icon */}
            <CalendarDays className="w-8 h-8 text-blue-500" />
            {/* Current Month */}
            <span className="text-2xl font-semibold text-gray-800">{currentMonth}</span>
        </div>
    );
};

export default CalendarWidget;
