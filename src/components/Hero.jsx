import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplet } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-aqua-blue/30 pt-20">

            {/* Decorative Elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-aqua-blue/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/80 py-2 px-4 rounded-full shadow-sm mb-6 border border-blue-100"
                    >
                        <Droplet className="w-4 h-4 text-aqua-blue fill-current" />
                        <span className="text-sm font-medium text-ocean-dark">Premium Custom Water Bottles</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-heading font-extrabold text-ocean-dark tracking-tight mb-6 leading-tight"
                    >
                        Pure Water. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-blue to-sky-blue">
                            Your Brand.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Elevate your business image with premium, custom-labeled water bottles.
                        Perfect for hotels, corporate events, and restaurants.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a
                            href="#contact"
                            className="group bg-aqua-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-sky-blue transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Get Custom Bottles
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="bg-white text-ocean-dark border-2 border-ocean-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                            Request a Quote
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
