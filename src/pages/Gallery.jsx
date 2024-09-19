import React from 'react';
import GalleryContent from '../components/GalleryContent';

const images = [
  { src: "assets/gallery-1.webp", alt: "" },
  { src: "assets/gallery-2.webp", alt: "" },
  { src: "assets/gallery-3.webp", alt: "" },
  { src: "assets/gallery-4.webp", alt: "" },
  { src: "assets/gallery-5.webp", alt: "" },
  { src: "assets/gallery-6.webp", alt: "" },
  { src: "assets/gallery-7.webp", alt: "" },
  { src: "assets/gallery-8.webp", alt: "" },
  { src: "assets/gallery-9.webp", alt: "" },
  { src: "assets/gallery-10.webp", alt: "" },
  { src: "assets/gallery-11.webp", alt: "" },
  { src: "assets/gallery-12.jpeg", alt: "" },
];

export default function Gallery() {
  return (
   <GalleryContent images={images}/>
  );
}



