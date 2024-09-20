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
    <div
      style={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
      }}
    >
      <Image
        alt="Image"
        src={imageUrl}
        style={{ width: "100%", height: "auto" }}
      />
      <div style={{ width: "50%", padding: "0 20px" }}>
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextNImage;
