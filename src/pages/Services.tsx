
import { Camera, Upload, MessageCircle, Brain, Zap, Shield } from "lucide-react";
import ServiceImage from "../asserts/services.png";
import Secondary from "../asserts/Secondary.png";
import Trend from "../asserts/Trend.png";
import Test from "../asserts/Test.png";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import test from "node:test";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Live AI Model",
      description: "Real-time dental analysis using advanced microcamera technology connected to our AI system.",
      features: ["Continuous monitoring", "Instant diagnosis", "Real-time alerts"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Upload,
      title: "Upload & Analyze",
      description: "Upload your dental scans and get comprehensive AI-powered analysis and diagnosis.",
      features: ["High-accuracy scanning", "Detailed reports", "Multiple format support", "Quick results"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      title: "AI Chat Consultation",
      description: "Discuss your dental concerns with our AI assistant for personalized advice and guidance.",
      features: ["24/7 availability", "Personalized responses", "Treatment suggestions", "Follow-up care"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-background">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-white to-white dark:from-black dark:via-black dark:to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AI Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the future of dental care with our cutting-edge AI-powered services designed to revolutionize dental diagnostics and patient care.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-300 dark:from-gray-800 dark:to-gray-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardHeader className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white border-0`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* AI Technology Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powered by Advanced <span className="text-blue-600">AI Technology</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our DentiMap system leverages state-of-the-art machine learning algorithms and computer vision 
                to provide accurate, real-time dental diagnostics.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Brain className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Deep Learning</h3>
                  <p className="text-sm text-muted-foreground">Advanced neural networks for pattern recognition</p>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Real-time Processing</h3>
                  <p className="text-sm text-muted-foreground">Instant analysis and immediate results</p>
                </div>
                <div className="text-center">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">99.8% Accuracy</h3>
                  <p className="text-sm text-muted-foreground">Clinically validated diagnostic precision</p>
                </div>
                <div className="text-center">
                  <Camera className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">HD Imaging</h3>
                  <p className="text-sm text-muted-foreground">Crystal clear microcamera technology</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={Test}
                  alt="AI Technology in Action"
                  className="w-full h-[500px] object-cover hidden md:block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Precision Dental Diagnostics</h3>
                  <p className="text-gray-200">Experience cutting-edge dental care through AI-enhanced imaging and expert analysis for early and accurate detection of oral health issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
