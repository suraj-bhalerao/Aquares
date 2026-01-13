import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-aqua-blue font-bold tracking-wide uppercase text-sm mb-2">Visit Us</h2>
                    <h3 className="text-4xl font-heading font-bold text-ocean-dark">Our Location</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    {/* Info Side */}
                    <div className="p-10 flex flex-col justify-center space-y-8 bg-slate-50">
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold text-ocean-dark mb-4">AQURIUS HQ</h4>
                            <div className="flex items-start gap-4 text-gray-600">
                                <MapPin className="w-6 h-6 text-aqua-blue flex-shrink-0 mt-1" />
                                <p>123 Crystal Water Park, <br />Industrial Zone, Sector 4, <br />Cityville, State 400001</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-gray-600">
                                <Phone className="w-6 h-6 text-aqua-blue flex-shrink-0" />
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600">
                                <Mail className="w-6 h-6 text-aqua-blue flex-shrink-0" />
                                <p>hello@aqurius.com</p>
                            </div>
                            <div className="flex items-center gap-4 text-gray-600">
                                <Clock className="w-6 h-6 text-aqua-blue flex-shrink-0" />
                                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <h5 className="font-bold text-ocean-dark mb-2">Service Areas</h5>
                            <div className="flex flex-wrap gap-2">
                                {['Metropolitan City', 'Suburbs', 'North District', 'West Valley'].map(area => (
                                    <span key={area} className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-600">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="h-[400px] lg:h-auto w-full bg-gray-200 relative">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948695029!2d-73.9859560845936!3d40.74844057932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
                            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
