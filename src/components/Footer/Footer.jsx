import React from "react";

const Footer = () => {
  return (
    <div className="text-center text-darkGray p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-black mb-3">Gadget Heaven</h1>
      <p>Leading the way in cutting-edge technology and innovation.</p>
      <div className="divider my-6"></div>
      <div className="flex flex-col text-left md:text-center gap-6 md:gap-0 md:flex-row justify-start md:justify-evenly">
        <div>
          <h2 className="text-lg font-bold text-black md:mb-4 mb-1">Services</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-primary">
                Product Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Returns
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-black md:mb-4 mb-1">Company</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold text-black md:mb-4 mb-1">Legal</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
