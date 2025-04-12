import React from 'react';

// Import banner image
import bannerImage from '../assets/images/privacybanner.jpg';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-64 lg:h-80">
        <img 
          src={bannerImage} 
          alt="Forest with windmills" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Privacy Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Privacy Policy</h2>
          
          <p className="mb-6">
            At Airflightcart.us, accessible from www.Airflightcart.us, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Airflightcart.us and how we use it.
          </p>
          
          <p className="mb-6">
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email at booking@Airflightcart.us.com
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-2">Log Files</h3>
          <p className="mb-4">
            Airflightcart.us follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Privacy Policies</h3>
          <p className="mb-4">
            You may consult this list to find the Privacy Policy for each of the advertising partners of Airflightcart.us.
          </p>
          
          <p className="mb-4">
            Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Airflightcart.us, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
          </p>
          
          <p className="mb-4">
            Note that Airflightcart.us has no access to or control over these cookies that are used by third-party advertisers.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Third Party Privacy Policies</h3>
          <p className="mb-4">
            Airflightcart.us's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
          </p>
          
          <p className="mb-4">
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Children's Information</h3>
          <p className="mb-4">
            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
          </p>
          
          <p className="mb-4">
            Airflightcart.us does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Online Privacy Policy Only</h3>
          <p className="mb-4">
            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Airflightcart.us. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Consent</h3>
          <p className="mb-6">
            By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;