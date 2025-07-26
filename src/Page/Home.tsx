import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">


      {/* Hero Section */}
      <section className="bg-blue-50 flex-grow py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing features and services that will help you grow your business.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Easy to Use",
                description: "Our platform is designed to be intuitive and user-friendly.",
                icon: "👍"
              },
              {
                title: "Fast Performance",
                description: "Experience lightning-fast speeds with our optimized system.",
                icon: "⚡"
              },
              {
                title: "24/7 Support",
                description: "Our team is always available to help you with any issues.",
                icon: "🛟"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}

export default Home;
