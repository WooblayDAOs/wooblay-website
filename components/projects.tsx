import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function App() {
    let tabs = [
        {
            id: "team",
            label: "Team",
            content: (
                <>
                    <h3>
                        Build a team for your project with dynamic roles and permissions. Collaborate in real-time and distribute rewards how you see fit. We automate most of the project management so you can focus on building.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Startups building teams from the ground up</h3></li>
                        <li><h3>Companies looking to expand their remote workforce</h3></li>
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
                        Launch fundraising campaigns for public goods and innovative projects. Raise capital within the platform through tokenized investments or traditional fundraising.
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
                        Share ownership of the project and its future with contributors, distributing rewards based on their stake and involvement.
                    </h3>
                    <h2 className="mt-4">Potential use cases</h2>
                    <ul className="list-disc pl-6 mt-2">
                        <li><h3>Startups sharing stakes with early contributors</h3></li>
                        <li><h3>Community-driven initiatives with shared outcomes</h3></li>
                        <li><h3>Community developed innovation and protocols</h3></li>
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
                        Automate and outsource tasks, leveraging our community of skilled developers and contributors.
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
        <div>
            <div className="text-left mb-8 p-4 md:p-0 flex justify-center items-center">
                <div>
                    <h1 className="text-4xl">Implement your project, your way.</h1>
                    <p className="text-lg text-gray-600 w-3/4">
                        We provide the tools and infrastructure so that you can shape your project for whatever use case you use Wooblay for.
                    </p>
                </div>
            </div>
            <div className="flex w-full md:justify-center md:items-center flex-col mb-32">
                <Tabs
                    aria-label="Dynamic tabs"
                    radius="full"
                    size="lg"
                    items={tabs}
                >
                    {(item) => (
                        <Tab
                            key={item.id}
                            title={item.label}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-3/4 p-2"
                        >
                            <Card>
                                <CardHeader>{item.label}</CardHeader>
                                <CardBody>{item.content}</CardBody>
                            </Card>
                        </Tab>
                    )}
                </Tabs>
            </div>
        </div>
    );
}