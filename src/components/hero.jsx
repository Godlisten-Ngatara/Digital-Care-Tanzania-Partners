import React from 'react'
import { Button } from 'antd'
function Hero({title, desc}) {
  return (
    <section
        className="pt-20 relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://public.readdy.ai/ai/img_res/bbe014a2dc2241da228da469e4f86e4a.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent">
          <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                {title}
              </h1>
              <p className="text-xl mb-8">
                {desc}
              </p>
              <div className="flex space-x-4">
                <Button
                  type="primary"
                  size="large"
                  className="!rounded-button bg-blue-600 cursor-pointer"
                >
                  Our Programs
                </Button>
                <Button
                  size="large"
                  className="!rounded-button bg-white text-blue-600 cursor-pointer"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero