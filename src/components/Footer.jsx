import React from 'react';
import { Facebook, Instagram, Twitter, Droplets } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ocean-dark text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                    <div className="flex items-center gap-2">
                        <Droplets className="h-8 w-8 text-aqua-blue" />
                        <span className="font-heading font-bold text-2xl text-white">Aquaress</span>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-aqua-blue transition-colors"><Facebook /></a>
                        <a href="#" className="hover:text-aqua-blue transition-colors"><Instagram /></a>
                        <a href="#" className="hover:text-aqua-blue transition-colors"><Twitter /></a>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Aquaress. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
