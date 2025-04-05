import React from 'react'
import { Button } from 'antd'
function Donation() {
  return (
    <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Support Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                Your contribution helps us bridge the digital divide in
                Tanzania. Every donation brings us closer to a future where all
                Tanzanians have access to digital resources and opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fas fa-laptop-code text-2xl text-blue-600"></i>
                  <div>
                    <h4 className="font-bold">Digital Education</h4>
                    <p className="text-gray-600">
                      $50 provides digital literacy training for one student
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-wifi text-2xl text-blue-600"></i>
                  <div>
                    <h4 className="font-bold">Rural Connectivity</h4>
                    <p className="text-gray-600">
                      $200 helps establish internet access in remote villages
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-building text-2xl text-blue-600"></i>
                  <div>
                    <h4 className="font-bold">Tech Hubs</h4>
                    <p className="text-gray-600">
                      $500 supports local tech entrepreneurs and startups
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Make a Donation
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <Button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600">
                  $25
                </Button>
                <Button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600">
                  $50
                </Button>
                <Button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600">
                  $100
                </Button>
                <Button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600">
                  $200
                </Button>
                <Button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600">
                  $500
                </Button>
                <Button className="!rounded-button whitespace-nowrap bg-gray-100 hover:bg-blue-100 border-2 border-transparent hover:border-blue-600">
                  Other
                </Button>
              </div>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                  <option value="">Select Donation Frequency</option>
                  <option value="one-time">One-time</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
              <Button
                type="primary"
                block
                size="large"
                className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700"
              >
                Donate Now <i className="fas fa-heart ml-2"></i>
              </Button>
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>
                  Secure payment processing <i className="fas fa-lock ml-1"></i>
                </p>
                <div className="flex justify-center space-x-2 mt-2">
                  <i className="fab fa-cc-visa text-xl"></i>
                  <i className="fab fa-cc-mastercard text-xl"></i>
                  <i className="fab fa-cc-paypal text-xl"></i>
                  <i className="fab fa-cc-amex text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Donation