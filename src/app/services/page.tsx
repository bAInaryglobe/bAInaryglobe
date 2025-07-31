import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bainaryglobe Services",
  description: "Discover our comprehensive suite of innovative services designed to transform your digital experience.",
};

const services = [
    {
      image: '/vexeroo.png',
      name: 'Vexeroo',
      description: 'Your comprehensive lifestyle platform that brings everything you need in one place.',
      category: 'Platform',
      featured: true,
    },
    {
      image: '/vxfit.png',
      name: 'Vexeroo Car',
      description: 'Premium automotive solutions integrated with smart technology for modern transportation.',
      category: 'Automotive',
      featured: false,
    },
    {
        image: '/vxfit.png',
        name: 'VxFit',
        description: 'A fitness app designed for busy office individuals to maintain healthy lifestyles.',
        category: 'Health & Fitness',
        featured: true,
    },
    {
        image: '/vxfit.png',
        name: 'See Naija',
        description: 'Discover Nigeria\'s tourism attractions right within the Vexeroo ecosystem.',
        category: 'Travel & Tourism',
        featured: false,
    },
    {
        image: '/vxfit.png',
        name: 'VxReels',
        description: 'View engaging reels, live sessions of product unveilings, and much more.',
        category: 'Entertainment',
        featured: false,
    },
    {
        image: '/vxfit.png',
        name: 'VxFuel',
        description: 'Order fuel from the comfort of your home - no hassle, no sweat.',
        category: 'Energy & Utilities',
        featured: false,
    },
    {
        image: '/vxfit.png',
        name: 'VxCars',
        description: 'Rent a car as easy as it gets - seamless, reliable, hassle-free.',
        category: 'Transportation',
        featured: true,
    },
    {
        image: '/vxfit.png',
        name: 'VxAI',
        description: 'Chat with a fully customizable AI assistant for your daily activities.',
        category: 'AI & Technology',
        featured: true,
    },
    {
        image: '/vxhome.png',
        name: 'VxHome',
        description: 'House rental and sharing solutions without the middleman complexity.',
        category: 'Real Estate',
        featured: false,
    },
    {
        image: '/vxflight.png',
        name: 'VxFlight',
        description: 'From your home straight to the airport - we handle all the logistics.',
        category: 'Travel & Transportation',
        featured: false,
    },
];

const categoryColors = {
  'Platform': 'bg-gradient-to-r from-purple-500 to-pink-500',
  'Automotive': 'bg-gradient-to-r from-blue-500 to-cyan-500',
  'Health & Fitness': 'bg-gradient-to-r from-green-500 to-emerald-500',
  'Travel & Tourism': 'bg-gradient-to-r from-orange-500 to-red-500',
  'Entertainment': 'bg-gradient-to-r from-pink-500 to-rose-500',
  'Energy & Utilities': 'bg-gradient-to-r from-yellow-500 to-orange-500',
  'Transportation': 'bg-gradient-to-r from-indigo-500 to-blue-500',
  'AI & Technology': 'bg-gradient-to-r from-violet-500 to-purple-500',
  'Real Estate': 'bg-gradient-to-r from-teal-500 to-green-500',
  'Travel & Transportation': 'bg-gradient-to-r from-sky-500 to-blue-500',
};

const ServicesPage = () => {
    const featuredServices = services.filter(service => service.featured);
    const regularServices = services.filter(service => !service.featured);

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-[120px] pb-16 md:pt-[150px] md:pb-20 lg:pt-[180px] lg:pb-28">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="mx-auto mb-6 max-w-4xl">
                <h1 className="mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl lg:text-6xl">
                  Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Services</span>
                </h1>
                <p className="text-lg text-body-color dark:text-gray-300 sm:text-xl lg:text-2xl">
                  Discover our comprehensive suite of innovative services designed to transform your digital experience.
                </p>
              </div>
              
              {/* Stats Section */}
              <div className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
                <div className="rounded-lg bg-primary/5 p-4 dark:bg-primary/10">
                  <div className="text-2xl font-bold text-primary lg:text-3xl">{services.length}+</div>
                  <div className="text-sm text-body-color dark:text-gray-300">Services</div>
                </div>
                <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                  <div className="text-2xl font-bold text-green-600 lg:text-3xl">24/7</div>
                  <div className="text-sm text-body-color dark:text-gray-300">Support</div>
                </div>
                <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <div className="text-2xl font-bold text-blue-600 lg:text-3xl">99.9%</div>
                  <div className="text-sm text-body-color dark:text-gray-300">Uptime</div>
                </div>
                <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
                  <div className="text-2xl font-bold text-purple-600 lg:text-3xl">AI</div>
                  <div className="text-sm text-body-color dark:text-gray-300">Powered</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute left-0 top-0 -z-10 h-full w-full">
            <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5"></div>
          </div>
        </section>

        {/* Featured Services */}
        {featuredServices.length > 0 && (
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Featured Services
                </h2>
                <p className="text-lg text-body-color dark:text-gray-300">
                  Our most popular and innovative solutions
                </p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {featuredServices.map((service, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
                  >
                    {/* Featured Badge */}
                    <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-medium text-white">
                      Featured
                    </div>
                    
                    {/* Category Badge */}
                    <div className={`absolute left-4 top-4 rounded-full ${categoryColors[service.category] || 'bg-gray-500'} px-3 py-1 text-xs font-medium text-white`}>
                      {service.category}
                    </div>

                    <div className="flex flex-col items-center text-center">
                      <div className="mb-6 mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 p-4">
                        <Image
                          src={service.image}
                          alt={service.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">
                        {service.name}
                      </h3>

                      <p className="mb-6 text-body-color dark:text-gray-300">
                        {service.description}
                      </p>

                      <div className="flex w-full flex-col gap-3 sm:flex-row">
                        <button className="flex-1 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90">
                          Learn More
                        </button>
                        <button className="flex-1 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white dark:border-primary dark:text-primary">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Services */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                All Services
              </h2>
              <p className="text-lg text-body-color dark:text-gray-300">
                Complete range of solutions for your business needs
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800"
                >
                  {/* Category Badge */}
                  <div className={`mb-4 inline-block rounded-full ${categoryColors[service.category] || 'bg-gray-500'} px-3 py-1 text-xs font-medium text-white`}>
                    {service.category}
                  </div>

                  <div className="flex flex-col">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-700">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={40}
                        height={40}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                      {service.name}
                    </h3>

                    <p className="mb-4 flex-1 text-sm text-body-color dark:text-gray-300">
                      {service.description}
                    </p>

                    <div className="flex gap-2">
                      <button className="flex-1 rounded-lg bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
                        Learn More
                      </button>
                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition-colors hover:border-primary hover:text-primary dark:border-gray-600 dark:text-gray-300 dark:hover:border-primary dark:hover:text-primary">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-white/80">
                Join thousands of satisfied customers and transform your business today.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button className="rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-gray-100">
                  Contact Sales
                </button>
                <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-primary">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };


export default ServicesPage;






export default ServicesPage;
