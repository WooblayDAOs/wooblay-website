<template>
    <div class="mb-24 mt-24">
      <div class="Training" ref="Training">
        <h1 class="text-2xl mb-16 font-bold">Who we work with</h1>
        <Carousel :items-to-show="2.5" :wrap-around="true" :transition="5000" :autoplay="true" :touchDrag="true"
          :mouseDrag="true">
          <Slide v-for="(image, index) in images" :key="index">
            <img :src="image.url" :alt="image.alt" />
          </Slide>
          <template #addons>
          </template>
        </Carousel>
      </div>
    </div>
  </template>
    
  <script>
  import { defineComponent } from 'vue';
  import { Carousel, Slide } from 'vue3-carousel';
  
  import 'vue3-carousel/dist/carousel.css';
  
  export default defineComponent({
    name: 'WrapAround',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        images: [
          { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chainlink_Logo_Blue.svg/2560px-Chainlink_Logo_Blue.svg.png", alt: 'Chainlink' },
          { url: 'https://cms.neotokyo.codes/wp-content/uploads/2022/08/zksync-logo-1024x296.png', alt: 'zkSync' },
          { url: 'https://blog.thirdweb.com/content/images/2022/08/Thirdweb-Logo-Transparent-White.png', alt: 'ThirdWeb' },
        ],
      };
    },
    mounted() {
      const options = {
        rootMargin: '0px',
        threshold: 0.5
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
entries.forEach(entry => {
  if (entry.intersectionRatio > 0 && entry.target instanceof HTMLElement) {
    entry.target.style.opacity = '1';
  }
});
          }
        });
      }, options);
  
      const Training = this.$refs.Training;
      observer.observe(Training);
    }
  });
  </script>
  
  <style scoped>
  
  .Training {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }
  
  img {
    width: 40%;
    color: white;
  }
  </style>