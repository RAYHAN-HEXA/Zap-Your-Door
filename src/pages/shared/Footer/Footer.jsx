import React from 'react';
// Social Media আইকনগুলোর জন্য FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube ব্যবহার করা হয়েছে
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from 'react-icons/fa6'; 
// লোগো বা আইকনের জন্য একটি উদাহরণ (আপনি ইমেজ লোগো ব্যবহার করতে পারেন)
import { FaShippingFast } from 'react-icons/fa'; 

const Footer = () => {
    // ন্যাভিগেশন লিঙ্কগুলোর জন্য ডেটা
    const companyLinks = [
        { name: 'Services', href: '#' },
        { name: 'Coverage', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    // সোশ্যাল মিডিয়া আইকনগুলোর জন্য ডেটা
    const socialLinks = [
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', color: 'bg-blue-600 hover:bg-blue-700' },
        { icon: FaXTwitter, href: '#', label: 'X (Twitter)', color: 'bg-black hover:bg-gray-800' }, 
        { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'bg-blue-800 hover:bg-blue-900' },
        { icon: FaYoutube, href: '#', label: 'YouTube', color: 'bg-red-600 hover:bg-red-700' },
    ];

    return (
        // ফুটার কনটেইনার: ডিপ নীল (Dark Navy/Black-Blue) ব্যাকগ্রাউন্ড, টেক্সট সাদা, প্যাডিং
        <footer className="bg-[#0f172a] text-white py-16 px-4 md:px-12 max-w-full mx-auto">
            
            {/* Main Content Grid (3 Columns on medium screens) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto">

                {/* 1. Logo & Description Column */}
                <div className="flex flex-col space-y-4">
                    {/* Logo/Brand Name */}
                    <div className="flex items-center space-x-2">
                        {/* লোগো আইকন (ঐচ্ছিক: আপনি এখানে আপনার ইমেজ লোগো কম্পোনেন্ট ব্যবহার করতে পারেন) */}
                        <FaShippingFast className="w-8 h-8 text-green-400" />
                        <h3 className="text-3xl font-extrabold italic text-green-400">ZapShift</h3>
                    </div>
                    {/* Tagline/Description */}
                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    
                    {/* Social Media Icons for this section */}
                    <div className="flex space-x-3 mt-4">
                        {socialLinks.map((social) => (
                            <a 
                                key={social.label}
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                // সোশ্যাল আইকনগুলোর কালার এখানে একটু ভিন্ন রাখা হলো যাতে ডিজাইনের সাথে মেলে
                                className={`p-2 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-green-400 transition duration-300`}
                                aria-label={social.label}
                            >
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Quick Links Column */}
                <div className="md:pl-10">
                    <h4 className="text-xl font-semibold mb-5 text-white border-b border-green-400 pb-2 inline-block">Company</h4>
                    <ul className="space-y-3">
                        {companyLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href} 
                                    className="text-gray-400 hover:text-green-400 transition duration-300 text-base"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Contact/Location Column (Placeholder for the third column) */}
                <div className="md:pl-10">
                    <h4 className="text-xl font-semibold mb-5 text-white border-b border-green-400 pb-2 inline-block">Get In Touch</h4>
                    <div className="space-y-3 text-gray-400 text-base">
                        <p>123 Delivery St, Suite 400, City, Zip 10001</p>
                        <p>Email: <a href="mailto:info@zapshift.com" className="hover:text-green-400">info@zapshift.com</a></p>
                        <p>Phone: <a href="tel:+1234567890" className="hover:text-green-400">+1 (234) 567-890</a></p>
                    </div>
                </div>

            </div>

            {/* Disclaimer / Copyright Section (Full Width) */}
            <hr className="w-full max-w-6xl mx-auto border-gray-700 my-10" />

            <div className="text-center text-sm text-gray-500 max-w-6xl mx-auto">
                <p>&copy; {new Date().getFullYear()} ZapShift. All rights reserved. | <a href="#" className="hover:text-green-400">Privacy Policy</a> | <a href="#" className="hover:text-green-400">Terms of Service</a></p>
                {/* Image-এর নিচের ডিসক্লেইমার সেকশনের মতো করে তৈরি করা হয়েছে */}
                <p className="mt-2">Disclaimer: All product names, logos, and brands are property of their respective owners. Used for illustrative purposes only.</p>
            </div>
        </footer>
    );
};

export default Footer;