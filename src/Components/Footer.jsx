import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-2xl font-semibold">About Us</h2>
                        <p className="mt-4 text-sm text-gray-400">
                            We connect skilled tradespeople with customers, ensuring quality service and customer satisfaction. Explore our platform for trusted professionals in your area.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-2xl font-semibold">Quick Links</h2>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-sm text-gray-400 hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-2xl font-semibold">Contact Us</h2>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <p className="text-sm text-gray-400">
                                    Email: support@example.com
                                </p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-400">
                                    Phone: +1 123 456 7890
                                </p>
                            </li>
                            <li>
                                <p className="text-sm text-gray-400">
                                    Address: 123 Trade St., London, UK
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-5 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo */}
                    <div>
                        <h1 className="text-2xl font-bold">TradesConnect</h1>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white transition"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
