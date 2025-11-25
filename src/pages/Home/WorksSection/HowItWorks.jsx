import React from 'react';

// ডেটা অ্যারে: চারটি কার্ডের জন্য ডেটা
const stepsData = [
    { 
        id: 1, 
        title: "Booking Pick & Drop", 
        description: "From personal packages to business shipments — we deliver on time, every time.", 
        icon: "🚚" // Placeholder Icon
    },
    { 
        id: 2, 
        title: "Cash On Delivery", 
        description: "Secure and easy payment collection when your package is delivered to the customer.", 
        icon: "💰" // Placeholder Icon
    },
    { 
        id: 3, 
        title: "Delivery Hub", 
        description: "Drop off your parcels at our designated hubs for quick processing and shipment.", 
        icon: "📦" // Placeholder Icon
    },
    { 
        id: 4, 
        title: "Booking SME & Corporate", 
        description: "Special logistics solutions tailored for Small to Medium Enterprises and large corporations.", 
        icon: "🏢" // Placeholder Icon
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-gray-50 py-12 md:py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
                    How it Works
                </h2>
                
                {/* Cards Grid - Responsive Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* JavaScript map() function ব্যবহার করে লুপ করা হয়েছে */}
                    {stepsData.map((step) => (
                        <div 
                            key={step.id} 
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center border-t-4 border-indigo-500"
                        >
                            {/* Icon Section */}
                            <div className="mb-4 bg-indigo-100 p-4 rounded-full">
                                <span className="text-3xl" role="img" aria-label="icon">{step.icon}</span>
                            </div>
                            
                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            
                            {/* Description */}
                            <p className="text-gray-600">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;