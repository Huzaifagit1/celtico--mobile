import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Order',
      description: 'Order your free e-sim or physical sim here you can port in your number to us.',
    },
    {
      number: '2',
      title: 'Activate',
      description: 'You will receive a sim in minutes and the physical sim in 2-3 days. Your sim comes activated and ready to use.',
    },
    {
      number: '3',
      title: 'Get Started',
      description: 'Get Started: Install your sim by scanning the QR code received on your email or insert the sim in your mobile.',
    },
    {
      number: '4',
      title: 'Offers',
      description: 'You are automatically participating in our promotion.',
    },
  ];
  
  return (
<section id='how-it-works' className="py-16 text-white mb-8 bg-[#0B8D46]">
<div className="text-center mb-12">
        <h2 className="text-3xl font-bold">How It Works</h2>
      </div>
      
      {/* Main div with the specified width classes */}
      <div className="w-[90%] sm:w-[100%] md:w-[80%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Block */}
              <div className="flex flex-col items-center text-center w-full md:w-1/4 mb-8 md:mb-0">
                <div className="w-16 h-16 bg-white text-green-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed px-4">{step.description}</p>
              </div>
              
              {/* Arrow - show only between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-3xl text-white self-center mb-8 md:mb-0">
                  &gt;
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;