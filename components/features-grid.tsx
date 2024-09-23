import { Card, Chip } from "@nextui-org/react";
import CardGrid from "./card-grid";

export default function FeaturesGrid() {
  return (
    <div className="relative">
      {/* Overall Header */}
      <div className="text-left mb-8 p-4 md:p-0 flex justify-center items-center">
        <div>
          <h1 className="text-4xl font-bold">Innovate all in one place.</h1>
          <p className="text-lg text-gray-600 w-3/4">
            Explore the cutting-edge features we offer to streamline your workflow, enhance development, and unlock your project&apos;s potential.
          </p>
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
                    className="flex flex-col space-y-4 p-4 w-64 mb-4 text-white bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/chain.webp')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl font-bold">On-Chain Task Board</div>
                      <Chip>NEW</Chip>
                    </div>
                    <div className="text-sm">
                      A fully decentralized task board where users can submit, claim, and complete tasks. Verified on-chain, ensuring transparency and trust for contributors and project owners.
                    </div>
                  </Card>,
                  <Card key="multikey5" className="flex flex-col space-y-4 p-4 w-64">
                    <img src="/tracking.webp" alt="Off-Platform Tracking" className="h-40 bg-cover bg-center rounded" />
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Off-Platform Tracking</div>
                      <Chip>NEW</Chip>
                    </div>
                    <div className="text-sm">
                      Automatically track and reward contributions from linked GitHub or Figma repositories. Whether it&apos;s designing or developing, track progress seamlessly and ensure fair rewards.
                    </div>
                  </Card>,
                  <Card key="multikey7" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Private Repositories</div>
                      <Chip>NEW</Chip>
                    </div>
                    <div className="text-sm">
                      Manage sensitive projects securely with private repositories. Grant temporary access to contributors and ensure control over proprietary data.
                    </div>
                  </Card>,
                ],
              },
              {
                className: "mt-32",
                cards: [
                  <Card key="multikey6" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Extension Marketplace</div>
                      <Chip>SOON</Chip>
                    </div>
                    <div className="text-sm">
                      Explore or create extensions to add custom functionalities to your project. Build tools, integrate APIs, and enhance collaboration through community-built extensions.
                    </div>
                  </Card>,
                  <Card
                    key="multikey9"
                    className="flex flex-col space-y-4 p-4 w-64 mb-4 text-white bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/penguins.webp')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl font-bold">AI Consultant</div>
                      <Chip>SOON</Chip>
                    </div>
                    <div className="text-sm">
                      An AI assistant trained on your project data to provide real-time, personalized recommendations, improving efficiency in task completion and development decisions.
                    </div>
                  </Card>,
                  <Card key="multikey4" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Income by Impact</div>
                      <Chip>VERY SOON</Chip>
                    </div>
                    <div className="text-sm">
                      Let AI optimize payouts for your team based on task completion and contributions. Move away from traditional fixed salaries, and ensure fair, dynamic compensation that matches work done.
                    </div>
                  </Card>,
                  <Card
                    key="multikey11"
                    className="flex flex-col space-y-4 p-4 w-64 mb-4 text-white bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/woohoo.webp')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Reputation</div>
                      <Chip>INCOMING</Chip>
                    </div>
                    <div className="text-sm">
                      Create a dynamic portfolio that highlights your contributions and earns you reputation tokens. These tokens not only showcase your value but can also be exchanged for financial rewards and are used to unlock exclusive tasks, increase your earnings, and qualify for top-tier positions.
                    </div>
                  </Card>,
                ],
              },
              {
                cards: [
                  <Card key="multikey" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Multi-Chain Support</div>
                      <Chip>SOON</Chip>
                    </div>
                    <div className="text-sm">
                      Expand your project across multiple chains, ensuring interoperability. Currently supports Base, with more chains to come.
                    </div>
                  </Card>,
                  <Card key="multikey1" className="flex flex-col space-y-4 p-4 w-64">
                    <div
                      className="h-40 bg-cover bg-center rounded"
                      style={{
                        backgroundImage: "url('/confidence.webp')",
                      }}
                    ></div>
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Collaborative Tools</div>
                      <Chip>NEW</Chip>
                    </div>
                    <div className="text-sm">
                      Collaborate with your team in real-time, assign tasks, track progress, and ensure smooth communication across all departments using built-in collaborative features.
                    </div>
                  </Card>,
                  <Card
                    key="multikey9"
                    className="flex flex-col space-y-4 p-4 w-64 mb-4 text-white bg-cover bg-center"
                    style={{
                      backgroundImage: "url('/money.webp')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl font-bold">Simple Withdraws</div>
                      <Chip>VERY SOON</Chip>
                    </div>
                    <div className="text-sm">
                      Seamlessly move your funds in and out of the platform with just a few clicks. Whether you&apos;re receiving payments or transferring them to your bank account, our easy withdrawal process ensures you get your money quickly and securely.
                    </div>
                  </Card>,
                ],
              },
            ]}
          />
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden p-2">
          <Card
            key="multikey9"
            className="flex flex-col space-y-4 p-4 w-full mb-4 text-white bg-cover bg-center"
            style={{
              backgroundImage: "url('/chain.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl font-bold">On-Chain Task Board</div>
              <Chip>NEW</Chip>
            </div>
            <div className="text-sm">
              A fully decentralized task board where users can submit, claim, and complete tasks. Verified on-chain, ensuring transparency and trust for contributors and project owners.
            </div>
          </Card>
          <Card key="multikey5" className="flex flex-col space-y-4 p-4 w-full">
            <div
              className="h-40 bg-cover bg-center rounded"
              style={{
                backgroundImage: "url('/tracking.webp')",
              }}
            ></div>
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Off-Platform Tracking</div>
            </div>
            <div className="text-sm">
              Automatically track and reward contributions from linked GitHub or Figma repositories. Whether it&apos;s designing or developing, track progress seamlessly and ensure fair rewards.
            </div>
          </Card>
          <Card key="multikey7" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Private Repositories</div>
            </div>
            <div className="text-sm">
              Manage sensitive projects securely with private repositories. Grant temporary access to contributors and ensure control over proprietary data.
            </div>
          </Card>
          <Card key="multikey6" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Extension Marketplace</div>
              <Chip>SOON</Chip>
            </div>
            <div className="text-sm">
              Explore or create extensions to add custom functionalities to your project. Build tools, integrate APIs, and enhance collaboration through community-built extensions.
            </div>
          </Card>
          <Card
            key="multikey9"
            className="flex flex-col space-y-4 p-4 w-full mb-4 text-white bg-cover bg-center"
            style={{
              backgroundImage: "url('/penguins.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl font-bold">AI Consultant</div>
              <Chip>SOON</Chip>
            </div>
            <div className="text-sm">
              An AI assistant trained on your project data to provide real-time, personalized recommendations, improving efficiency in task completion and development decisions.
            </div>
          </Card>
          <Card
            key="multikey11"
            className="flex flex-col space-y-4 p-4 w-full mb-4 text-white bg-cover bg-center"
            style={{
              backgroundImage: "url('/woohoo.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl font-bold">Reputation</div>
              <Chip>INCOMING</Chip>
            </div>
            <div className="text-sm">
              Create a dynamic portfolio that highlights your contributions and earns you reputation tokens. These tokens not only showcase your value but can also be exchanged for financial rewards and are used to unlock exclusive tasks, increase your earnings, and qualify for top-tier positions.
            </div>
          </Card>
          <Card key="multikey4" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Auto-Payouts</div>
            </div>
            <div className="text-sm">
              Automatically distribute payments to contributors once tasks are completed and verified. Our auto-payout system ensures timely payments without manual intervention.
            </div>
          </Card>
          <Card
            key="multikey12"
            className="flex flex-col space-y-4 p-4 w-full mb-4 text-white bg-cover bg-center"
            style={{
              backgroundImage: "url('/money.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl font-bold">Simple Withdraws</div>
              <Chip>INCOMING</Chip>
            </div>
            <div className="text-sm">
              Seamlessly move your funds in and out of the platform with just a few clicks. Whether you&apos;re receiving payments or transferring them to your bank account, our easy withdrawal process ensures you get your money quickly and securely.
            </div>
          </Card>
          <Card key="multikey" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Multi-Chain Support</div>
              <Chip>SOON</Chip>
            </div>
            <div className="text-sm">
              Expand your project across multiple chains, ensuring interoperability. Currently supports Base, with more chains to come.
            </div>
          </Card>
          <Card key="multikey1" className="flex flex-col space-y-4 p-4 w-full">
            <div
              className="h-40 bg-cover bg-center rounded"
              style={{
                backgroundImage: "url('/confidence.webp')",
              }}
            ></div>
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Collaborative Tools</div>
            </div>
            <div className="text-sm">
              Collaborate with your team in real-time, assign tasks, track progress, and ensure smooth communication across all departments using built-in collaborative features.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}