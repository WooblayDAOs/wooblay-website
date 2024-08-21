import React from 'react'
import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";

export default function designs() {
  return (
    <main>
      <h1>Wooblay</h1>
      <div className="flex w-full flex-col">
        <Tabs disabledKeys={["dashboard", "feed", "tasks", "team", "profile"]} aria-label="Disabled Options">
          <Tab key="explorer" title="Explorer">
            <Card>
              <CardBody>
                <Image
                  width={300}
                  alt="Explorer"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="dashboard" title="Dashboard">
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Tab>
          <Tab key="feed" title="Feed">
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Tab>
          <Tab key="tasks" title="Tasks">
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Tab>
          <Tab key="team" title="Team">
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Tab>
          <Tab key="profile" title="Profile">
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </main>
  )
}
