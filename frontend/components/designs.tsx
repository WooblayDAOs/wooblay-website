import React from 'react'
import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";

export default function designs() {
  return (
    <main className='bg-white-bg mb-24 pt-24'>
      <div className='flex justify-center items-center p-20 font-titleBold'>
        <h1 className='text-8xl font-bold text-text'>Wooblay</h1>
      </div>
      <div className="flex-col flex justify-center items-center">
        <Tabs disabledKeys={["dashboard", "feed", "tasks", "team", "profile"]} color="primary" classNames={{ tabList: "bg-gray-white p-2", tab: "h-10", tabContent: "text-text pr-6 pl-6", cursor: "border border-text rounded-lg" }} aria-label="Disabled Options">
          <Tab key="explorer" title="Explorer">
            <div className='w-screen flex justify-center mt-6'>
              <Image
                width={900}
                height={500}
                className='mt-8 rounded-xl'
                alt="dashboard"
                src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
              />
            </div>
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
