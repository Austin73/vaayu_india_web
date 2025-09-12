export const metadata = { title: "Media" };

// export default function Media() {
//   return (
//     <section className="container py-12">
//       <h1 className="mb-4 text-3xl font-bold">Media</h1>
//       <p className="text-gray-700">Media details here!!</p>
//     </section>
//   );
// }
import AwardHighlight from "@/components/media/AwardHighlight";
import AwardCarousel from "@/components/media/AwardCarousel";

export default function MediaAwardsPage() {
  return (
    <main className="container mx-auto max-w-7xl space-y-16 px-6 py-12">
      <AwardHighlight
        image="/images/awards/award-banner.png"
        title="Celebrating Innovation, Recognizing Excellence"
        description="At Vaayu, every award reflects our commitment to sustainable cooling and innovation."
      />

      <AwardCarousel
        items={[
          {
            image: "/images/awards/rehman.png",
            caption:
              "Vaayu Founders Meet Gem Of India 'The A. R. Rehman' Invited For Exploring Vaayu Technology",
          },
          {
            image: "/images/awards/team.png",
            caption: "Our team being recognized at International Cooling Expo 2024",
          },
        ]}
      />
    </main>
  );
}
