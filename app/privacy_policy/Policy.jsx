import React from "react";

const Policy = () => {
  return (
    <section className="bg-[#020617] text-gray-300 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Last Updated */}
        <div className="mb-10">
          <span className="bg-blue-900/30 text-blue-400 text-sm px-4 py-2 rounded-full border border-blue-500/30">
            Last Updated: February 27, 2026
          </span>
        </div>

        {/* Intro */}
        <p className="mb-12 text-gray-400 leading-7 text-justify">
          <span className="text-white font-semibold">
            Global Infotech India Pvt. Ltd.
          </span>{" "}
          ("we", "our", or "us") is committed to protecting your personal
          information and your right to privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when
          you visit our website or use our services.
        </p>

        <div className="space-y-12">

          {/* Section Template */}
          {[
            {
              title: "1. Introduction",
              content:
                "We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.",
            },
            {
              title: "2. Information We Collect",
              list: [
                "Personal Information: Name, email address, phone number, and billing details.",
                "Usage Data: Browser type, pages visited, and time spent.",
                "Cookies & Tracking: Used to enhance your experience.",
              ],
            },
            {
              title: "3. How We Use Your Information",
              list: [
                "Provide, operate, and improve services",
                "Process transactions and communications",
                "Customer support",
                "Marketing (with consent)",
                "Legal compliance",
              ],
            },
            {
              title: "4. Sharing of Information",
              content:
                "We do not sell your personal data. We may share it with service providers, legal authorities, or during business transfers.",
            },
            {
              title: "5. Data Retention",
              content:
                "We retain personal information only as long as necessary or required by law.",
            },
            {
              title: "6. Data Security",
              content:
                "We use industry-standard security measures, but no system is 100% secure.",
            },
            {
              title: "7. Your Rights",
              list: [
                "Access, update, or delete your data",
                "Withdraw consent",
                "Restrict processing",
                "File complaints",
              ],
              extra:
                "To exercise rights, contact: info@globalinfotechindia.com",
            },
            {
              title: "8. Children's Privacy",
              content:
                "Our services are not intended for individuals under 18. We do not knowingly collect data from minors.",
            },
            {
              title: "9. International Data Transfers",
              content:
                "Your data may be processed in India if accessed from outside.",
            },
            {
              title: "10. Compliance with Indian Law",
              content:
                "This policy complies with IT Act 2000 and related rules.",
            },
            {
              title: "11. Changes to This Policy",
              content:
                "We may update this policy. Changes will be notified via email or website.",
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="text-white text-xl font-semibold mb-3">
                {section.title}
              </h4>

              {section.content && (
                <p className="text-gray-400 leading-7">
                  {section.content}
                </p>
              )}

              {section.list && (
                <ul className="list-disc list-inside space-y-2 text-gray-400 leading-7 mt-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {section.extra && (
                <p className="mt-3 text-blue-400">{section.extra}</p>
              )}
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-3">
              12. Contact Us
            </h4>

            <div className="text-gray-400 space-y-2 leading-7">
              <p className="text-white font-semibold">
                Global Infotech India Pvt. Ltd.
              </p>

              <p> 
              📧 info@globalinfotechindia.com</p>

              <p>
                📍 Plot No. 1, Shantiniketan Colony, Ground Floor, Pallavi
                Apartment, Pratap Nagar, Nagpur – 440022, Maharashtra, India
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Policy;