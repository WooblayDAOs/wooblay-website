import React from "react";

import { FaUsers, FaGavel, FaProjectDiagram, FaTools } from "react-icons/fa";

export default function Show() {
    return (
        <div className="bg-black text-white py-32 px-8 font-interText">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl font-interTextBold mb-4">Make your impact.</h1>
                <p className="text-lg leading-relaxed">
                    Contribute your part or maximize your projects potential by
                    leveraging integrated tools for strategic growth, efficient
                    operations, and seamless collaboration.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-8">
                    <div>
                        <FaUsers className="text-4xl text-primary mb-2 text-white" />
                        <h2 className="text-2xl font-interTextBold mb-2">
                            Assemble Your Dream Team
                        </h2>
                        <p className="leading-relaxed">
                            Seamlessly structure roles and release positions to find
                            collaborators. Build a community around your project.
                        </p>
                    </div>
                    <div>
                        <FaGavel className="text-4xl text-primary mb-2 text-white" />
                        <h2 className="text-2xl font-interTextBold mb-2">
                            Lead with Collaborative Governance
                        </h2>
                        <p className="leading-relaxed">
                            Give power to your people through concise, collaborative
                            decision-making frameworks. Build a web of projects and have each
                            impact each other.
                        </p>
                    </div>
                </div>
                <div className="space-y-8">
                    <div>
                        <FaProjectDiagram className="text-4xl text-primary mb-2 text-white" />
                        <h2 className="text-2xl font-interTextBold mb-2">
                            Project Management
                        </h2>
                        <p className="leading-relaxed">
                            Effectively manage your project with robust tooling, raise funds,
                            and distribute tasks to the community.
                        </p>
                    </div>
                    <div>
                        <FaTools className="text-4xl text-primary mb-2 text-white" />
                        <h2 className="text-2xl font-interTextBold mb-2">
                            Efficient Operations
                        </h2>
                        <p className="leading-relaxed">
                            Reward contributors and track development automatically with our
                            extensions. Create project bounties and sub-projects to jumpstart
                            new innovators.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
