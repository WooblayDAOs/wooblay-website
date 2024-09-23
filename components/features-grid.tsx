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
                      A task board where you can create tasks with contributor requirements. Fully transparent for all parties.
                    </div>
                  </Card>,
                  <Card key="multikey5" className="flex flex-col space-y-4 p-4 w-64">
                    <div
                      className="h-40 bg-cover bg-center rounded"
                      style={{
                        backgroundImage: "url('/tracking.webp')",
                      }}
                    ></div>
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Off-Platform Tracking</div>
                      <Chip>NEW</Chip>
                    </div>
                    <div className="text-sm">
                      Automatically track and reward contributions from linked GitHub, Figma and more repositories.
                    </div>
                  </Card>,
                  <Card key="multikey7" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Private Repositories</div>
                      <Chip>NEW</Chip>
                    </div>
                    <div className="text-sm">
                      Projects with private repositories can grant temporary access to contributors to ensure security.
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
                      <Chip>LATER</Chip>
                    </div>
                    <div className="text-sm">
                      Use or create extensions to add custom functionalities and enhancements to projects.
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
                      <div className="text-xl font-bold">AI Agents</div>
                      <Chip>LATER</Chip>
                    </div>
                    <div className="text-sm">
                      Fine tuned AI trained on your project data to provide personalised recommendations and complete tasks.
                    </div>
                  </Card>,
                  <Card key="multikey4" className="flex flex-col space-y-4 p-4 w-64">
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Contribution Salaries</div>
                      <Chip>INCOMING</Chip>
                    </div>
                    <div className="text-sm">
                      Automated payouts based on team contributions. Ensuring fair, dynamic compensation that matches work done.
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
                      Expand your project across multiple chains, ensuring interoperability.
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
                      Collaborate and communicate with your team, assign tasks and track progress using built-in collaborative features.
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
                      <Chip>INCOMING</Chip>
                    </div>
                    <div className="text-sm">
                      Securly and seamlessly move your funds in and out of the platform directly to your external wallet or bank account.
                    </div>
                  </Card>,
                ],
              },
              {
                className: "mt-32",
                cards: [
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
                      Create a dynamic portfolio and earn reputation showcasing your value and earn financial rewards. Unlock exclusive tasks and qualify for top-tier positions.
                    </div>
                  </Card>,
                  <Card
                    key="multikey12"
                    className="flex flex-col space-y-4 p-4 w-64 mb-4"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Project Web</div>
                      <Chip>LATER</Chip>
                    </div>
                    <div className="text-sm">
                      Launch sub-projects with assigned resources and team members, or make it entirely community-led, expand and innovate without limits.
                    </div>
                  </Card>,

                  <Card
                    key="multikey13"
                    className="flex flex-col space-y-4 p-4 w-64 mb-4"
                  >
                    <div className="flex flex-row items-center space-x-4">
                      <div className="text-xl">Project Bounties</div>
                      <Chip>LATER</Chip>
                    </div>
                    <div className="text-sm">
                      Launch using a project bounty to kickstart your new initiative with initial funds and resources.
                    </div>
                  </Card>
                ]
              }
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
              A task board where you can create tasks with contributor requirements. Fully transparent for all parties.
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
              <Chip>NEW</Chip>
            </div>
            <div className="text-sm">
              Automatically track and reward contributions from linked GitHub, Figma and more repositories.
            </div>
          </Card>
          <Card key="multikey4" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Contribution Salaries</div>
              <Chip>INCOMING</Chip>
            </div>
            <div className="text-sm">
              Automated payouts based on team contributions. Ensuring fair, dynamic compensation that matches work done.
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
              Securly and seamlessly move your funds in and out of the platform directly to your external wallet or bank account.
            </div>
          </Card>
          <Card key="multikey7" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Private Repositories</div>
              <Chip>NEW</Chip>
            </div>
            <div className="text-sm">
              Projects with private repositories can grant temporary access to contributors to ensure security.
            </div>
          </Card>
          <Card key="multikey6" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Extension Marketplace</div>
              <Chip>LATER</Chip>
            </div>
            <div className="text-sm">
              Use or create extensions to add custom functionalities and enhancements to projects.
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
              <div className="text-xl font-bold">AI Agents</div>
              <Chip>LATER</Chip>
            </div>
            <div className="text-sm">
              Fine tuned AI trained on your project data to provide personalised recommendations and complete tasks.
            </div>
          </Card>
          <Card key="multikey" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Multi-Chain Support</div>
              <Chip>SOON</Chip>
            </div>
            <div className="text-sm">
              Expand your project across multiple chains, ensuring interoperability.
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
              <Chip>NEW</Chip>
            </div>
            <div className="text-sm">
              Collaborate and communicate with your team, assign tasks and track progress using built-in collaborative features.
            </div>
          </Card>
          <Card key="multikey12" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Project Web</div>
              <Chip>LATER</Chip>
            </div>
            <div className="text-sm">
              Launch sub-projects with assigned resources and team members, or make it entirely community-led, expand and innovate without limits.
            </div>
          </Card>
          <Card key="multikey13" className="flex flex-col space-y-4 p-4 w-full">
            <div className="flex flex-row items-center space-x-4">
              <div className="text-xl">Project Bounties</div>
              <Chip>LATER</Chip>
            </div>
            <div className="text-sm">
              Launch using a project bounty to kickstart your new initiative with initial funds and resources.
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
              Create a dynamic portfolio and earn reputation showcasing your value and earn financial rewards. Unlock exclusive tasks and qualify for top-tier positions.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}