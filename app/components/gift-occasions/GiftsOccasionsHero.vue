<template>
  <section class="relative min-h-[60vh] overflow-hidden bg-[#fbf7ef]">
    <video
      ref="videoRef"
      class="absolute inset-0 h-full w-full object-cover"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source src="~/assets/videos/hero-video.mp4" type="video/mp4" />
    </video>

    <!-- Light Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#fbf7ef]/92 via-[#fbf7ef]/60 to-[#fbf7ef]/20"></div>
    <div class="absolute inset-0 bg-white/10"></div>

    <div class="relative z-10 flex h-full min-h-[60vh] flex-col justify-center px-6 md:px-16">
      <p class="mb-3 text-sm font-semibold tracking-widest text-[#0f3d2e]">
        THOUGHTFULLY CURATED
      </p>
      <h1 class="max-w-xl text-4xl font-bold leading-tight text-[#1a1a1a] md:text-6xl">
        Perfect Gifts for,
        <span class="text-[#e08e76]">Every Occasion</span>
      </h1>
      <p class="mt-4 max-w-md text-gray-600">
        Celebrate life's special moments with our premium collection of thoughtfully curated gifts.
      </p>

      <div class="mt-6 flex gap-4">
        <button class="rounded-full bg-[#0f3d2e] px-6 py-3 font-semibold text-white transition hover:bg-[#0c2f24]">
          Explore Gifts →
        </button>
        <button class="flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold text-[#0f3d2e]">
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const videoRef = ref(null);
</script>
