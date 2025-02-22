import image from "../../../public/landingPage/features_02_1.png"

const Features02 = () => {
    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-2 md:px-16 py-10">

                {/* Left Column - Text Content */}
                <div className="space-y-8">
                    <h2 className="text-6xl font-mustard text-black">Stay on Track with Smart Planning</h2>
                    <p className="mt-4 text-gray-900 text-2xl">
                        Build monthly routines, set timely reminders, and manage your crediting &
                        debiting effortlessly. With CreditFlow, never miss an important financial
                        task again!
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition flex items-center gap-2">
                        Create Your First Month Plan
                    </button>
                </div>

                {/* Right Column - Image */}
                <div className="flex justify-center">
                    <img
                        src={image}
                        alt="Finance Illustration"
                        className="w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] "
                    />
                </div>
            </section>

        </>
    )
}

export default Features02