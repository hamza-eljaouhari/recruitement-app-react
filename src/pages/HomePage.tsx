import React from 'react';

const backgroundImage = require('../assets/office.jpg');

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* First Section */}
      <section
        className="h-[50rem] bg-cover bg-center flex items-center justify-center relative md:w-3/4 mx-auto"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative text-white p-8 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold"
            style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.2)' }}
          >
            Welcome to Your Future
          </h1>
          <p
            className="mt-4 text-xl md:text-2xl"
            style={{ textShadow: '1px 1px 6px rgba(0, 0, 0, 0.2)' }}
          >
            Find your dream job or the perfect candidate with us
          </p>
        </div>
      </section>

      {/* Second Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-screen-lg mx-auto px-4 md:w-3/5 w-full">
          <h2 className="text-3xl font-bold text-center mb-8">Subscription Plans</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border border-gray-200 bg-gray-100"></th>
                  <th className="py-2 px-4 border border-gray-200 bg-gray-100">Basic Plan</th>
                  <th className="py-2 px-4 border border-gray-200 bg-gray-100">Standard Plan</th>
                  <th className="py-2 px-4 border border-gray-200 bg-gray-100">Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Price</td>
                  <td className="py-2 px-4 border border-gray-200">$9.99 / month</td>
                  <td className="py-2 px-4 border border-gray-200">$19.99 / month</td>
                  <td className="py-2 px-4 border border-gray-200">$29.99 / month</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Advantage 1</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Advantage 2</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Advantage 3</td>
                  <td className="py-2 px-4 border border-gray-200"></td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Advantage 4</td>
                  <td className="py-2 px-4 border border-gray-200"></td>
                  <td className="py-2 px-4 border border-gray-200"></td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border border-gray-200">Advantage 5</td>
                  <td className="py-2 px-4 border border-gray-200"></td>
                  <td className="py-2 px-4 border border-gray-200"></td>
                  <td className="py-2 px-4 border border-gray-200">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
