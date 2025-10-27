import { motion } from "framer-motion";
import { Palette, Video, Wand2, Layout, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production & Editing",
    description:
      "High-quality video, reels, and professional editing for compelling visual storytelling.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Logo Design & Branding",
    description:
      "Complete visual identity services from logo design to full brandboarding and style guides.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Website & Graphic Design",
    description:
      "Sleek, modern websites and stunning graphics that create a powerful brand presence.",
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "2D & 3D Animation",
    description:
      "Engaging 2D and 3D motion graphics and animations that bring your creative ideas to life.",
  },
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Social Media Management",
    description:
      "Strategic SMM to build your brand, engage your audience, and drive growth across platforms.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Google & Meta Ads",
    description:
      "Targeted advertising campaigns on Google and Meta to reach your ideal customers and maximize ROI.",
  },
];

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card
        className="p-8 h-full bg-white text-black hover-elevate transition-all duration-300"
        data-testid={`card-service-${index}`}
      >
        <div
          className="text-primary mb-4"
          data-testid={`icon-service-${index}`}
        >
          {service.icon}
        </div>
        <h3
          className="text-xl font-bold mb-3"
          data-testid={`text-service-title-${index}`}
        >
          {service.title}
        </h3>
        <p
          className="text-muted-foreground"
          data-testid={`text-service-description-${index}`}
        >
          {service.description}
        </p>
      </Card>
    </motion.div>
  );
}

export default function AboutUs() {
  return (
    <div>
      <section
        id="services"
        className="py-24"
        style={{ backgroundColor: "#0d123c" }}
      >
        <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 text-white">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl lg:text-5xl font-Montserrat font-bold mb-4"
              data-testid="text-services-heading"
            >
              Our Core Services
            </h2>
            <p
              className="text-xl text-gray-300 font-Montserrat max-w-2xl mx-auto"
              data-testid="text-services-subtitle"
            >
              A complete suite of creative and digital marketing solutions to
              elevate your brand.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="font-Montserrat grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Watch how we transform ideas into stunning visual experiences
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-3xl">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/mQMLQfeGC6Q?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1"
                  title="NC John & Sons"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
