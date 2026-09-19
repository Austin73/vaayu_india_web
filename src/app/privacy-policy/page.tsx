import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vaayu Home Appliances India Pvt. Ltd.",
  description:
    "Privacy Policy of Vaayu Home Appliances India Pvt. Ltd. — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Privacy Policy</h1>
      <p className="mb-10 text-gray-600">Vaayu Home Appliances India Pvt. Ltd.</p>
      <p className="mb-10 text-sm text-gray-500">
        Effective Date: 01 Jan 2026 &nbsp;|&nbsp; Last Updated: 19 Sep 2026
      </p>

      <div className="space-y-10 leading-relaxed text-gray-700">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Introduction</h2>
          <p>
            Vaayu Home Appliances India Pvt. Ltd. (&ldquo;Vaayu&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your privacy and is committed to
            protecting the personal information you provide to us through our website, forms,
            applications, and other digital channels.
          </p>
          <p className="mt-4">
            This Privacy Policy explains how we collect, use, store, disclose, and protect personal
            data when you visit or use our website www.vaayuindia.com (&ldquo;Website&rdquo;) or
            interact with us.
          </p>
          <p className="mt-4">
            By using our Website or submitting your information through our forms, you acknowledge
            that you have read and understood this Privacy Policy.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Information We Collect</h2>
          <p>Depending on how you interact with us, we may collect the following information:</p>

          <h3 className="mt-5 mb-2 font-semibold text-gray-800">
            A. Information you provide directly
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>Full name</li>
            <li>Company/organisation name</li>
            <li>Job title/designation</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>City and state</li>
            <li>Business address</li>
            <li>Information relating to your HVAC or cooling requirements</li>
            <li>Project details and site information</li>
            <li>Information submitted for dealership/distributorship enquiries</li>
            <li>Information submitted when requesting quotations or product information</li>
            <li>Information submitted when applying for employment</li>
            <li>Resume/CV and professional information</li>
            <li>
              Any other information you voluntarily provide through our forms, email, WhatsApp,
              telephone, or other communication channels.
            </li>
          </ul>

          <h3 className="mt-5 mb-2 font-semibold text-gray-800">
            B. Information collected automatically
          </h3>
          <ul className="list-disc space-y-1 pl-6">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Website pages visited</li>
            <li>Date and time of access</li>
            <li>Referring website</li>
            <li>Approximate location information</li>
            <li>Website usage and interaction information.</li>
          </ul>
          <p className="mt-4">
            This information may be collected through cookies, analytics tools, pixels, tags, and
            similar technologies.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            2. How We Use Your Personal Data
          </h2>
          <p>We may use your personal data for legitimate business purposes, including:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Responding to enquiries and requests</li>
            <li>Providing product information and technical information</li>
            <li>Preparing quotations and proposals</li>
            <li>Understanding your cooling, HVAC, or project requirements</li>
            <li>Arranging site visits, demonstrations, consultations, or meetings</li>
            <li>Processing dealership or distributorship enquiries</li>
            <li>Providing customer service and after-sales support</li>
            <li>Processing service, warranty, and AMC-related requests</li>
            <li>Processing job applications and recruitment</li>
            <li>Communicating with you regarding products, services, projects, or enquiries</li>
            <li>
              Sending business updates, product information, or marketing communications where
              permitted
            </li>
            <li>Improving our Website, products, services, and customer experience</li>
            <li>Understanding Website traffic and user behaviour</li>
            <li>Preventing fraud, misuse, security incidents, and unauthorised access</li>
            <li>
              Complying with applicable laws, regulations, legal proceedings, and governmental
              requirements.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Consent</h2>
          <p>
            Where required by applicable law, we will seek your consent before processing your
            personal data.
          </p>
          <p className="mt-4">
            Our privacy notice and consent mechanisms are intended to explain what personal data is
            being collected and why it is being processed. India&apos;s DPDP framework requires
            processing to be based on lawful purposes, including consent or specified legitimate
            uses, as applicable.
          </p>
          <p className="mt-4">
            Where processing is based on consent, you may withdraw your consent, subject to
            applicable law and any consequences that may result from such withdrawal.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Marketing Communications</h2>
          <p>
            If you provide your contact information and consent to receive communications from us,
            we may contact you through:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Email</li>
            <li>Telephone</li>
            <li>SMS</li>
            <li>WhatsApp</li>
            <li>Other permitted communication channels.</li>
          </ul>
          <p className="mt-4">
            You may request to stop receiving promotional communications at any time by contacting
            us or using the unsubscribe mechanism provided in the communication.
          </p>
          <p className="mt-4">
            Withdrawal of consent for marketing communications will not affect processing that is
            necessary for legitimate business, contractual, legal, service, or other permitted
            purposes.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Sharing of Personal Data</h2>
          <p>We do not sell your personal data.</p>
          <p className="mt-4">We may share personal data where reasonably necessary with:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Employees and authorised representatives of Vaayu</li>
            <li>
              Dealers, distributors, service partners, or project partners where required to fulfil
              your request
            </li>
            <li>Technology and hosting service providers</li>
            <li>
              CRM, communication, analytics, recruitment, or customer-support service providers
            </li>
            <li>Professional advisers such as legal, accounting, or consulting professionals</li>
            <li>
              Government authorities, regulators, courts, or law-enforcement agencies where required
              by applicable law
            </li>
            <li>
              Other parties where you have provided appropriate consent or where disclosure is
              otherwise permitted by law.
            </li>
          </ul>
          <p className="mt-4">
            Where third-party service providers process personal data on our behalf, we seek to use
            appropriate contractual and security measures.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            6. Cookies and Similar Technologies
          </h2>
          <p>Our Website may use cookies and similar technologies to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Enable essential Website functionality</li>
            <li>Remember preferences</li>
            <li>Understand Website usage</li>
            <li>Measure advertising and marketing performance</li>
            <li>Improve Website performance and user experience</li>
            <li>Support relevant communications and campaigns.</li>
          </ul>
          <p className="mt-4">
            Third-party services such as analytics, advertising, social-media, or marketing
            platforms may also use cookies, pixels, tags, or similar technologies in accordance with
            their own privacy policies.
          </p>
          <p className="mt-4">
            Where required by applicable law, we will provide appropriate choices or consent
            mechanisms for non-essential cookies and similar technologies.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            7. Third-Party Websites and Services
          </h2>
          <p>
            Our Website may contain links to third-party websites, social media platforms, payment
            services, recruitment platforms, or other external services.
          </p>
          <p className="mt-4">
            Vaayu is not responsible for the privacy practices, security, or content of third-party
            websites.
          </p>
          <p className="mt-4">
            We encourage you to review the privacy policies of those third parties before providing
            them with personal information.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">8. Recruitment Information</h2>
          <p>
            If you apply for a position through our Website or recruitment forms, we may collect
            information including your name, contact details, resume/CV, qualifications, experience,
            current/expected compensation, notice period, location, and other information relevant
            to recruitment.
          </p>
          <p className="mt-4">We use this information to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Evaluate your application</li>
            <li>Contact you regarding recruitment</li>
            <li>Conduct interviews and assessments</li>
            <li>Consider you for current or future suitable opportunities</li>
            <li>Complete recruitment and onboarding processes where applicable.</li>
          </ul>
          <p className="mt-4">
            Recruitment information will be handled only for appropriate employment and
            recruitment-related purposes and in accordance with applicable law.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">9. Data Security</h2>
          <p>
            We take reasonable technical and organisational measures designed to protect personal
            data against unauthorised access, misuse, loss, alteration, disclosure, or destruction.
          </p>
          <p className="mt-4">
            However, no method of transmission over the Internet or method of electronic storage can
            be guaranteed to be completely secure.
          </p>
          <p className="mt-4">
            Accordingly, while we take reasonable precautions, we cannot guarantee absolute security
            of information transmitted to or stored by us.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">10. Data Retention</h2>
          <p>
            We retain personal data only for as long as reasonably necessary for the purposes for
            which it was collected, including providing services, maintaining business and
            transaction records, handling enquiries, recruitment, resolving disputes, enforcing
            agreements, complying with legal obligations, and meeting legitimate business
            requirements.
          </p>
          <p className="mt-4">
            When personal data is no longer required, we may securely delete, anonymise, or
            otherwise dispose of it in accordance with applicable law and our internal retention
            practices.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">11. Your Rights</h2>
          <p>
            Subject to applicable law, you may have rights relating to your personal data, including
            the ability to:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Request information about the processing of your personal data</li>
            <li>Request correction of inaccurate or incomplete personal data</li>
            <li>Request deletion of personal data where applicable</li>
            <li>Withdraw consent where processing is based on consent</li>
            <li>Raise a grievance or complaint regarding the processing of your personal data</li>
            <li>Exercise other rights available to you under applicable data-protection laws.</li>
          </ul>
          <p className="mt-4">
            Requests may be submitted using the contact details provided in this Privacy Policy.
          </p>
          <p className="mt-4">
            The DPDP Act provides data principals with rights and mechanisms concerning their
            personal data and grievances.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">12. Children&apos;s Privacy</h2>
          <p>
            Our Website and services are not intended to knowingly collect personal data from
            children except where permitted and handled in accordance with applicable law.
          </p>
          <p className="mt-4">
            If you believe that a child has provided personal data to us without appropriate consent
            or authorisation, please contact us so that we can take appropriate action.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            13. International Data Transfers
          </h2>
          <p>
            Some of our technology, hosting, analytics, communication, recruitment, or other service
            providers may process information from locations outside India.
          </p>
          <p className="mt-4">
            Where personal data is transferred or processed outside India, we will take measures
            required under applicable Indian law and applicable contractual or regulatory
            requirements.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            14. Changes to this Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our business,
            technology, services, legal requirements, or privacy practices.
          </p>
          <p className="mt-4">
            The updated version will be published on this page with a revised &ldquo;Last
            Updated&rdquo; date.
          </p>
          <p className="mt-4">We encourage you to review this page periodically.</p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            15. Grievance and Privacy Contact
          </h2>
          <p>
            If you have questions, requests, concerns, or complaints regarding this Privacy Policy
            or the processing of your personal data, please contact us:
          </p>
          <div className="mt-4 space-y-1">
            <p>Vaayu Home Appliances India Pvt. Ltd.</p>
            <p>
              Vaayu Global Tower, Lunia Compound, Lasudia Mori, Indore, Madhya Pradesh, India –
              452010
            </p>
            <p>Email: info@vaayuindia.com</p>
            <p>Phone: +91-9981184811</p>
            <p>Privacy / Grievance Contact: [Name / Designation]</p>
          </div>
          <p className="mt-4">
            We will review and respond to privacy-related requests in accordance with applicable
            law.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">16. Governing Law</h2>
          <p>
            This Privacy Policy shall be governed by and interpreted in accordance with the
            applicable laws of India.
          </p>
          <p className="mt-4">
            Any disputes shall be subject to the jurisdiction of the courts having appropriate
            jurisdiction over the registered office of Vaayu, subject to applicable law.
          </p>
        </div>

        <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
            © {currentYear} Vaayu Home Appliances India Pvt. Ltd. All Rights Reserved.
          </p>
        </p>
      </div>
    </section>
  );
}
