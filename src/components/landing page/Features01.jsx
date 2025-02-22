import image01 from "../../assets/landingPage/features_01_1.jpg"
import image02 from "../../assets/landingPage/features_01_2.jpg"
const Features01 = () => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-2 md:px-16 py-5">
                {/* Left Column - Images */}
                <div className="relative w-full h-[400px]">
                    <img
                        src={image01}
                        alt="Feature Image 1"
                        className="absolute top-0 left-0 w-2/3 shadow-lg"
                    />
                    <img
                        src={image02}
                        alt="Feature Image 2"
                        className="absolute bottom-0 right-0 w-2/3 shadow-lg"
                    />
                </div>

                {/* Right Column - Text Content */}
                <div className="space-y-8">
                    <h2 className="text-6xl font-mustard text-black">Powerful Financial Insights</h2>
                    <p className="mt-4 text-gray-900 text-2xl">
                        Stay on top of your finances with real-time analytics and tracking.
                        CreditFlow helps you visualize your income, expenses, and savings
                        effortlessly.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition flex items-center gap-2">
                        Visualize Your Spending Like a Pro
                    </button>
                </div>
            </section>

        </>
    )
}

export default Features01