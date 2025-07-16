
import { ArrowRight, Scan, Brain, Zap } from "lucide-react";
import Bounce from "../asserts/bounce.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient only */}
      <div className="absolute inset-0 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-black/50 dark:to-transparent" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DentiMap
              </span>
            </h1>
            <div className="mt-6">
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Revolutionary AI-powered dental diagnostics using advanced microcamera technology 
                for real-time teeth analysis and disease detection.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-black w-1/3 self-center">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Scan className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Scanning</h3>
              <p className="text-sm text-gray-400">Continuous monitoring with advanced microcamera</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Analysis</h3>
              <p className="text-sm text-gray-400">Deep learning powered diagnostics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Results</h3>
              <p className="text-sm text-gray-400">Get immediate diagnostic feedback</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Tooth */}
      <div className="bottom-8 left-1/2 transform -translate-x-1/2 absolute hidden lg:block">
        <div className="animate-bounce">
          <img 
            src={Bounce}
            alt="Animated Tooth" 
            className="w-12 h-12 animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
