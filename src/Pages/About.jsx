import React from 'react';
import { useEffect, useState, useRef } from 'react';

const ScrollFadeSection = ({ children, delay = 0, direction = 'left' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    if (direction === 'left') {
      return isVisible ? 'translate-x-0' : '-translate-x-10';
    } else {
      return isVisible ? 'translate-x-0' : 'translate-x-10';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${getTransform()} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Spacer */}
      <div className="h-20"></div>
      
      <div className="flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-6xl mx-auto w-full">
          {/* Main Heading Section */}
          <ScrollFadeSection>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                While most tools are built for teams, we focus on empowering individuals 
                to work at their own pace and style.
              </p>
            </div>
          </ScrollFadeSection>

          {/* Image Placeholder Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Text Content - fades in from left */}
            <ScrollFadeSection delay={200} direction="left">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">Visualize Your Success</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  See your workflow come to life with our intuitive visual interface. 
                  Designed for clarity and efficiency, our platform helps you stay focused 
                  on what matters most.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every element is carefully crafted to reduce cognitive load and 
                  enhance your productivity throughout the day.
                </p>
              </div>
            </ScrollFadeSection>
            
            {/* Image Placeholder - fades in from right */}
            <ScrollFadeSection delay={400} direction="right">
              <img src="src\assets\download.jpeg " alt="Description" className="rounded-2xl h-80 w-full object-cover shrink-12" />
            </ScrollFadeSection>
          </div>
          
          {/* Hero Stats */}
          <ScrollFadeSection delay={200} direction="left">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">120+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support</div>
              </div>
            </div>
          </ScrollFadeSection>
          
          {/* Main Content with Image */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Our Story - text fades left */}
            <ScrollFadeSection delay={300} direction="left">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Founded in 2020 with the vision to simplify how freelancers and solo entrepreneurs 
                  manage their time, we believe that productivity tools should adapt to you, 
                  not the other way around.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our journey began when our founder, a freelance designer, struggled to find 
                  tools that fit his workflow. Frustrated with complex team-oriented software, 
                  he set out to build something better.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we serve thousands of creatives, developers, and entrepreneurs 
                  worldwide who value simplicity and efficiency in their daily tools.
                </p>
              </div>
            </ScrollFadeSection>
            
            {/* Image Placeholder - fades right */}
            <ScrollFadeSection delay={500} direction="right">
             <img  src="src\assets\Data.jpeg" alt="Description" className="rounded-2xl h-80 w-full object-cover" />
            </ScrollFadeSection>
          </div>

          {/* Mission Section with Image */}
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Image Placeholder - fades left */}
            <ScrollFadeSection delay={300} direction="left">
               <img  src="src\assets\mission.jpeg" alt="Description" className="rounded-2xl h-80 w-full object-cover" />
            </ScrollFadeSection>
            
            {/* Our Mission - text fades right */}
            <ScrollFadeSection delay={500} direction="right">
              <div>
                <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To create intuitive, beautiful tools that help individuals focus on what 
                  matters most. We're committed to building software that feels like an 
                  extension of your mind.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We believe technology should work for you, not against you. Our platform 
                  eliminates friction and complexity from your daily workflow, allowing you 
                  to achieve more with less effort.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Every feature we build is designed with one question in mind: 
                  "Does this make our users' lives easier?"
                </p>
              </div>
            </ScrollFadeSection>
          </div>

          {/* Values Section */}
          <ScrollFadeSection delay={700} direction="left">
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#343434] p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
                  <p className="text-gray-300">
                    We constantly push boundaries to deliver cutting-edge solutions that anticipate our users' needs.
                  </p>
                </div>
                
                <ScrollFadeSection delay={900} direction="left">
                  <div className=" bg-[#343434] p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Privacy First</h3>
                    <p className="text-gray-300">
                      Your data belongs to you. We implement the highest security standards to protect your information.
                    </p>
                  </div>
                </ScrollFadeSection>
                
                <ScrollFadeSection delay={1100} direction="left">
                  <div className="bg-[#343434] p-8 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
                    <p className="text-gray-300">
                      We build with our users, not just for them. Your feedback shapes our product's future.
                    </p>
                  </div>
                </ScrollFadeSection>
              </div>
            </div>
          </ScrollFadeSection>

          {/* Features Grid */}
          <ScrollFadeSection delay={1100} direction="left">
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Us</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
                  <p className="text-gray-300">
                    Experience blazing fast performance that keeps up with your workflow. No more waiting around.
                  </p>
                </div>
                
                <ScrollFadeSection delay={1300} direction="left">
                  <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                    <p className="text-gray-300">
                      Military-grade encryption and security protocols to keep your data safe and private.
                    </p>
                  </div>
                </ScrollFadeSection>
                
                <ScrollFadeSection delay={1500} direction="left">
                  <div className="text-center transition-all duration-300 hover:transform hover:scale-105">
                    <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">Intuitive Design</h3>
                    <p className="text-gray-300">
                      Clean, minimal interface that gets out of your way and lets you focus on your work.
                    </p>
                  </div>
                </ScrollFadeSection>
              </div>
            </div>
          </ScrollFadeSection>
          
          {/* CTA Section */}
          <ScrollFadeSection delay={1500} direction="left">
            <div className="bg-gray-900 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-center">
                Join thousands of freelancers and creators who are already working smarter with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-lg">
                  Start Free Trial
                </button>
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 text-lg">
                  Schedule Demo
                </button>
              </div>
              <p className="text-gray-400 mt-6 text-center">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </ScrollFadeSection>
        </div>
      </div>
    </div>
  );
};

export default About;