// src/components/FAQSection.jsx
import React, { useState } from 'react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqItems = [
      {
        question: "Can I keep my current number?",
        answer: "Absolutely. Transferring over your old number is quick and easy, and we’ll walk you through the simple process in-app!"
      },
      {
        question: "How easy is it to join?",
        answer: "Very easy! It takes about 4 minutes to sign-up and join our network. With an eSIM, you can also install and start using our service instantly!"
      },
      {
        question: "Do I get 5G with Celtic mobile?",
        answer: "Definitely. All our SIM plans include 5G by default, so you get 5G automatically if you have a 5G-enabled phones. All our plans also include 4G, in case you’re not 5G-ready!"
      },
      {
        question: "How good is your network performance?",
        answer: "It’s amazing. Our plans are powered by the UK’s fastest 5G network - Three - with 99.9% UK coverage."
      },
      {
        question: "Do the mobile plans have any contract length?",
        answer: "No! All our plans are subscription-based which means no contract and you can cancel whenever you want!"
      },
      {
        question: "How do the rewards work?",
        answer: "You’ll gain access to Millwall FC rewards just by joining our community! Every week, you’ll get exclusive discounts, raffles, early access benefits, and more."
      }
    ];
  return (
    <div className="w-[90%] sm:w-[100%] md:w-[80%] mx-auto space-y-10 mt-10">
      {/* SIM Details Section */} 
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
  {/* Physical SIM */}
  <div className="flex flex-col items-center sm:items-start space-y-2">
    <img src="/physical.svg" alt="Physical SIM" className="w-[40px] h-[40px]" />
    <h3 className="text-lg font-semibold">Physical SIM</h3>
    <p className="text-sm text-gray-600">Delivered within 5 working days (contact support if it is delayed).</p>
  </div>

  {/* eSIM */}
  <div className="flex flex-col items-center sm:items-start space-y-2">
    <img src="/esim.svg" alt="eSIM" className="w-[40px] h-[40px]" />
    <h3 className="text-lg font-semibold">eSIM</h3>
    <p className="text-sm text-gray-600">Instant email delivery with QR code & activation instructions.</p>
  </div>

  {/* User Cabinet Login */}
  <div className="flex flex-col items-center sm:items-start space-y-2">
    <img src="/user.svg" alt="User Cabinet Login" className="w-[40px] h-[40px]" />
    <h3 className="text-lg font-semibold">User Cabinet Login</h3>
    <p className="text-sm text-gray-600">Credentials are sent via email for easy plan management.</p>
  </div>
</div>


      {/* Frequently Asked Questions Section */}
      <div className="max-w-3xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h1>
       
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-green-300 rounded-md overflow-hidden"
          >
            <div 
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-sm">{item.question}</h3>
              <div className="flex items-center justify-center">
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 16 16" 
                  className={`text-green-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                >
                  <path 
                    fill="currentColor" 
                    d="M8 12L2 6h12z"
                  />
                </svg>
              </div>
            </div>  
            
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQSection;
