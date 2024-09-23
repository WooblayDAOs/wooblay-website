import React from "react";
import { Card } from "@nextui-org/react";

interface CallableCardProps {
    text: string;
}

export default function CallableCard({ text }: CallableCardProps) {
    return (
        <Card className="bg-[#4DFFFF] text-black rounded-lg p-2 w-24 shadow-black shadow-lg absolute top-6 left-6">
            <p className="font-bold text-xs whitespace-nowrap">{text}</p>
        </Card>
    );
}