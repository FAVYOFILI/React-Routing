import React from "react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to our demo
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
            This is a simple demo page built with React and Tailwind CSS.
          </p>
          <div className="mt-10">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 border border-transparent rounded-md text-base font-medium">
              Get started
            </button>
            <button className="ml-4 bg-white hover:bg-gray-50 text-indigo-600 px-8 py-3 border border-indigo-600 rounded-md text-base font-medium">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to build
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Fast Performance
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Optimized for speed and efficiency to deliver the best user
                  experience.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Cloud Integration
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Seamlessly connect with your favorite cloud services and APIs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  Security First
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  Built with security in mind to protect your data and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            No credit card required. Cancel anytime.
          </p>
          <button className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
            Sign up for free
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Demo;
