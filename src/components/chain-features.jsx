import Link from "next/link"
import { Card } from "@/components/ui/card"

export function ChainFeatures() {
  return (
    (<div className="flex flex-col items-center justify-center min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div>
                <div
                  className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Innovators</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Effortless Scaling</h2>
                    <p
                      className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our platform is designed to scale seamlessly, ensuring your application can handle even the
                      highest traffic spikes without a hitch.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <BoltIcon className="h-8 w-8 text-primary-foreground" />
                      <h3 className="text-2xl font-bold text-primary-foreground">Instant Scaling</h3>
                      <p className="text-primary-foreground/80">
                        Our platform automatically scales your application to handle sudden traffic spikes, ensuring a
                        seamless user experience.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-secondary to-tertiary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <CpuIcon className="h-8 w-8 text-secondary-foreground" />
                      <h3 className="text-2xl font-bold text-secondary-foreground">Powerful Infrastructure</h3>
                      <p className="text-secondary-foreground/80">
                        Our robust infrastructure ensures your application runs smoothly, even under heavy load, with
                        industry-leading uptime and reliability.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-tertiary to-primary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-tertiary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <LayersIcon className="h-8 w-8 text-tertiary-foreground" />
                      <h3 className="text-2xl font-bold text-tertiary-foreground">Flexible Configuration</h3>
                      <p className="text-tertiary-foreground/80">
                        Customize your application's infrastructure to fit your unique needs, with a wide range of
                        configuration options.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
              <div>
                <div
                  className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For Developers</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blazing-Fast Performance</h2>
                    <p
                      className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our platform is optimized for lightning-fast response times, ensuring your users enjoy a seamless
                      and delightful experience.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-tertiary to-primary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-tertiary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <ZapIcon className="h-8 w-8 text-tertiary-foreground" />
                      <h3 className="text-2xl font-bold text-tertiary-foreground">Rapid Response</h3>
                      <p className="text-tertiary-foreground/80">
                        Our platform delivers lightning-fast response times, ensuring your users enjoy a seamless and
                        high-performance experience.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <RocketIcon className="h-8 w-8 text-primary-foreground" />
                      <h3 className="text-2xl font-bold text-primary-foreground">Optimized for Speed</h3>
                      <p className="text-primary-foreground/80">
                        Our platform is meticulously optimized to deliver lightning-fast performance, ensuring your
                        users experience the best possible response times.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-secondary to-tertiary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <CpuIcon className="h-8 w-8 text-secondary-foreground" />
                      <h3 className="text-2xl font-bold text-secondary-foreground">Powerful Infrastructure</h3>
                      <p className="text-secondary-foreground/80">
                        Our robust infrastructure is designed to deliver lightning-fast response times, ensuring your
                        users enjoy a seamless and high-performance experience.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
              <div>
                <div
                  className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">For You</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ironclad Security</h2>
                    <p
                      className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Our platform is built with security at its core, ensuring your data and your users' information is
                      always protected.
                    </p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-secondary to-tertiary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <LockIcon className="h-8 w-8 text-secondary-foreground" />
                      <h3 className="text-2xl font-bold text-secondary-foreground">Secure by Design</h3>
                      <p className="text-secondary-foreground/80">
                        Our platform is built with security as a top priority, ensuring your data and your users'
                        information is always protected.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-tertiary to-primary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-tertiary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <ShieldIcon className="h-8 w-8 text-tertiary-foreground" />
                      <h3 className="text-2xl font-bold text-tertiary-foreground">Compliance-Ready</h3>
                      <p className="text-tertiary-foreground/80">
                        Our platform is designed to meet the highest security and compliance standards, ensuring your
                        business remains compliant.
                      </p>
                    </div>
                  </Card>
                  <Card
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary p-6 shadow-lg">
                    <div
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary-foreground/10 blur-[100px]" />
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <KeyIcon className="h-8 w-8 text-primary-foreground" />
                      <h3 className="text-2xl font-bold text-primary-foreground">Robust Authentication</h3>
                      <p className="text-primary-foreground/80">
                        Our platform offers advanced authentication features, ensuring your users' accounts are secure
                        and protected.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function BoltIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>)
  );
}


function CpuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>)
  );
}


function KeyIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>)
  );
}


function LayersIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>)
  );
}


function LockIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>)
  );
}


function RocketIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>)
  );
}


function ShieldIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>)
  );
}


function ZapIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>)
  );
}
