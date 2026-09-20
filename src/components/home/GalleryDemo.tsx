"use client";

import Gallery, { GalleryCategory } from "./Gallery";

function localImage(categoryId: string, ext: string = "jpg") {
  return { src: `/images/applications/${categoryId}/1.png` };
}

const categories: GalleryCategory[] = [
  { id: "industrial", label: "Industrial", image: localImage("industrial") },
  { id: "hospitals", label: "Hospitals", image: localImage("hospital") },
  { id: "mall", label: "Mall", image: localImage("mall") },
  { id: "showrooms", label: "Showrooms", image: localImage("showroom") },
  { id: "auditorium", label: "Auditorium", image: localImage("auditorium") },
  { id: "cafe-restro-bars", label: "Cafe & Restro Bars", image: localImage("cafe") },
  { id: "gym-fitness", label: "GYM & Fitness", image: localImage("gym") },
  { id: "school-colleges", label: "School & Colleges", image: localImage("school") },
  { id: "bungalows", label: "Bungalows", image: localImage("bunglow") },
  { id: "warehouses", label: "Warehouses", image: localImage("warehouse") },
  { id: "banquets", label: "Banquets", image: localImage("banquet") },
  { id: "pub-disco", label: "Pub & Disco", image: localImage("pub") },
  { id: "places-of-worship", label: "Places of Worship", image: localImage("worship-place") },
  {
    id: "yoga-retreat-center",
    label: "Yoga Retreat Center",
    image: localImage("yoga-center"),
  },
  { id: "mushroom-farm", label: "Mushroom Farm", image: localImage("mushroom") },
  { id: "aquatic-nurseries", label: "Aquatic ", image: localImage("aquatic") },
];

export default function GalleryDemo() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <Gallery
        title="Applications"
        categories={categories}
        onCategoryChange={(id) => console.log("Category changed:", id)}
      />
    </div>
  );
}
