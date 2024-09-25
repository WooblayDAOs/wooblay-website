import { Tabs, Tab, Card, CardBody, CardHeader, Button, Link } from "@nextui-org/react";
import Image from "next/image";

export default function App() {
    let tabs = [
        {
            id: "team",
            label: "Your Team",
            content: (
                <>
                    <h3>
                        Build a team for your project with dynamic roles and permissions. Collaborate in real-time and distribute rewards how you see fit from money to stake. We automate most of the project management so you can focus on building.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Startups building teams from the ground up</h3></li>
                        <li><h3>Companies looking to build community teams or reward their employees dynamically</h3></li>
                    </ul>
                </>
            ),
        },
        {
            id: "dao",
            label: "Decentralised",
            content: (
                <>
                    <h3>
                        Add a governance layer to your team and let the community vote on who joins, who leaves, and what direction the project takes. Use on-chain transparence and voting to give your project autonomy while maintaining control over team dynamics.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Open-source projects seeking decentralized governance</h3></li>
                        <li><h3>Projects aiming for transparent, community-driven development</h3></li>
                        <li><h3>Studios wanting sub-projects led by the community</h3></li>
                    </ul>
                </>
            ),
        },
        {
            id: "fundraiser",
            label: "Fundraiser",
            content: (
                <>
                    <h3>
                        Launch fundraising campaigns for public goods and innovative projects. Raise capital within the platform through token-based investments or traditional fundraising.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Social enterprises focused on public goods</h3></li>
                        <li><h3>Open-source projects needing funding to grow</h3></li>
                        <li><h3>Nonprofits or charities seeking transparent fundraising solutions</h3></li>
                    </ul>
                </>
            ),
        },
        {
            id: "research",
            label: "Research",
            content: (
                <>
                    <h3>
                        Organise research projects that focus on collaboration, transparency, and innovation. Manage breakthroughs, reward researchers based on contributions, and securely distribute funding.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Scientists, academics, and research groups</h3></li>
                        <li><h3>Open science projects seeking collaboration and funding</h3></li>
                        <li><h3>Research & Development collaborations</h3></li>
                    </ul>
                </>
            ),
        },
        {
            id: "stake",
            label: "Stake-based",
            content: (
                <>
                    <h3>
                        Share ownership of the project with contributors, distributing stake based on their involvement. Each user getting a % of the treasury based on their contributions determined by AI suggestions and automation.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Startups sharing stakes with early contributors</h3></li>
                        <li><h3>Companies to incentivise their team with stake rewards</h3></li>
                        <li><h3>Community driven projects where stake is dynamically shared</h3></li>
                    </ul>
                </>
            ),
        },
        {
            id: "tasks",
            label: "Task-based",
            content: (
                <>
                    <h3>
                        Automate and outsource tasks, leveraging our community of skilled developers and contributors. Simply put a task up for grabs, set a reward, and watch as the community or your team completes it.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Founders looking to scale their project quickly</h3></li>
                        <li><h3>Organizations that need to delegate specific tasks to specialists</h3></li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white relative">
            <div className="pb-32 flex flex-col justify-center items-center">
                <div className="flex w-full md:w-2/3 md:justify-center md:items-center flex-col">
                    <Tabs
                        aria-label="Dynamic tabs"
                        radius="full"
                        size="lg"
                        items={tabs}
                        color="secondary"
                        variant="underlined"
                        classNames={{
                            tabContent: "text-black"
                        }}
                    >
                        {(item) => (
                            <Tab
                                key={item.id}
                                title={item.label}
                                className="w-full p-2"
                            >
                                <Card className="bg-white text-black">
                                    <div className="flex flex-col md:flex-row">
                                        <div>
                                            <CardHeader className="m-4 text-2xl font-titleBold rounded-lg bg-gradient-to-r from-black to-white text-white p-2 w-1/2">{item.label}</CardHeader>
                                            <CardBody className="m-4 w-6/7">{item.content}</CardBody>
                                        </div>
                                        <Image src="/yingyang.webp" alt="yy" width={350} height={200} />
                                    </div>
                                </Card>
                            </Tab>
                        )}
                    </Tabs>
                </div>
                <div className="md:w-1/2 p-2 md:flex gap-4 mt-12">
                    <Card className="bg-white text-black">
                        <div className="p-6 shadow-lg shadow-lg">
                            <h1 className="text-2xl rounded-lg bg-gradient-to-r from-black to-white text-white p-2">Pitch Deck</h1>
                            <h3 className="mt-2">A quick read and summary of our ambitions, team, and project.</h3>
                            <div className="flex justify-center">
                                <Button
                                    isExternal
                                    as={Link}
                                    className="text-sm text-black font-bold mt-4 shadow-lg transform transition-transform hover:scale-105 w-1/2 m-4"
                                    color="primary"
                                    href={"https://forms.gle/h6rLLHjtncVV46pi6"}
                                    radius="sm"
                                >
                                    View Pitch Deck
                                </Button>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-white text-black shadow-lg mt-4 md:mt-0">
                        <div className="p-6">
                            <h1 className="text-2xl rounded-lg bg-gradient-to-r from-black to-white text-white p-2">Whitepaper</h1>
                            <h3 className="mt-2">A read and summary of our ambitions, team, and project.</h3>
                            <div className="flex justify-center">
                                <Button
                                    isExternal
                                    as={Link}
                                    className="text-sm text-black font-bold mt-4 shadow-lg transform transition-transform hover:scale-105 w-1/2 m-4"
                                    color="primary"
                                    href={"https://forms.gle/h6rLLHjtncVV46pi6"}
                                    radius="sm"
                                >
                                    View Whitepaper
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}