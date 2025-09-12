import Image from "next/image";
import React from "react";

interface AwardHighlightProps {
  image: string;
  title: string;
  description: string;
}

export default function AwardHighlight({ image, title }: AwardHighlightProps) {
  return (
    <div className="relative mt-15 w-full overflow-hidden rounded-2xl">
      <Image
        src={image}
        alt={title}
        width={1600}
        height={800}
        className="h-[400px] w-full md:h-[550px]"
      />
    </div>
  );
}
