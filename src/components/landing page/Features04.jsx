import React from 'react'

const Features04 = () => {
    return (
        <>
            {/* How it Works */}
            <section className="py-10 md:px-16 px-2">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-mustard text-gray-900 mb-4">How CreditFlow Works</h2>
                        <p className="text-xl text-gray-600">Simple steps to manage your business credits</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                number: "01",
                                title: "Record Transaction",
                                description: "Add credit or debit transactions with just a few taps"
                            },
                            {
                                number: "02",
                                title: "Track Payments",
                                description: "Monitor payment schedules and send reminders automatically"
                            },
                            {
                                number: "03",
                                title: "Generate Reports",
                                description: "Get detailed insights about your business performance"
                            }
                        ].map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features04