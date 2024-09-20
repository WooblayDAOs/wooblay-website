import { Card, Chip } from "@nextui-org/react";

import CardGrid from "./card-grid";

export default function FeaturesGrid() {
  return (
    <div>
      <CardGrid
        columns={[
          {
            className: "mt-16",
            cards: [
              <Card className="flex flex-col space-y-4 p-4 w-64">
                <div className="flex flex-row items-center space-x-4">
                  <div className="text-xl">MULTI-CHAIN SUPPORT</div>
                  <Chip>SOON</Chip>
                </div>
                <div className="text-sm">Currently supports Base</div>
              </Card>,
              <Card className="flex flex-col space-y-4 p-4 w-64">
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
              <Card className="flex flex-col space-y-4 p-4 w-64">
                <div className="flex flex-row items-center space-x-4">
                  <div className="text-xl">MULTI-CHAIN SUPPORT</div>
                  <Chip>SOON</Chip>
                </div>
                <div className="text-sm">Currently supports Base</div>
              </Card>,
              <Card className="flex flex-col space-y-4 p-4 w-64">
                <div className="flex flex-row items-center space-x-4">
                  <div className="text-xl">GITHUB INTEGRATION</div>
                </div>
                <div className="text-sm">
                  Get paid to contribute to Github repos and complete tasks
                </div>
              </Card>,
              <Card className="flex flex-col space-y-4 p-4 w-64">
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
              <Card className="flex flex-col space-y-4 p-4 w-64">
                <div className="flex flex-row items-center space-x-4">
                  <div className="text-xl">MULTI-CHAIN SUPPORT</div>
                  <Chip>SOON</Chip>
                </div>
                <div className="text-sm">Currently supports Base</div>
              </Card>,
              <Card className="flex flex-col space-y-4 p-4 w-64">
                <div className="flex flex-row items-center space-x-4">
                  <div className="text-xl">GITHUB INTEGRATION</div>
                </div>
                <div className="text-sm">
                  Get paid to contribute to Github repos and complete tasks
                </div>
              </Card>,
              <Card className="flex flex-col space-y-4 p-4 w-64">
                <div className="flex flex-row items-center space-x-4">
                  <div className="text-xl">GITHUB INTEGRATION</div>
                </div>
                <div className="text-sm">
                  Get paid to contribute to Github repos and complete tasks
                </div>
              </Card>,
            ],
          },
        ]}
      />
    </div>
  );
}
