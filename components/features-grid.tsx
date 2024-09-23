import { Card, Chip } from "@nextui-org/react";

import CardGrid from "./card-grid";

export default function FeaturesGrid() {
  return (
    <div className="relative">

      {/* Overall Header */}
      <div className="text-left mb-8 p-4 md:p-0 flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold">Innovate all in one place.</h1>
          <p className="text-lg text-gray-600 w-3/4">Explore the cutting-edge features we offer to streamline your workflow and enhance development.</p>
        </div>
      </div>
      <div className="flex justify-center items-center mb-32">
        <div className="hidden md:flex">
          <CardGrid
            columns={[
              {
                className: "mt-16",
                cards: [
                  <Card
                    key="multikey9"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">MULTI-CHAIN SUPPORT</div>
                      <Chip>SOON</Chip>
                    </div>
                    <div className="text-sm">Currently supports Base</div>
                  </Card>,
                  <Card
                    key="multikey8"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">GITHUB INTEGRATION</div>
                    </div>
                    <div className="text-sm">
                      Get paid to contribute to Github repos and complete tasks
                    </div>
                  </Card>,
                ],
              },
              {
                className: "mt-32",
                cards: [
                  <Card
                    key="multikey6"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">MULTI-CHAIN SUPPORT</div>
                      <Chip>SOON</Chip>
                    </div>
                    <div className="text-sm">Currently supports Base</div>
                  </Card>,
                  <Card
                    key="multikey5"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">GITHUB INTEGRATION</div>
                    </div>
                    <div className="text-sm">
                      Get paid to contribute to Github repos and complete tasks
                    </div>
                  </Card>,
                  <Card
                    key="multikey4"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">GITHUB INTEGRATION</div>
                    </div>
                    <div className="text-sm">
                      Get paid to contribute to Github repos and complete tasks
                    </div>
                  </Card>,
                ],
              },
              {
                cards: [
                  <Card key="multikey" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">MULTI-CHAIN SUPPORT</div>
                      <Chip>SOON</Chip>
                    </div>
                    <div className="text-sm">Currently supports Base</div>
                  </Card>,
                  <Card
                    key="multikey1"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">GITHUB INTEGRATION</div>
                    </div>
                    <div className="text-sm">
                      Get paid to contribute to Github repos and complete tasks
                    </div>
                  </Card>,
                  <Card
                    key="multikey3"
                    className="flex flex-col space-y-4 p-4 w-64"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">GITHUB INTEGRATION</div>
                    </div>
                    <div className="text-sm">
                      Get paid to contribute to Github repos and complete tasks
                    </div>
                  </Card>
                ],
              },
            ]}
          />
        </div>
        {/* Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-2">
          <Card className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">MULTI-CHAIN SUPPORT</div>
              <Chip>SOON</Chip>
            </div>
            <div className="text-sm">Currently supports Base</div>
          </Card>

          <Card className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">GITHUB INTEGRATION</div>
            </div>
            <div className="text-sm">
              Get paid to contribute to Github repos and complete tasks
            </div>
          </Card>

          <Card className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">MULTI-CHAIN SUPPORT</div>
              <Chip>SOON</Chip>
            </div>
            <div className="text-sm">Currently supports Base</div>
          </Card>

          <Card className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">GITHUB INTEGRATION</div>
            </div>
            <div className="text-sm">
              Get paid to contribute to Github repos and complete tasks
            </div>
          </Card>

          <Card className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">GITHUB INTEGRATION</div>
            </div>
            <div className="text-sm">
              Get paid to contribute to Github repos and complete tasks
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}