import { GalleryImageConstants } from "@/constants/GalleryImageConstants";
import { NextPage } from "next";
import Image from "next/image";

const GalleryBox: NextPage = ({}) => {
  return (
    <div className="xl:w-[1250px] lg:mx-0 sm:mx-3 mt-5 grid grid-cols-4 grid-rows-5 md:grid-cols-4 md:grid-rows-4 h-[675px] gap-5 shadow-gray-100 shadow-xl">
      {/* SEO */}
      <div className="hidden">
        <p>Vapor Blasting Blora</p>
        <p>Powder Coating Blora</p>
        <p>Overlogic ID</p>
        <p>Fosti UMS</p>
      </div>
      <div className="w-full overflow-hidden rounded-2xl col-span-4 row-span-2 md:col-span-3 md:row-span-2 hover:zoom-in-50">
        <Image
          src={GalleryImageConstants.image1}
          width={200}
          height={200}
          alt={"Vapor Blasting Powder Coating hitam Texture Pasir Mesin Tiger"}
          className="rounded-2xl object-cover w-full h-full align-bottom cursor-pointer transition-all hover:scale-125 z-50"
        />
      </div>
      <div className="overflow-hidden rounded-2xl w-full col-span-2 row-span-3 md:col-span-1 md:row-span-4 h-full">
        <video
          width="320"
          height="240"
          controls
          preload="none"
          autoPlay
          loop
          muted
          src="/videos/gallery/video-1.mp4"
          className="rounded-2xl h-full object-cover transition-all hover:scale-125"
        />
      </div>
      <div className="overflow-hidden rounded-2xl w-full col-span-2 row-span-2 md:col-span-1 md:row-span-2 h-full">
        <Image
          src={GalleryImageConstants.image2}
          width={200}
          height={200}
          alt={"Powder Coating Pink Frame Mio"}
          className="rounded-2xl object-cover w-full h-full transition-all hover:scale-125"
        />
      </div>
      <div className="overflow-hidden rounded-2xl w-full col-span-2 row-span-2 md:col-span-1 md:row-span-2 h-full">
        <Image
          src={GalleryImageConstants.image3}
          width={200}
          height={200}
          alt={
            "Vapor Blasting Powder Coating Brown Texture Beige Mesin CBR tanpa Belah"
          }
          className="rounded-2xl object-cover w-full h-full transition-all hover:scale-125"
        />
      </div>
      <div className="overflow-hidden rounded-2xl w-full col-span-2 row-span-1 md:col-span-1 md:row-span-2 h-full">
        <Image
          src={GalleryImageConstants.image4}
          width={200}
          height={200}
          alt={
            "Vapor Blasting Powder Coating Blue Texture Mesin Supra tanpa Belah"
          }
          className="rounded-2xl object-cover w-full h-full transition-all hover:scale-125"
        />
      </div>
    </div>
  );
};


export default GalleryBox;
