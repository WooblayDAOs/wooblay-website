export function Community() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground animate-pulse shadow-lg">
              Community
            </div>
            <h2
              className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fadeIn">
              Governance Project
            </h2>
            <p
              className="mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-fadeIn">
              Launch or link a token to a DAO and enable your community to vote on proposals, submit new ideas, and decide the development team and direction.
              This token can be sold pre governance DAO launch to fund the project.
              <br /> <br />
              Implement multisig to still have control of your development DAO but allow the community to still have control.
            </p>
          </div>
          <div className="grid gap-6 animate-fadeInUp">
            <div
              className="rounded-lg border bg-background p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                  <VoteIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Vote on Proposals</h3>
                  <p className="text-muted-foreground">
                    Members can vote on various proposals that impact the DAO's direction and decision-making.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-background p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                  <PresentationIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Submit Proposals</h3>
                  <p className="text-muted-foreground">
                    Members can submit new proposals for the DAO to consider and implement.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="rounded-lg border bg-background p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                  <AwardIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Earn Rewards</h3>
                  <p className="text-muted-foreground">
                    Members who actively participate in the governance process are eligible for additional rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-6 lg:mt-16 animate-fadeInUp">
          <div
            className="rounded-lg border bg-background p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-lg font-semibold">What your community can do</h3>
            <div className="mt-4 grid grid-cols-[auto_1fr] items-start gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                <VoteIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold">Vote on Proposals</h4>
                <p className="text-muted-foreground">
                  Members can vote on various proposals that impact the DAO's direction and decision-making.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-[auto_1fr] items-start gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                <PresentationIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold">Submit Proposals</h4>
                <p className="text-muted-foreground">
                  Members can submit new proposals for the DAO to consider and implement.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-[auto_1fr] items-start gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                <AwardIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold">Earn Rewards</h4>
                <p className="text-muted-foreground">
                  Members who actively participate in the governance process are eligible for additional rewards.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-[auto_1fr] items-start gap-4">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse">
                <RepeatIcon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-semibold">Continuous Cycle</h4>
                <p className="text-muted-foreground">
                  The cycle of voting, proposing, and earning rewards continues, fostering an engaged and active
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

function AwardIcon(props) {
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
        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>)
  );
}


function PresentationIcon(props) {
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
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>)
  );
}


function RepeatIcon(props) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>)
  );
}


function VoteIcon(props) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>)
  );
}