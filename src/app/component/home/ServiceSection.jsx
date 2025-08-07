"use client";

import React  from 'react';
import { ArrowRight, PlusSquare, Smile, Eye, HeartPulse, Layers, FlaskConical, Bone, Hospital as HospitalIcon, HeartCrack, Bike, Dog, Pill } from 'lucide-react';


export const ServicesSection = () => {
    const services = [
        { name: 'Medical', icon: <PlusSquare />, href: '/medical-plan'},
        { name: 'Dental', icon: <Smile />, href: "/dental-care-plan/", highlighted: true },
        { name: 'Vision', icon: <Eye />, href: '/vision-plan' },
        { name: 'Term Life', icon: <HeartPulse />, href: '/term-life' },
        { name: 'Bundles', icon: <Layers />, href: '/bundles-plan' },
        { name: 'Limited med', icon: <FlaskConical />, href: '/limited-med' },
        { name: 'Accident', icon: <Bone />, href: '/accident-plan' },
        { name: 'Hospital', icon: <HospitalIcon />, href: '/hospital-plan' },
        { name: 'Critical', icon: <HeartCrack />, href: '/critical-plan' },
        { name: 'Lifestyle', icon: <Bike />, href: '/lifestyle-plan' },
        { name: 'Pet', icon: <Dog />, href: '/pet-plan' },
        { name: 'Rx', icon: <Pill />, href: '/rx-plan' },
    ];

    return (
        <section className="bg-gray-50 py-20 sm:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 tracking-tight">Our Services</h2>
                        <p className="mt-3 text-lg text-gray-600">Individual or group, we've got the perfect health plan for you.</p>
                    </div>
                    <a href="/contact" className="mt-6 md:mt-0 flex-shrink-0 inline-block bg-sky-500 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition-colors">
                        CONTACT US
                    </a>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                         <a key={service.name} href={service.href} className={`group block text-center p-8 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border ${service.highlighted ? 'border-sky-500' : 'border-gray-200'}`}>
                            <div className="inline-block p-5 bg-sky-100 rounded-full">
                                {React.cloneElement(service.icon, { className: "h-8 w-8 text-sky-600" })}
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-indigo-900">{service.name}</h3>
                            <div className="mt-4">
                                <span className="inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-500">
                                    Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
