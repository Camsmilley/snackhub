import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-8">
        <div className="container mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-green-700">About Us</h1>
            <p className="text-lg text-gray-600">
              Welcome to SnackHub, where we are passionate about providing the
              best snacks for your cravings. Our mission is to deliver
              high-quality products and exceptional customer service to ensure
              you have a delightful snacking experience.
            </p>
          </section>

          {/* Team Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6 text-green-700">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/img/avatar.png"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Larie Del Balog</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/img/avatar.png"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Reslyn Visitacion
                </h3>
                <p className="text-gray-600">Chief Product Officer</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/img/avatar.png"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Crezza Mae Albino
                </h3>
                <p className="text-gray-600">Marketing Specialist</p>
              </div>
              {/* Team Member 4*/}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/img/avatar.png"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Cherry Ann Ustari
                </h3>
                <p className="text-gray-600">Marketing Specialist</p>
              </div>
              {/* Team Member 5 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/img/avatar.png"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Claire Ann Jose</h3>
                <p className="text-gray-600">Marketing Specialist</p>
              </div>
              {/* Team Member 6 */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <img
                  src="/img/avatar.png"
                  alt="Team Member"
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">
                  Patricia Ann Tavera
                </h3>
                <p className="text-gray-600">Marketing Specialist</p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-green-700">
              Our Story
            </h2>
            <p className="text-lg text-gray-600">
              SnackHub was founded with the vision of creating a one-stop
              destination for snack lovers. We offer a diverse range of
              products, from classic favorites to innovative new snacks. Our
              dedicated team is committed to providing you with quality products
              and outstanding service.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
