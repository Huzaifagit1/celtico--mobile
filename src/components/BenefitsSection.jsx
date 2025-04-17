import React from 'react';

const BenefitsSection = () => {
  return (
    <section className="text-sm mb-8">

      {/* Parent Container */}
      <div className="mx-auto sm:w-[100%] md:w-[80%] max-sm:w-[90%] flex flex-wrap justify-between">
        {/* Left Card */}
        <div className="max-sm:mx-auto max-sm:mb-8 w-[80%] sm:w-[49%] bg-black text-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Exclusive Benefits for Celtic Mobile Users</h3>
          <ul className="space-y-2">
            <li>• Enjoy two (2) general admission tickets for all home domestic league (SPFL) matches at the Stadium.</li>
            <li>• Four (4) x “Number 7” hospitality passes for five (5) home domestic league matches at the Stadium (subject to availability).</li>
          </ul>
        </div>

        {/* Right Card */}
        <div className="max-sm:mx-auto max-sm:mb-8 w-[80%] sm:w-[49%] bg-black text-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Merchandise Entitlement for Subscribers</h3>
          <ul className="space-y-2">
            <li>✔ Get five (5) signed replica shirts from the team.</li>
            <li>✔ Receive five (5) signed footballs from Celtic FC.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
