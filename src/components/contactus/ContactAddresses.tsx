import React from "react";

export default function ContactAddresses() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800">International Office:</h3>
            <p className="text-gray-600">
              503, Apollo Premiere, <br />
              Vijay Nagar, Indore, MP, India
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Experience Zone:</h3>
            <p className="text-gray-600">
              FH-196, Scheme No.54, <br />
              Vijay Nagar, Indore - 452010, (M.P)
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800">Prefer A Quick Call?</h3>
            <p className="text-gray-600">Talk To Our Cooling Experts Directly.</p>
          </div>

          <div>
            <h3 className="sr-only">Contact</h3>
            <p className="text-gray-600">
              Call Us At: <span className="font-medium">+91-XXXXXXXXXX</span>
            </p>
            <p className="text-gray-600">
              Mon—Sat: <span className="font-medium">10 AM — 6 PM IST</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
