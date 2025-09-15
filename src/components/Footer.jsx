import React from "react";
import { Facebook, Instagram } from "lucide-react";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-4">
                            <span className=" text-xl font-bold">Happy Liberia Cooperative</span>
                        </div>
                        <p className="text-gray-300 mb-4 max-w-md">
                            Faith-inspired, community-driven agricultural cooperative producing premium export-grade avocados from the heart of Liberia.
                        </p>

                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/ramsey.willie.2025?mibextid=ZbWKwL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.instagram.com/happy20254341?igsh=MWZzbjZwZnY4cmFzaA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>

                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#plantation" className="text-gray-300 hover:text-white transition-colors">Our Plantation</a></li>
                            <li><a href="#partnership" className="text-gray-300 hover:text-white transition-colors">Partnership</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li><span className="text-gray-300">Hass Avocados</span></li>
                            <li><span className="text-gray-300">Garcinia Kola</span></li>
                            <li><span className="text-gray-300">Guava</span></li>
                            <li><span className="text-gray-300">Papaya</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 px-4 py-4 border-t border-gray-700 flex text-center justify-around items-center">
                    <p className="text-gray-300 text-sm">
                        © 2025 Happy Liberia Cooperative. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
};
export default Footer;