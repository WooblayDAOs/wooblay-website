<template>
  <nav :style="{ backgroundColor: 'var(--background-color)' }" class="p-6 fixed w-full mb-16 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between flex-wrap">
        <div class="flex items-center flex-shrink-0 mr-6">
          <a href="/"><img src="/templogo.png" alt="Logo" class="h-8 w-full"></a>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded border-white" @click="toggleMenu">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{ 'hidden': !isMenuOpen }">
          <div class="text-sm lg:flex-grow lg:flex lg:justify-end items-center">
        <router-link to="/docs" class="mt-4 text-lg lg:mt-0 block mr-8 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          About
        </router-link>
            <a href="https://forms.gle/tYEqKTsjRarWAnst6" class="px-4 py-2 mt-4 text-lg lg:mt-0 pr-8 pl-8 block rounded-full border border-violet-400 text-violet-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Platform
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
:root {
  --background-color: #EAEAEA;
  --text-color: #1E1E1E;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #1E1E1E;
    --text-color: #EAEAEA;
  }
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
</style>