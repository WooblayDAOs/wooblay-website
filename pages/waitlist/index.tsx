// pages/waitlist.tsx

import React, { useState } from 'react';
import { Input, Checkbox, CheckboxGroup, Button, Textarea, Radio, RadioGroup } from '@nextui-org/react';

const WaitlistPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [roles, setRoles] = useState<string[]>([]);
    const [usagePlan, setUsagePlan] = useState('');
    const [hasIdea, setHasIdea] = useState('');
    const [ideaDescription, setIdeaDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prepare data to send
        const data = {
            email,
            identifer: "ALPHA#WAITLIST",
            roles,
            usagePlan,
            hasIdea,
            ideaDescription,
        };

        try {
            // Send data to backend API or external service
            await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });


            alert('Thank you for joining the waitlist!');


            // Clear the form
            setEmail('');
            setRoles([]);
            setUsagePlan('');
            setHasIdea('');
            setIdeaDescription('');
        } catch (error) {
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Join the Wooblay Waitlist</h1>
            <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-6">
                    <Input
                        fullWidth
                        required
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                    />
                </div>

                {/* Role Selection */}
                <div className="mb-6">
                    <CheckboxGroup
                        label="What is your role?"
                        orientation="horizontal"
                        color="primary"
                        value={roles}
                        onChange={setRoles}
                    >
                        <Checkbox value="developer">Developer</Checkbox>
                        <Checkbox value="designer">Designer</Checkbox>
                        <Checkbox value="project_manager">Project Manager</Checkbox>
                        <Checkbox value="entrepreneur">Entrepreneur</Checkbox>
                        <Checkbox value="other">Other</Checkbox>
                    </CheckboxGroup>
                </div>

                {/* Usage Plan */}
                <div className="mb-6">
                    <Textarea
                        fullWidth
                        label="What do you plan on using the platform for?"
                        placeholder="Tell us how you plan to use Wooblay..."
                        value={usagePlan}
                        onChange={(e) => setUsagePlan(e.target.value)}
                        rows={4}
                    />
                </div>

                {/* Idea Existence */}
                <div className="mb-6">
                    <RadioGroup
                        label="Do you currently have an idea you want to build?"
                        orientation="horizontal"
                        value={hasIdea}
                        onChange={(e) => setHasIdea(e.target.value)}
                    >
                        <Radio value="yes">Yes</Radio>
                        <Radio value="no">No</Radio>
                    </RadioGroup>
                </div>

                {/* Idea Description */}
                {hasIdea === 'yes' && (
                    <div className="mb-6">
                        <Textarea
                            fullWidth
                            label="Tell us about your idea"
                            placeholder="Briefly describe your idea..."
                            value={ideaDescription}
                            onChange={(e) => setIdeaDescription(e.target.value)}
                            rows={4}
                        />
                    </div>
                )}

                {/* Submit Button */}
                <Button type="submit" color="primary" size="lg">
                    Join Waitlist
                </Button>
            </form>
        </div>
    );
};

export default WaitlistPage;