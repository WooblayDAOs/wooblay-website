<template>
<div class="container mx-auto px-4 pt-28 mb-24">
    <!-- Card with text on the left and image on the right -->
    <div class="flex shadow-lg rounded-lg p-6 mb-6 border">
        <div class="w-1/2 mr-20">
            <h2 class="text-xl text-violet-400 font-bold mb-2">Who we are</h2>
            <p>At Wooblay, we are driven by a singular vision: to empower individuals and communities to build projects that catalyze positive change in the world. We believe that collaboration, when done right, has the power to unlock new possibilities and shape a brighter future for generations to come.
<br><br>
Our Mission is to democratize innovation and foster a culture of collective creativity. We envision a world where every idea, no matter how big or small, has the opportunity to flourish and make a meaningful impact. Through our platform, we provide the tools, resources, and support needed to turn visions into reality.
<br><br>
We are a diverse team of innovators, technologists, and dreamers united by a common purpose: to make a difference. Our team brings together expertise from various fields, including blockchain technology, project management, community building, and more. Together, we are committed to building a platform that empowers individuals to unleash their potential and drive positive change in their communities.
            </p>
        </div>
        <div class="w-1/2">
            <img src="/lighgt.webp" alt="Documentation Image" class="w-full h-auto">
        </div>
    </div>

    <div class="flex flex-wrap justify-center mt-16">
        <div class="w-full md:w-1/2">
            <div class="w-3/4 shadow-lg rounded-lg p-6 mb-6 border border-sky-400 hover:bg-sky-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <h2 class="text-xl font-bold mb-2">Decentralized Projects</h2>
                <hr class="border-gray-300 my-2">
                <p>
                    Our decentralized projects are fully customizable and accessible to all. Whether you're an individual with a groundbreaking idea or a team looking to make an impact, our platform provides the framework for bringing projects to life.
                </p>
            </div>
            <div class="w-3/4 shadow-lg rounded-lg p-6 mb-6 border border-lime-400 hover:bg-lime-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <h2 class="text-xl font-bold mb-2">Transparency</h2>
                <hr class="border-gray-300 my-2">
                <p>
                    Transparency is at the core of our platform. Every decision within decentralized projects is made democratically, with each participant having an equal voice and voting rights. This ensures fairness, accountability, and inclusivity in project management.
                </p>
            </div>
            <div class="w-3/4 shadow-lg rounded-lg p-6 mb-6 border border-violet-500 hover:bg-violet-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <h2 class="text-xl font-bold mb-2">Rewarding Participation</h2>
                <hr class="border-gray-300 my-2">
                <p>
                    We believe in rewarding active participation. Our platform automatically compensates contributors for their work within decentralized projects, ensuring that everyone is fairly rewarded for their contributions.
                </p>
            </div>
        </div>
        <div class="w-full md:w-1/2">
            <div class="w-3/4 shadow-lg rounded-lg p-6 mb-6 border border-lime-400 hover:bg-lime-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <h2 class="text-xl font-bold mb-2">Supporter Opportunities</h2>
                <hr class="border-gray-300 my-2">
                <p>
                    Through our supporters, we provide users with access to cutting-edge technology, resources, and potential seed funding opportunities. These partnerships enable projects to thrive and reach their full potential.
                </p>
            </div>
            <div class="w-3/4 shadow-lg rounded-lg p-6 mb-6 border border-violet-400 hover:bg-violet-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <h2 class="text-xl font-bold mb-2">Deep Analytics</h2>
                <hr class="border-gray-300 my-2">
                <p>
                    Our platform offers deep analytics to track project performance and identify areas for improvement. These insights empower users to make informed decisions and drive continuous innovation.
                </p>
            </div>
            <div class="w-3/4 shadow-lg rounded-lg p-6 mb-6 border border-sky-400 hover:bg-sky-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
                <h2 class="text-xl font-bold mb-2">Networking Tools</h2>
                <hr class="border-gray-300 my-2">
                <p>
                    Connect with like-minded individuals, sponsors, and partners through our networking tools. Engage in social tasks, such as promoting sponsors on social media platforms, to unlock new opportunities and collaborations.
                </p>
            </div>
        </div>
        <Train/>
    <!-- Documentation content -->
    <div class="flex flex-col-reverse md:flex-row mt-24">
        <div class="prose prose-lg w-full md:w-1/2">
            <h1 class="font-bold text-2xl">Documentation:</h1>
            <br>
            <p><span class="font-bold text-sky-400">Rewards and Reputation:</span><br>
            As users engage with decentralized projects, they earn rewards and build their reputation through our XP and reputation systems. By leveling up within each decentralized project, users unlock new opportunities and enhance their standing within the community.
            <br><br>
            <span class="font-bold text-violet-400">Launch Your Project:</span><br>
            When ready, users can launch their projects through our platform, leveraging our secure and decentralized infrastructure to implement changes and drive innovation. Our platform provides deep analytics to track project performance and identify areas for improvement, empowering users to make data-driven decisions.
            <br><br>
            <span class="font-bold text-lime-400">Supporter Opportunities:</span><br>
            Furthermore, our platform offers networking tools that connect users with sponsors and partners. Users can complete social tasks to earn rewards, such as promoting supporters on social media platforms like Twitter. This creates mutually beneficial relationships and opens doors to potential collaborations and opportunities for growth.
            <br><br>
            At Wooblay, we're not just building projects; we're building a community of innovators, collaborators, and changemakers dedicated to making a positive impact on the world. Join us on this journey, and let's shape the future together.</p>
        </div>
        <div class="w-full md:w-1/2 pl-8">
            <img src="/xp.webp" alt="Documentation Image" class="w-full h-auto">
        </div>
    </div>
</div>
</div>
</template>

<script>
import Train from './components/Train.vue'

export default {
  components: {
    Train
  }
}
</script>