import React from 'react';

// Import banner image - using the specified termsbanner.jpg
import bannerImage from '../assets/images/termsbanner.jpg';

const TermsConditions = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative h-64 lg:h-80">
        <img 
          src={bannerImage} 
          alt="Mountains with blue sky" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Terms & Conditions</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Terms and Conditions</h2>
          
          <p className="mb-4">
            Welcome to Airflightcart.us!
          </p>
          
          <p className="mb-4">
            These terms and conditions outline the rules and regulations for the use of Airflightcart.us's Website, located at <a href="/" className="text-blue-600 hover:underline">www.Airflightcart.us</a>.
          </p>
          
          <p className="mb-6">
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Airflightcart.us if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          
          <p className="mb-6">
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Cookies</h3>
          <p className="mb-4">
            We employ the use of cookies. By accessing cheapticketfare, you agreed to use cookies in agreement with the cheapticketfare's Privacy Policy.
          </p>
          
          <p className="mb-6">
            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">License</h3>
          <p className="mb-6">
            Unless otherwise stated, Airflightcart.us and/or its licensors own the intellectual property rights for all material on Airflightcart.us. All intellectual property rights are reserved. You may access this from cheapticketfare for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">You must not:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Republish material from cheapticketfare</li>
            <li>Sell, rent or sub-license material from cheapticketfare</li>
            <li>Reproduce, duplicate or copy material from cheapticketfare</li>
            <li>Redistribute content from cheapticketfare</li>
          </ul>
          
          <p className="mb-6">
            This Agreement shall begin on the date hereof.
          </p>
          
          <p className="mb-6">
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Airflightcart.us does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Airflightcart.us,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Airflightcart.us shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
          </p>
          
          <p className="mb-6">
            Airflightcart.us reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">You warrant and represent that:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
          </ul>
          
          <p className="mb-6">
            You hereby grant Airflightcart.us a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Hyperlinking to our Content</h3>
          <p className="mb-4">
            The following organizations may link to our Website without prior written approval:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
          </ul>
          
          <p className="mb-6">
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Content Liability</h3>
          <p className="mb-6">
            We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Your Privacy</h3>
          <p className="mb-6">
            Please read Privacy Policy
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Reservation of Rights</h3>
          <p className="mb-6">
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Removal of links from our website</h3>
          <p className="mb-6">
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Disclaimer</h3>
          <p className="mb-4">
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          
          <p className="mb-6">
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          
          <p className="mb-6">
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;