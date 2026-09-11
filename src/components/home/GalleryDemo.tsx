"use client";

import Gallery, { GalleryCategory, GalleryImage } from "./Gallery";

/**
 * Placeholder data — swap each category's `images` for real photos later.
 * The Gallery component doesn't care where the src strings come from
 * (static import, CDN URL, CMS, API response, etc).
 */
function placeholderImages(seed: string, count: number): GalleryImage[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${seed}-${i + 1}`,
    src: `https://picsum.photos/seed/${seed}-${i + 1}/600/800`,
  }));
}

const categories: GalleryCategory[] = [
  { id: "industrial", label: "Industrial", images: placeholderImages("industrial", 5) },
  { id: "hospitals", label: "Hospitals", images: placeholderImages("hospitals", 4) },
  { id: "mall", label: "Mall", images: placeholderImages("mall", 5) },
  { id: "showrooms", label: "Showrooms", images: placeholderImages("showrooms", 4) },
  { id: "auditorium", label: "Auditorium", images: placeholderImages("auditorium", 5) },
  {
    id: "cafe-restro-bars",
    label: "Cafe & Restro Bars",
    images: placeholderImages("cafe-restro-bars", 4),
  },
  { id: "gym-fitness", label: "GYM & Fitness", images: placeholderImages("gym-fitness", 5) },
  {
    id: "school-colleges",
    label: "School & Colleges",
    images: placeholderImages("school-colleges", 4),
  },
  { id: "bungalows", label: "Bungalows", images: placeholderImages("bungalows", 5) },
  { id: "warehouses", label: "Warehouses", images: placeholderImages("warehouses", 4) },
  { id: "banquets", label: "Banquets", images: placeholderImages("banquets", 5) },
  { id: "pub-disco", label: "Pub & Disco", images: placeholderImages("pub-disco", 4) },
  {
    id: "places-of-worship",
    label: "Places of Worship",
    images: placeholderImages("places-of-worship", 5),
  },
  {
    id: "yoga-retreat-center",
    label: "Yoga Retreat Center",
    images: placeholderImages("yoga-retreat-center", 4),
  },
  { id: "mushroom-farm", label: "Mushroom Farm", images: placeholderImages("mushroom-farm", 5) },
  {
    id: "aquatic-nurseries",
    label: "Aquatic Nurseries",
    images: placeholderImages("aquatic-nurseries", 4),
  },
];

export default function GalleryDemo() {
  return (
    <div className="px-4 py-16">
      <Gallery
        title="Applications"
        categories={categories}
        onCategoryChange={(id) => console.log("Category changed:", id)}
      />
    </div>
  );
}
