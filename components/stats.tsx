import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function Stats() {
  return (
    <div className="flex justify-center items-center p-4 sm:p-0">
      <Card className="rounded rounded-2xl border border-white bg-gray-900 w-full sm:w-auto">
        <CardBody className="flex gap-4 p-8 sm:p-16">
          <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-16 justify-between">
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-md text-gray-500">TOTAL EARNED</p>
              <h1 className="text-4xl sm:text-6xl">$103B+</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-md text-gray-500">
                TASKS COMPLETED
              </p>
              <h1 className="text-4xl sm:text-6xl">105M+</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-md text-gray-500">CONTRIBUTORS</p>
              <h1 className="text-4xl sm:text-6xl">15M+</h1>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm sm:text-md text-gray-500">
                TEAM MEMBERS FOUND
              </p>
              <h1 className="text-4xl sm:text-6xl">1.5M+</h1>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
