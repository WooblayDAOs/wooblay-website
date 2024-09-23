import React from "react";
import { Image } from "@nextui-org/react";

interface TextNImageProps {
  text: string;
  heading?: string;
  imageUrl: string;
  reverse?: boolean;
}

const TextNImage: React.FC<TextNImageProps> = ({
  text,
  heading,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div>
      <div
        className={`hidden md:flex ${reverse ? "flex-row-reverse" : "flex-row"} items-center`}
      >
        <Image
          alt="Image"
          src={imageUrl}
          className="w-full h-auto"
        />
        <div className="w-full md:w-1/2 p-4 md:p-8">
          {heading && <h1 className="md:text-xl text-sm">{heading}</h1>}
          <p className="sm:text-lg text-xs">{text}</p>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {heading && <h1 className="text-center text-lg p-4">{heading}</h1>}
        <div className="flex flex-col items-center">
          <div className="p-4">
            <p className="text-xs">{text}</p>
          </div>
          <Image
            alt="Image"
            src={imageUrl}
            className="h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TextNImage;