import React from 'react'
import { CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <CreditCard className="h-10 w-10 text-blue-500" />
                <span className="ml-2 text-2xl font-bold text-white">CreditFlow</span>
              </div>
              <p className="text-lg">Simplifying business credit management for everyone.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-2 text-md">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-2 text-md">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2 text-md">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-lg text-center">
            <p>&copy; 2025 CreditFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>

  )
}

export default Footer;