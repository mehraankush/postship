"use client"

import Functionality from "@/components/core/Functionality";
import PerformanceMatrix from "@/components/core/PerformanceMatrix";
import WelcomeSection from "@/components/core/WelcomeSection";



export default function Home() {
  return (
    <main className="min-h-screen bg-background mx-auto">
      <div className="mt-10 pb-10">
        <WelcomeSection />
      </div>

      <div className="bg-[#fff8ee] py-5 ">
        <PerformanceMatrix />
      </div>

      <div className="bg-[#fffdfb] py-5 ">
        <Functionality />
      </div>
    </main>
  );
}
