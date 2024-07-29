import Link from "next/link"
import Image from "next/image"

export function Dashboard() {
  return (
    (<div className="bg-background text-foreground">
      <header className="container mx-auto py-12 md:py-20 lg:py-28 px-4 md:px-6 mb-0">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Platform Features</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Elevate Your Digital Experience
          </h1>
        </div>
      </header>
      <section className="container mx-auto py-4 md:py-8 lg:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Feature 1"
                width={400}
                height={300}
                className="object-cover w-full h-full" />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold">Seamless Scalability</h3>
              <p className="text-muted-foreground">Effortlessly scale your application to meet growing demand.</p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Feature 2"
                width={400}
                height={300}
                className="object-cover w-full h-full" />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold">Intelligent Insights</h3>
              <p className="text-muted-foreground">Gain deep, real-time insights to drive informed decisions.</p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Feature 3"
                width={400}
                height={300}
                className="object-cover w-full h-full" />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold">Effortless Collaboration</h3>
              <p className="text-muted-foreground">Empower your team with seamless, built-in collaboration tools.</p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Feature 4"
                width={400}
                height={300}
                className="object-cover w-full h-full" />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold">Secure by Design</h3>
              <p className="text-muted-foreground">Safeguard your data with our robust security features.</p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Feature 5"
                width={400}
                height={300}
                className="object-cover w-full h-full" />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold">Personalized Experiences</h3>
              <p className="text-muted-foreground">Deliver tailored content and experiences to your users.</p>
            </div>
          </div>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 ease-in-out">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View</span>
            </Link>
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt="Feature 6"
                width={400}
                height={300}
                className="object-cover w-full h-full" />
            </div>
            <div className="p-4 bg-card">
              <h3 className="text-xl font-bold">Automated Workflows</h3>
              <p className="text-muted-foreground">Streamline your processes with our powerful automation tools.</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container mx-auto py-12 md:py-20 lg:py-28 px-4 md:px-6 bg-muted relative">
        <div className="max-w-3xl mx-auto text-center space-y-4 relative z-10">
          <div
            className="inline-block rounded-lg bg-muted-foreground px-3 py-1 text-sm text-muted">For businesses</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">Join our list of partners</h2>
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
            Experience the power of projects being built on your technology.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Apply now
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}>
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Image src="/splotch.png" alt="Splotch Effect" className="w-full h-full object-cover opacity-25" />
        </div>
      </section>
    </div>)
  );
}
