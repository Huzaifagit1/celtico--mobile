import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="py-16 text-sm">

      {/* Parent Container */}
      <div className="mx-auto max-sm:w-[90%] sm:w-[100%] md:w-[80%]">
        <div className='flex max-sm:flex-wrap justify-between'>
            {/* Card 1 */}
            <div className="max-sm:mb-8 max-sm:mx-auto sm:w-[32%] max-sm:w-[80%] bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Affordable</h3>
            <ul className="space-y-2">
                <li className="flex items-center">
                <span className="mr-2">✔️</span>No activation fees
                </li>
                <li className="flex items-center">
                <span className="mr-2">✔️</span>No hidden costs
                </li>
                <li className="flex items-center">
                <span className="mr-2">✔️</span>Everything unlimited in Switzerland
                </li>
            </ul>
            </div>

            {/* Card 2 */}
            <div className="max-sm:mb-8 max-sm:mx-auto sm:w-[32%] max-sm:w-[80%] bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Easier</h3>
            <ul className="space-y-2">
                <li className="flex items-center">
                <span className="mr-2">✔️</span>Online First
                </li>
                <li className="flex items-center">
                <span className="mr-2">✔️</span>Administration in the customer portal
                </li>
                <li className="flex items-center">
                <span className="mr-2">✔️</span>Activated in 5 minutes
                </li>
            </ul>
            </div>

            {/* Card 3 */}
            <div className="max-sm:mx-auto sm:w-[32%] max-sm:w-[80%] bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">More Flexible</h3>
            <ul className="space-y-2">
                <li className="flex items-center">
                <span className="mr-2">✔️</span>No minimum contract term
                </li>
                <li className="flex items-center">
                <span className="mr-2">✔️</span>No notice period
                </li>
                <li className="flex items-center">
                <span className="mr-2">✔️</span>Subscription adjustable monthly
                </li>
            </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
