import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-lg font-bold mb-2">
              <span className="text-yellow-500">Snack</span>
              <span className="text-green-700">Hub</span>
            </h2>
            <p>
              Your go-to platform for discovering amazing recipes and food tips.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <h5 className="flex ml-auto items-center">
              <BsTelephone className="m-2" />
              +639 334 556 671
            </h5>
            <h5 className="flex ml-auto items-center">
              <HiOutlineMail className="m-2" />
              snackhub2024@gmail.com
            </h5>
            <h5 className="flex ml-auto items-center">
              <SlSocialFacebook className="m-2" />
              Snack Hub Ph
            </h5>
          </div>

          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-black hover:text-green-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-black hover:text-green-700" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-black hover:text-green-700" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-black hover:text-green-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-black text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-yellow-500">Snack</span>
            <span className="text-green-700">Hub</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
