import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div id='contact-us' className="w-[90%] sm:w-full md:w-[80%] mx-auto my-8 flex flex-col md:flex-row shadow-sm">
      {/* Left Column - Contact Form */}
      <div className="w-full md:w-1/2 bg-[#E7F4ED] p-8">
        <h2 className="text-2xl font-bold mb-1">Have Questions? Our Support</h2>
        <h2 className="text-2xl font-bold mb-6">Team Is Here To Help!</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 bg-transparent border-b border-green-300 focus:outline-none focus:border-green-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full p-2 bg-transparent border-b border-green-300 focus:outline-none focus:border-green-600"
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full p-2 bg-transparent border-b border-green-300 focus:outline-none focus:border-green-600"
            />
          </div>
          
          <div className="mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="type your message here"
              rows="4"
              className="w-full p-2 bg-transparent border-b border-green-300 focus:outline-none focus:border-green-600 resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[E7F4ED] text-white py-3 rounded hover:bg-green-700 transition duration-300" style={{backgroundColor:"#0B8D46"}}
          >
            Submit
          </button>
        </form>
      </div>
      
      {/* Right Column - Contact Information */}
      <div className="w-full md:w-1/2 bg-white p-8">
        <div className="mb-4">
          <p className="text-gray-600 text-1xl">Contact with Author</p>
          <h2 className="text-3xl font-bold mt-2 mb-6">Have questions? Ready to help!</h2>
        </div>
        
        <div className="border-b border-gray-200 pb-6 mb-15">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
            <img   
  src="call.svg"  // Your image path
  alt="Checkmark icon"              // Alt text for accessibility
  width="24"                        // Set width to 24px
  height="24"                       // Set height to 24px
/>

            </div>
            <div>
              <p className="text-gray-600 text-sm">Feel free to get in touch?</p>
              <p className="font-medium mt-1">0871 226 1888</p>
            </div>
          </div>
        </div>
        
        <div className="border-b border-gray-200 pb-6 mb-15">
          <div className="flex items-start">
            <div className="mr-4 mt-1">
            <img   
  src="mail.svg"  // Your image path
  alt="Checkmark icon"              // Alt text for accessibility
  width="24"                        // Set width to 24px
  height="24"                       // Set height to 24px
/>
            </div>
            <div>
              <p className="text-gray-600 text-sm">How can we help you?</p>
              <p className="font-medium mt-1">info@celticmobile.co.uk</p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex items-start">
            <div className="mr-4 mt-1">
            <img   
  src="loc.svg"  // Your image path
  alt="Checkmark icon"              // Alt text for accessibility
  width="24"                        // Set width to 24px
  height="24"                       // Set height to 24px
/>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Are You Ready For Coffee?</p>
              <p className="font-medium mt-1">401 Broadway, London</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}