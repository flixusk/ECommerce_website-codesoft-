import React from 'react';
import Navbar from '../components/navbar';

const About = () => {
  return (
    <div>
    <Navbar/>
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        About SNIPE
      </h2>
      <div className="mt-6 text-lg text-gray-500 space-y-6">
        <section>
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          <p>
            At SNIPE, our mission is to redefine fashion by offering a curated selection of high-quality clothing that combines style, comfort, and affordability. We believe that everyone deserves to look and feel their best, and we are dedicated to providing our customers with the latest trends and timeless classics.
          </p>
        </section>
        
        <section>
          <h3 className="text-2xl font-bold text-gray-800">What We Offer</h3>
          <p>
            Our collections feature a wide range of apparel for all occasions. Whether you're looking for casual everyday wear, sophisticated office attire, or chic evening outfits, we have something for everyone. Our product categories include:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Casual Wear: Comfortable and stylish options for your daily wardrobe.</li>
            <li>Formal Wear: Elegant pieces perfect for work or special occasions.</li>
            <li>Active Wear: Performance-driven clothing for your fitness needs.</li>
            <li>Accessories: Complete your look with our selection of bags, belts, and more.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800">Our Commitment</h3>
          <p>
            Quality and customer satisfaction are at the heart of everything we do at SNIPE. We are committed to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Exceptional Quality: We source our materials from trusted suppliers to ensure durability and comfort.</li>
            <li>Fashion Forward: Our design team keeps a pulse on the latest fashion trends to bring you contemporary and stylish options.</li>
            <li>Inclusive Sizing: We offer a range of sizes to cater to diverse body types and ensure everyone can find something they love.</li>
            <li>Sustainable Practices: We are dedicated to reducing our environmental impact by implementing sustainable practices in our sourcing and production processes.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800">Customer Experience</h3>
          <p>
            At SNIPE, we aim to provide a seamless and enjoyable shopping experience. From our user-friendly website to our responsive customer service team, we are here to support you every step of the way. We offer fast shipping, easy returns, and a satisfaction guarantee to ensure your complete happiness with your purchase.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-800">Join the SNIPE Community</h3>
          <p>
            We invite you to join the SNIPE community and stay connected with us through our social media channels and newsletter. Be the first to know about new arrivals, exclusive offers, and the latest fashion tips. Follow us on Instagram, Facebook, and Twitter for daily inspiration and updates.
          </p>
        </section>

        <section>
          <p>
            Thank you for choosing SNIPE. We are excited to be a part of your fashion journey and look forward to helping you express your unique style.
          </p>
        </section>
      </div>
    </div>
    </div>
  );
};

export default About;
