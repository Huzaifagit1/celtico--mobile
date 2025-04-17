import React, { useState } from 'react';
import { FaSignal } from 'react-icons/fa';
import { IoCallOutline } from 'react-icons/io5';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

function PlansSection() {
  const [is30Days, setIs30Days] = useState(true); // State to toggle between 30 Days and 12 Months

  // Data for 30 Days Plans
  const plans30Days = [
    {
      id: 1,
      name: "Basic Plan",
      price: "£10 /Month",
      billing: "30 Days Billing",
      features: [
        { icon: "Data 5G", description: "10GB 5G data" },
        { icon: "Calls & SMS", description: "Unlimited Calls and SMS" },
        { icon: "EU Roaming", description: "10GB EU roaming" }
      ]
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "£20 /Month",
      billing: "30 Days Billing",
      features: [
        { icon: "Data 5G", description: "Unlimited 5G data" },
        { icon: "Calls & SMS", description: "Unlimited Calls and SMS" },
        { icon: "EU Roaming", description: "20GB EU roaming" }
      ]
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "£16 /Month",
      billing: "30 Days Billing",
      features: [
        { icon: "Data 5G", description: "100GB 5G data" },
        { icon: "Calls & SMS", description: "Unlimited Calls and SMS" },
        { icon: "EU Roaming", description: "15GB EU roaming" }
      ]
    }
  ];

  // Data for 12 Months Plans
  const plans12Months = [
    {
      id: 1,
      name: "Basic Plan",
      price: "£108 /Year",
      billing: "12 Months Billing",
      features: [
        { icon: "Data 5G", description: "120GB 5G data" },
        { icon: "Calls & SMS", description: "Unlimited Calls and SMS" },
        { icon: "EU Roaming", description: "10GB EU roaming" }
      ]
    },
    {
      id: 2,
      name: "Standard Plan",
      price: "£216 /Year",
      billing: "12 Months Billing",
      features: [
        { icon: "Data 5G", description: "Unlimited 5G data" },
        { icon: "Calls & SMS", description: "Unlimited Calls and SMS" },
        { icon: "EU Roaming", description: "20GB EU roaming" }
      ]
    },
    {
      id: 3,
      name: "Premium Plan",
      price: "£172 /Year",
      billing: "12 Months Billing",
      features: [
        { icon: "Data 5G", description: "1200GB 5G data" },
        { icon: "Calls & SMS", description: "Unlimited Calls and SMS" },
        { icon: "EU Roaming", description: "15GB EU roaming" }
      ]
    }
  ];

  // Choose the correct plan data based on the active category
  const plansData = is30Days ? plans30Days : plans12Months;

  return (
    <div id="plans">
      <div className="w-[100%] max-sm:bg-[#E7F4ED] md:mt-[-20px] md:z-[10] md:relative">
        <div className="w-[90%] sm:w-[100%] md:w-[80%] mx-auto sm:bg-[#E7F4ED] py-20 rounded-xl">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-bold text-2xl mb-4 max-sm:text-center">Simple. Affordable. Flexible</h2>
            <p className="mb-4 max-sm:text-center">Pick the perfect plan and enjoy seamless connectivity</p>
            
            {/* Button to toggle between 30 Days and 12 Months */}
            <div className="flex mb-12">
              <span
                onClick={() => setIs30Days(true)}  // Set state to 30 Days
                className={`py-2 pl-4 pr-5 rounded-l-full cursor-pointer ${is30Days ? 'bg-[#0B8D46] text-white' : 'bg-[#D9D9D9] text-black'}`}
              >
                30 Days Plans
              </span>
              <span
                onClick={() => setIs30Days(false)} // Set state to 12 Months
                className={`py-2 pl-4 pr-4 rounded-r-full cursor-pointer ${!is30Days ? 'bg-[#0B8D46] text-white' : 'bg-[#D9D9D9] text-black'}`}
              >
                12 Months Plans
              </span>
            </div>

            {/* Plans */}
            <div className="w-[96%] flex flex-wrap justify-between">
              {plansData.map((plan, index) => (
                <div
                  key={plan.id}
                  className={`mx-auto max-sm:mb-8 w-[80%] sm:w-[32%] border border-[#0B8D46] rounded-md flex flex-col items-center justify-center py-8 ${
                    index === 1 ? 'bg-transparent' : 'bg-white'
                  }`}
                >
                  <h2>{plan.name}</h2>
                  <p className="text-3xl font-bold">{plan.price}</p>
                  <span>{plan.billing}</span>

                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="w-[70%] mt-4 flex items-center justify-center border-b border-gray-400">
                      {feature.icon === 'Data 5G' && <FaSignal />}
                      {feature.icon === 'Calls & SMS' && <IoCallOutline />}
                      {feature.icon === 'EU Roaming' && <IoChatboxEllipsesOutline />}
                      <span className="ml-4">{feature.description}</span>
                    </div>
                  ))}

                  <button className="mt-4 p-2 rounded-md bg-[#0B8D46] text-white cursor-pointer">Choose Plan</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansSection;
