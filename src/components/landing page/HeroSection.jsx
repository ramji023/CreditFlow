import HeroImage from "../../../public/landingPage/hero.png"
import { MoveRight } from 'lucide-react'
const HeroSection = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 px-6 md:px-16 py-5 bg-transparent">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
                <h1 className="text-6xl font-mustard font-bold text-black">
                    Manage Your Finances Easily
                </h1>
                <p className="text-gray-900 text-2xl font-sans">
                    Track your expenses, manage your budget, and take control of your financial future with{" "}
                    <span className="font-semibold">CreditFlow</span>.
                </p>

                <button className="mt-20 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition flex items-end gap-2">
                    Start Your Journey
                    <MoveRight size={20} />
                </button>
            </div>

            {/* Right Side - Finance Image */}
            <div className="flex justify-center">
                <img
                    src={HeroImage}
                    alt="Finance Illustration"
                    className="w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] "
                />
            </div>
        </section>
    );
};

export default HeroSection;
