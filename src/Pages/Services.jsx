import React, { useEffect, useRef } from 'react';
// Import your personal images here
import Calendar from "../assets/Calendar.jpeg"
import client from '../assets/client.jpeg';
import smart from '../assets/smart.jpeg';
import time from '../assets/time.jpeg';

const Services = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const services = [
    {
      id: 1,
      title: "Calendar Management",
      description: "A simple, intuitive calendar designed specifically for freelancers to manage their schedule without the complexity of team-focused tools.",
      features: ["Drag & drop scheduling", "Customizable views", "Recurring events", "Smart reminders"],
      image: Calendar
    },
    {
      id: 2,
      title: "Smart Scheduling",
      description: "Automatically find the best times for your work and avoid conflicts with intelligent scheduling algorithms.",
      features: ["Auto-scheduling", "Conflict detection", "Time zone management", "Buffer time settings"],
      image: smart
    },
    {
      id: 3,
      title: "Client Integration",
      description: "Seamlessly integrate with your clients' calendars to streamline appointment setting and project planning.",
      features: ["Google Calendar sync", "Outlook integration", "Booking pages", "Client portals"],
      image: client
    },
    {
      id: 4,
      title: "Time Tracking",
      description: "Easily track billable hours and project time directly within your calendar for accurate invoicing.",
      features: ["Automatic time tracking", "Billable hours", "Project reporting", "Export to invoices"],
      image: time
    }
  ];

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized calendar engine"
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      description: "Your data is encrypted and protected with enterprise-grade security"
    },
    {
      icon: "📱",
      title: "Mobile Optimized",
      description: "Access your schedule from any device with our responsive design"
    },
    {
      icon: "🔄",
      title: "Auto Sync",
      description: "Automatic synchronization across all your devices and platforms"
    },
    {
      icon: "🌍",
      title: "Global Support",
      description: "Works seamlessly across all time zones and languages"
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your needs"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Set Up Your Profile",
      description: "Customize your availability, working hours, and preferences in minutes"
    },
    {
      step: "02",
      title: "Connect Your Calendars",
      description: "Sync with existing calendars and import your current schedule"
    },
    {
      step: "03",
      title: "Start Scheduling",
      description: "Begin managing your time efficiently with smart scheduling tools"
    },
    {
      step: "04",
      title: "Grow Your Business",
      description: "Focus on your work while we handle the scheduling complexities"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "month",
      description: "Perfect for individual freelancers",
      features: ["1 Calendar", "Basic Scheduling", "Email Support", "5GB Storage"]
    },
    {
      name: "Professional",
      price: "$19",
      period: "month",
      description: "Ideal for growing freelancers",
      features: ["3 Calendars", "Advanced Scheduling", "Priority Support", "50GB Storage", "Time Tracking"]
    },
    {
      name: "Business",
      price: "$39",
      period: "month",
      description: "For established freelancers & small teams",
      features: ["Unlimited Calendars", "All Features", "24/7 Support", "200GB Storage", "Custom Integrations"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={addToRefs} className="fade-element">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white ">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              Designed specifically for freelancers who want a simple way to plan their schedule and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Try for free
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg border border-gray-600 transition duration-300">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="fade-element text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools designed to streamline your workflow and maximize your productivity.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                <div className="md:w-1/2">
                  <div ref={addToRefs} className="fade-element image-container">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-xl shadow-2xl w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div ref={addToRefs} className="fade-element">
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-400">
                          <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="text-blue-400 font-semibold hover:text-blue-300 transition duration-300 flex items-center">
                      Learn more 
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="fade-element text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Slate?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with freelancers in mind, every feature is designed to save you time and reduce complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="fade-element bg-black p-8 rounded-xl border border-gray-800 hover:border-gray-700 transition duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div ref={addToRefs} className="fade-element text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple 4-Step Workflow</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started in minutes and transform how you manage your time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="fade-element text-center group"
              >
                <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
{/* Pricing Section */}
<section className="relative -mt-20 py-24 px-6 bg-black text-white overflow-hidden">
  {/* Large background text */}
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-[10rem] font-extrabold text-white/10 select-none">Pricing</h1>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    {/* Header */}
    <div ref={addToRefs} className="fade-element text-center mb-16">
      <h2 className="text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Choose the plan that fits your goals and scale when you’re ready.
      </p>
    </div>

    {/* Toggle */}
    <div className="flex justify-center items-center gap-3 mb-12">
      <span className="text-gray-400 text-sm">Billed Yearly</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
        <span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></span>
      </label>
    </div>

    {/* Pricing Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          ref={addToRefs}
          className={`fade-element relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 p-10 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] ${
            index === 1
              ? 'scale-105 bg-white/10 border-white/20 shadow-[0_0_50px_rgba(0,0,255,0.25)] hover:shadow-[0_0_80px_rgba(0,123,255,0.45)]'
              : ''
          }`}
        >
          {/* Plan Info */}
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            {plan.name === 'Starter' ? 'Free Plan' : plan.name + ' Plan'}
          </h3>

          <div className="mb-6">
            <span className="text-5xl font-extrabold text-white">
              {plan.price === '$9' ? 'Free' : plan.price}
            </span>
            {plan.price !== '$9' && (
              <span className="text-gray-400 text-lg font-medium">/m</span>
            )}
          </div>

          {/* Features */}
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-400 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Button */}
          <button
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
              index === 1
                ? 'bg-white text-black hover:bg-gray-100'
                : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Get Started
          </button>

          {/* Glow border on hover */}
          <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-blue-500/30 transition-all duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={addToRefs} className="fade-element text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Everything you need to know about our services.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How does the free trial work?",
                answer: "Our free trial gives you full access to all Professional plan features for 14 days. No credit card required to start."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
              },
              {
                question: "Do you offer discounts for annual plans?",
                answer: "Yes! We offer 20% discount when you choose annual billing instead of monthly payments."
              },
              {
                question: "Is my data secure?",
                answer: "Absolutely. We use enterprise-grade security measures including encryption and regular backups to protect your data."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                ref={addToRefs}
                className="fade-element bg-gray-900 p-6 rounded-lg border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-linear-to-r from-blue-900 to-purple-900">
        <div 
          ref={addToRefs}
          className="fade-element max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Schedule?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of freelancers who use Slate to manage their time more effectively and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
              Get started for free
            </button>
            <button className="bg-transparent hover:bg-black/30 text-white font-semibold py-3 px-8 rounded-lg border border-white transition duration-300">
              Schedule a demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;