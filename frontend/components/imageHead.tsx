import React from 'react';
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

interface ImageHeadProps {
    title: string;
    textBlack?: boolean;
    textLarger?: boolean;
    description?: string;
    backgroundImage?: string;
    gradient?: string;
    isFullHeight?: boolean;
    margin?: boolean;
    rounded?: boolean;
    button?: boolean;
    link?: string;
}

export default function ImageHead({
    title,
    textBlack = false,
    textLarger = false,
    description,
    backgroundImage,
    gradient,
    isFullHeight = false,
    margin = false,
    rounded = false,
    button = false,
    link,
}: ImageHeadProps) {
    return (
        <div className={`w-full flex justify-center ${textBlack ? 'text-black' : 'text-white'} bg-black`}>
            <div
                className={`w-full bg-cover bg-center flex items-center justify-center ${rounded ? 'rounded-[20px]' : ''} ${margin ? 'mx-6' : ''}`}
                style={{
                    backgroundImage: backgroundImage
                        ? `${gradient ? gradient + ',' : ''} url('${backgroundImage}')`
                        : gradient,
                    height: isFullHeight ? '85vh' : '35vh',
                    maxHeight: '90vh',
                }}
            >
                <div className="text-center flex flex-col items-center p-4">
                    <h1 className={`${textLarger ? 'text-6xl' : 'text-4xl'} font-interTextBold`}>{title}</h1>
                    {description && <p className="font-interText mt-4 w-3/5 text-center">{description}</p>}
                    {button && <Button
                        isExternal
                        as={Link}
                        className="text-2xl font-workSans mt-16 pl-16 pr-16 h-16 border border-black"
                        href={link}
                        radius="lg"
                        color="primary"
                        size="lg"
                    >
                        Join waitlist now
                    </Button>}
                </div>
            </div>
        </div>
    );
}