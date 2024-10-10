import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <div>
      <section class="bg-black text-white py-16 text-center">
        <div class="max-w-3xl mx-auto">
          <h1 class="text-4xl font-bold mb-4">We Help You -</h1>
          <p class="text-lg mb-6">
            Design Experiences, Develop Solutions, and Delight Your Audience
          </p>
          <Link
            href="/services/website-development/contactUs"
            class="inline-block bg-blue-500 text-white uppercase font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Request For Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
