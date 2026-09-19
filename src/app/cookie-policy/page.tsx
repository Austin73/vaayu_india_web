import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Vaayu Home Appliances India Pvt. Ltd.",
  description:
    "Cookie Policy of Vaayu Home Appliances India Pvt. Ltd. — how we use cookies and similar technologies on our website.",
};

export default function CookiePolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:px-12">
      <h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Cookie Policy</h1>
      <p className="mb-10 text-gray-600">Vaayu Home Appliances India Pvt. Ltd.</p>
      <p className="mb-10 text-sm text-gray-500">
        Effective Date: 01 Jan 2026 &nbsp;|&nbsp; Last Updated: 19 Sep 2026
      </p>

      <div className="space-y-10 leading-relaxed text-gray-700">
        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">Introduction</h2>
          <p>
            Vaayu Home Appliances India Pvt. Ltd. (&ldquo;Vaayu&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar technologies on our
            website www.vaayuindia.com (&ldquo;Website&rdquo;) to help it function properly,
            understand how visitors use it, and improve your experience.
          </p>
          <p className="mt-4">
            This Cookie Policy explains what cookies are, the types of cookies we use, why we use
            them, and the choices available to you. It should be read alongside our{" "}
            <a href="/privacy-policy" className="underline hover:text-gray-900">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device (computer, tablet, or mobile) when
            you visit a website. They are widely used to make websites work, or work more
            efficiently, and to provide information to the site owner.
          </p>
          <p className="mt-4">
            Similar technologies such as pixels, tags, web beacons, and local storage may also be
            used for comparable purposes. In this Policy, we refer to all of these collectively as
            &ldquo;cookies&rdquo;.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Types of Cookies We Use</h2>

          <h3 className="mt-5 mb-2 font-semibold text-gray-800">A. Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the Website to function properly — for example, enabling
            core features, security, and page navigation. The Website may not work correctly without
            these cookies, and they cannot be switched off.
          </p>

          <h3 className="mt-5 mb-2 font-semibold text-gray-800">
            B. Performance and Analytics Cookies
          </h3>
          <p>
            These cookies help us understand how visitors interact with our Website — such as which
            pages are visited most often, how long visitors stay, and whether they encounter errors
            — so that we can improve Website performance and content.
          </p>

          <h3 className="mt-5 mb-2 font-semibold text-gray-800">C. Functionality Cookies</h3>
          <p>
            These cookies allow the Website to remember choices you make (such as language or
            region) and provide enhanced, more personalised features.
          </p>

          <h3 className="mt-5 mb-2 font-semibold text-gray-800">
            D. Advertising and Marketing Cookies
          </h3>
          <p>
            These cookies may be used to deliver content and communications more relevant to you and
            your interests, and to measure the effectiveness of marketing and advertising campaigns.
            They may be set by us or by third-party advertising and social-media platforms.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Third-Party Cookies</h2>
          <p>
            Some cookies on our Website may be placed by third-party service providers, such as
            analytics platforms, advertising networks, or social-media integrations. These third
            parties may use cookies in accordance with their own privacy and cookie policies, over
            which Vaayu has no direct control.
          </p>
          <p className="mt-4">
            We encourage you to review the relevant third party&apos;s policy for further
            information about the cookies they use and how to manage them.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Why We Use Cookies</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-6">
            <li>Enable essential Website functionality</li>
            <li>Remember your preferences</li>
            <li>Understand Website usage and traffic patterns</li>
            <li>Measure the performance of our marketing and advertising activities</li>
            <li>Improve Website performance, security, and user experience</li>
            <li>Support relevant communications and campaigns.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            5. Managing and Controlling Cookies
          </h2>
          <p>
            Most web browsers allow you to control cookies through their settings, including
            blocking or deleting cookies. You can typically find these settings in the
            &ldquo;Options&rdquo;, &ldquo;Preferences&rdquo;, or &ldquo;Settings&rdquo; menu of your
            browser.
          </p>
          <p className="mt-4">
            Please note that if you choose to block or delete certain cookies, some parts of our
            Website may not function properly or may not be available to you.
          </p>
          <p className="mt-4">
            Where required by applicable law, we will provide you with an appropriate mechanism to
            manage your consent preferences for non-essential cookies on our Website.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            6. Changes to this Cookie Policy
          </h2>
          <p>
            We may update this Cookie Policy from time to time to reflect changes in the cookies and
            technologies we use, or for legal, regulatory, or operational reasons.
          </p>
          <p className="mt-4">
            The updated version will be published on this page with a revised &ldquo;Last
            Updated&rdquo; date. We encourage you to review this page periodically.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Contact Us</h2>
          <p>
            If you have questions about this Cookie Policy or how we use cookies, please contact us:
          </p>
          <div className="mt-4 space-y-1">
            <p>Vaayu Home Appliances India Pvt. Ltd.</p>
            <p>
              Vaayu Global Tower, Lunia Compound, Lasudia Mori, Indore, Madhya Pradesh, India –
              452010
            </p>
            <p>Email: info@vaayuindia.com</p>
            <p>Phone: +91-9981184811</p>
          </div>
        </div>

        <p className="border-t border-gray-200 pt-8 text-sm text-gray-500">
          © {currentYear} Vaayu Home Appliances India Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </section>
  );
}
