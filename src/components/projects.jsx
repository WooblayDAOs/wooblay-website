import { Button } from "./ui/button"

export function Projects() {
  return (
    (<section
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-primary-foreground">
      <div
        className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-3">
            <h2
              className="text-4xl font-bold tracking-tighter text-primary-foreground sm:text-5xl md:text-6xl">
              Powerful Project Structure
            </h2>
            <p
              className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock the full potential of your project with our modular and scalable structure.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <div
            className="rounded-lg bg-primary-foreground/10 p-4 text-center transition-all hover:scale-105 hover:bg-primary-foreground/20">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <PuzzleIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-primary-foreground">Dynamic permissions</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Build a hierarchy of team members with different permissions and roles to manage the project.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 text-primary-foreground hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>
          <div
            className="rounded-lg bg-primary-foreground/10 p-4 text-center transition-all hover:scale-105 hover:bg-primary-foreground/20">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <LayersIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-primary-foreground">Automation</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">You can focus on development as all activity is tracked on-chain making rewarding and security automatic.</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 text-primary-foreground hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>
          <div
            className="rounded-lg bg-primary-foreground/10 p-4 text-center transition-all hover:scale-105 hover:bg-primary-foreground/20">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <BoltIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-primary-foreground">Project Web</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Create a sub-project with a focused team and resources, which can govern itself or by the overarching project.</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 text-primary-foreground hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>
          <div
            className="rounded-lg bg-primary-foreground/10 p-4 text-center transition-all hover:scale-105 hover:bg-primary-foreground/20">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
              <CogIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-primary-foreground">Extensions</h3>
            <p className="mt-2 text-sm text-primary-foreground/80">Enhance your project with extensions which upgrade the operation, either made by us or the community.</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-4 text-primary-foreground hover:bg-primary-foreground/20">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>)
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


function CogIcon(props) {
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
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
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


function PuzzleIcon(props) {
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
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>)
  );
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
