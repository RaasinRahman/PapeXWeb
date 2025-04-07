'use client'

import { MainNavigation, MainFooter } from "@/components/main-navigation"

export default function SurveyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#d0e4f4]">
      <MainNavigation />
      
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="bg-[#0a3d62] text-white py-4 px-6 rounded-t-lg -mt-8 -mx-8 mb-8">
            <h1 className="text-3xl font-bold text-center font-gloock">Customer Survey</h1>
            <p className="text-center mt-2 opacity-90">Help us understand your preferences</p>
          </div>
          
          <div className="w-full overflow-hidden pb-6">
            <div 
              className="relative mx-auto w-full overflow-hidden pt-[5%]"
              style={{
                height: '2500px',
                maxWidth: '100%'
              }}
            >
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSccGdyZd6cIQiM6ryZcTfqqX0hk1yPhjrFPNWuoAl7CD34Oig/viewform?embedded=true" 
                width="100%" 
                height="100%" 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  border: 'none'
                }}
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="mx-auto"
              >
                Loading Google Form...
              </iframe>
            </div>
          </div>
        </div>
      </main>

      <MainFooter />
    </div>
  )
} 