import React from "react";
import { Lock, Smartphone, TrendingUp } from "lucide-react";

const Features03 = () => {
    return (
        <section className="py-20 md:px-16 px-2">
            <div className="container mx-auto text-center space-y-6">
                {/* Headline */}
                <h2 className="text-4xl font-mustard text-gray-900">
                    Why Choose CreditFlow
                </h2>
                {/* Subheading */}
                <p className="text-xl text-gray-700">
                    Experience unmatched privacy, seamless mobile connectivity, and intelligent analytics.
                </p>

                {/* Three Feature Boxes */}
                <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-8 md:space-y-0 mt-10">
                    {/* Feature Box 1: Privacy */}
                    <div className="flex-1 border border-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <Lock size={48} className="text-blue-500" />
                        <h3 className="mt-4 text-2xl font-bold">Privacy</h3>
                        <p className="mt-2 text-gray-600">
                            Your data is secure with end-to-end encryption.
                        </p>
                    </div>

                    {/* Feature Box 2: Mobile */}
                    <div className="flex-1 border border-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <Smartphone size={48} className="text-green-500" />
                        <h3 className="mt-4 text-2xl font-bold">Mobile</h3>
                        <p className="mt-2 text-gray-600">
                            Stay connected on-the-go with our mobile-friendly design.
                        </p>
                    </div>

                    {/* Feature Box 3: Smart Analytics */}
                    <div className="flex-1 border border-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
                        <TrendingUp size={48} className="text-red-500" />
                        <h3 className="mt-4 text-2xl font-bold">Smart Analytics</h3>
                        <p className="mt-2 text-gray-600">
                            Leverage data insights for smarter financial decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features03;
