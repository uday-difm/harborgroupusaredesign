import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

const Rightsidebar = () => {

  // Define the scrollToTop function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="xl:sticky top-20 self-start h-fit">
      <div className="space-y-12">
        {/* Profile Section */}
        <div
          className="rounded-lg card-elevated p-6 text-center border border-custom-gray-light bg-white transform hover:scale-105 transition-all duration-300"
          onClick={scrollToTop}  // Call scrollToTop when clicked
        >
          <Link href="/user/profile">
            <Image
              src={"https://harborgroupusa.s3-eu-central-2.ionoscloud.com/logo/Harbor Favicon.png"}
              alt={"Admin"}
              width={800}  // Set the width of the image (adjust based on your design needs)
              height={800} // Set the height of the image (adjust based on your design needs)
              className="w-28 h-28 mx-auto rounded-full mb-6 border-4 border-red-500 card-elevated transform transition-all hover:scale-110"
              loading="lazy" // Lazy load the image
            />
            <h3 className="text-2xl font-semibold text-custom-black mb-2">"WMH INDIA"</h3>
            <p className="text-sm text-custom-gray opacity-75">Leading the Fashion & Talent Industry</p>
          </Link>
        </div>

        {/* Advertisement Section */}
        <div className="rounded-lg card-elevated p-5 text-center bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-custom-white">
          <FontAwesomeIcon icon={faBullhorn} className="text-4xl animate-bounce mb-3" />
          <h4 className="text-xl font-semibold mb-3">Reach a Wider Audience!</h4>
          <p className="text-sm mb-4">
            Advertise with us and showcase your brand to our vast community of fashion enthusiasts.
            Maximize your impact by placing an ad in our magazine.
          </p>
          <a href="/contact-us">
            <button className="bg-custom-white text-error text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-all">
              Contact Us for Advertising
            </button>
          </a>
        </div>

        {/* Social Share */}
        <div className="rounded-lg card-elevated p-6 text-center border border-custom-gray-light">
          <h3 className="text-xl font-bold text-custom-black mb-6">Share this Blog</h3>
          <div className="flex gap-4 justify-center">
            {/* Facebook Share */}
            <button
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 card-elevated flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-custom-white text-lg" />
            </button>

            {/* Twitter (X) Share */}
            <button
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(
                    'Check out this blog!'
                  )}`,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="w-12 h-12 bg-blue-400 rounded-full hover:bg-blue-500 card-elevated flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faTwitter} className="text-custom-white text-lg" />
            </button>

            {/* Pinterest Share */}
            <button
              onClick={() =>
                window.open(
                  `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&description=${encodeURIComponent(
                    'Check out this blog!'
                  )}`,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="w-12 h-12 bg-navy-800 rounded-full hover:bg-secondary card-elevated flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faPinterest} className="text-custom-white text-lg" />
            </button>

            {/* WhatsApp Share */}
            <button
              onClick={() =>
                window.open(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent('Check out this blog! ' + window.location.href)}`,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className="w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 card-elevated flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-custom-white text-lg" />
            </button>
          </div>
        </div>
        
        {/* View All Blogs Link */}
        <div className="rounded-lg card-elevated p-6 text-center border border-custom-gray-light">
          <h3 className="text-xl font-bold text-custom-black mb-6">
            View All Blogs
          </h3>
          <Link
            href="/blog"
            className="block mt-6 text-navy-800 hover:underline font-semibold"
          >
            Explore More →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rightsidebar;
