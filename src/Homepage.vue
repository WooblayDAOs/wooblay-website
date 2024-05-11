<template>
      <div class="container mx-auto px-4 pt-28">
    <div class="flex flex-col md:flex-row"> <!-- Add flex-col class for mobile layout -->
      <div class="w-full md:w-2/3"> <!-- Change w-2/3 to w-full for mobile layout -->
        <p class="text-left font-bold text-sm text-violet-400">The Launchpad for your Projects and Rewards</p>
        <h1 class="text-left text-4xl md:text-8xl text-violet-400">Unleash Your Imagination, Shape the Future</h1> <!-- Decrease text size for mobile layout -->
        <p class="text-left text-sm mt-8 w-full md:w-5/6 text-violet-400">Welcome to Wooblay, bring your boldest ideas to life, where every idea has the potential to make a difference. Get involved in revolutionary projects and join a community of creators and idealists, and together, let's redefine what's possible.</p> <!-- Change w-3/4 to w-full for mobile layout -->
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0"> <!-- Change w-1/3 to w-full for mobile layout and add mt-8 and md:mt-0 for spacing -->
        <img src="/ct.png" alt="Image" class="w-full">
      </div>
    </div>
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-24"> <!-- Add flex-col class for mobile layout and space-y-4 class for spacing -->
      <div class="flex-1 p-4 rounded-lg border border-lime-400 hover:bg-lime-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
        <h2 class="font-bold mb-4 text-lime-400 text-2xl md:text-3xl">Inspire Innovation, Build Your Vision</h2> <!-- Decrease text size for mobile layout -->
        <p class="mb-32">Have a groundbreaking idea? Bring it to life on Wooblay. Our platform is designed to accelerate the creation of projects that push the boundaries of innovation and drive positive change in the world. Join forces with like-minded creators and turn your vision into reality.</p>
        <a href="https://forms.gle/tYEqKTsjRarWAnst6" class="text-lime-400 text-lg md:text-xl">Launch a new project ↗</a> <!-- Decrease text size for mobile layout -->
      </div>
      <div class="flex-1 p-4 rounded-lg border border-sky-400 hover:bg-sky-300/10 transition duration-500 ease-in-out transform hover:-translate-y-1">
        <h2 class="font-bold mb-4 text-sky-400 text-2xl md:text-3xl">Explore New Frontiers, Join the Journey</h2> <!-- Decrease text size for mobile layout -->
        <p class="mb-32">Looking to be part of something transformative? Explore a diverse range of revolutionary projects being built by our community of innovators. Whether you're seeking inspiration or ready to contribute your expertise, there's a project waiting for you to join.</p>
        <a href="https://forms.gle/tYEqKTsjRarWAnst6" class="text-sky-400 text-lg md:text-xl">Explore all projects ↗</a> <!-- Decrease text size for mobile layout -->
      </div>
    </div>
    <div class="mt-44">
      <h1 class="text-left text-2xl md:text-7xl text-lime-400">"Each one of us can make a difference. Together we can make change." <br><span class="text-lg">- Barbara Mikulski</span></h1> <!-- Decrease text size for mobile layout -->
      <hr class="my-4 mx-auto w-full"/>
    </div>
    <div class="flex flex-col md:flex-row mt-8"> <!-- Add flex-col class for mobile layout -->
      <div class="w-full md:w-1/3 mr-0 md:mr-12 text-sm"> <!-- Change w-1/2 to w-full for mobile layout and remove mr-12 for spacing -->
        <p class="mb-4">At Wooblay, we're on a mission to create a decentralized ecosystem where ideas thrive and innovation knows no bounds. Our platform harnesses the power of blockchain technology to automate and reward collaboration, providing tools, income, partnerships, and sponsorships to support the development of revolutionary projects. Join us in shaping a future where collective creativity drives meaningful change.
          <br><br>
          Our platform enables the creation of decentralized projects through our friendly interface. Users can effortlessly customize their projects to suit their specific needs without any coding requirements. Within each decentralized project, every participant has a voice and voting rights, ensuring transparency and inclusivity in decision-making processes.
<br><br>
Tasks and positions within decentralized projects are released, and contributors are automatically compensated upon completion, streamlining project management and incentivizing active participation. Additionally, users can leverage our supporter technology and potentially secure seed funding to fuel project development.
        </p>
        <a href="/docs" class="text-lime-400 text-sm md:text-md">Show more ↗</a>
      </div>
      <div class="w-full md:w-2/3">
        <iframe width="100%" height="415" src="https://www.youtube.com/embed/6ZYVGbRg63Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
      </div>
    </div>
    <div class="mt-44">
      <h1 class="text-left text-4xl md:text-6xl text-sky-400">Get connected</h1> <!-- Increase text size for mobile layout -->
      <hr class="my-4 mx-auto w-full border-sky-400"/>
    </div>
    <div class="mt-8">
      <div class="flex flex-col md:flex-row justify-center md:justify-between"> <!-- Add flex-col class for mobile layout and justify-between class for spacing -->
        <div class="flex-1 p-4 m-4 rounded-lg border border-gray-300 text-center">
          <FontAwesomeIcon :icon="faDiscord" class="mx-auto" size="5x" />
          <div class="mt-4"><a href="https://discord.gg/3JeUGzVrde">discord.gg/wooblay ↗</a></div>
        </div>
        <div class="flex-1 p-4 m-4 rounded-lg border border-gray-300 text-center">
          <FontAwesomeIcon :icon="faTwitter" class="mx-auto" size="5x" />
          <div class="mt-4"><a href="https://twitter.com/WooblayDAOs">twitter.com/wooblay ↗</a></div>
        </div>
        <div class="flex-1 p-4 m-4 rounded-lg border border-gray-300 text-center">
          <FontAwesomeIcon :icon="faInstagram" class="mx-auto" size="5x" />
          <div class="mt-4"><a href="">instagram.com/wooblay ↗</a></div>
        </div>
      </div>
      <div class="flex justify-center items-center m-16">
        <p class="text-center text-gray-500">Copyright © 2024 Wooblay. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>


<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faDiscord, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
export default {
  name: 'HomePage',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faDiscord,
      faTwitter,
      faInstagram
    };
  },
}
</script>