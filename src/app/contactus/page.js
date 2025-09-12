export const metadata = { title: "Contact Us" };
import ContactMap from "@/components/contactus/ContactMap";
import Partners from "@/components/home/Partners";
import CallToAction from "@/components/aboutus/CallToAction";
import ContactAddresses from "@/components/contactus/ContactAddresses";
import ContactIntro from "@/components/contactus/ContactIntro";
import BookCallWithExpert from "@/components/common/BookCallWithExpert";

export default function ContactUs() {
  // app/contact/page.tsx
  return (
    <main>
      <div className="mx-auto mt-18 grid max-w-7xl items-start gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left Section */}
        <ContactIntro />

        <div className="rounded-xl border-[1px] border-gray-200 p-6">
          <BookCallWithExpert />
        </div>
      </div>
      <ContactAddresses />
      <ContactMap />
      <Partners />
      <CallToAction />
    </main>
  );
}
