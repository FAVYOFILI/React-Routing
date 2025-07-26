import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            About Us
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Learn more about our company and what we stand for.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-500">
              Founded in 2023, we started as a small team with a big vision. Our goal was to create meaningful products 
              that solve real problems for people around the world. Today, we've grown into a company serving millions 
              of customers globally, but we've never lost sight of our original mission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
            <ul className="mt-4 space-y-4 text-gray-500">
              <li className="flex items-start">
                <span className="flex-shrink-0 text-green-500">✓</span>
                <span className="ml-3">Customer-first approach in everything we do</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-green-500">✓</span>
                <span className="ml-3">Commitment to innovation and quality</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-green-500">✓</span>
                <span className="ml-3">Transparent and ethical business practices</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 text-green-500">✓</span>
                <span className="ml-3">Diverse and inclusive workplace culture</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-gray-500">
              We're proud of our talented team of professionals who come from diverse backgrounds and bring unique 
              perspectives to our work. Our culture encourages collaboration, creativity, and continuous learning.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-gray-500">
              Have questions or want to learn more? We'd love to hear from you.
              <br />
              Email: <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800">info@example.com</a>
              <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default About;
