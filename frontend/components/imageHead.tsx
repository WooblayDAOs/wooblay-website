import React from 'react';

interface ImageHeadProps {
    title: string;
}

export default function ImageHead({ title }: ImageHeadProps) {
    return (
        <div
            className='w-full h-64 bg-cover bg-center flex items-center justify-center'
            style={{ backgroundImage: "url('/gallery.png')" }}
        >
            <h1 className='text-white text-4xl font-bold'>{title}</h1>
        </div>
    );
}