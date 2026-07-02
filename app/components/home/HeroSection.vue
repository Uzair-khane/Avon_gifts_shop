<script setup>
import { ref, onMounted } from "vue";
import heroVideo from "~/assets/videos/hero-video.mp4";

import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconTwitter from "~/components/icons/IconTwitter.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";
import IconShare from "~/components/icons/IconShare.vue";
const videoRef = ref(null);

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.playbackRate = 0.6;
  }
});
</script>

<template>
  <section class="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#fbf7ef]">
    <!-- Background Video -->
   <video
  ref="videoRef"
  class="absolute inset-0 h-full w-full object-cover"
  autoplay
  muted
  loop
  playsinline
  preload="auto"
>
  <source :src="heroVideo" type="video/mp4" />
</video>

    <!-- Light Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#fbf7ef]/90 via-[#fbf7ef]/55 to-[#fbf7ef]/20"
    ></div>

    <!-- Soft readability layer -->
    <div class="absolute inset-0 bg-white/10"></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="mb-4 mt-2 ml-2 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
          Luxury Gifts & Flowers
        </p>

        <h1 class="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-[#071c15] sm:text-5xl lg:text-6xl">
          Celebrate Every
          <span class="block text-[#d08f86]">Moment</span>
          with Elegance
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-[#3f5a50]">
          From fresh flowers to bespoke gifts, stunning event decor to premium packaging 
          we craft unforgettable experiences for life's precious moments.
        </p>

        <!-- Buttons -->
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <NuxtLink
            to="/gift-occasions"
            class="inline-flex items-center justify-center rounded-md bg-[#0f3d2e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0f3d2e]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#09291f]"
          >
            Explore Gifts
            <span class="ml-2">→</span>
          </NuxtLink>

          <a
            href="#"
            class="inline-flex items-center justify-center rounded-md border border-[#c9bda9] bg-white/70 px-8 py-4 text-sm font-bold text-[#0f3d2e] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#0f3d2e]"
          >
            Contact Us
          </a>
        </div>

        <!-- Social Icons -->
        <div class="mt-7 flex items-center gap-3">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconWhatsapp class="h-5 w-5" />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconFacebook class="h-5 w-5" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconTwitter class="h-5 w-5" />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconInstagram class="h-5 w-5" />
          </a>

          <button
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#5f6f52] shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:text-[#0f3d2e]"
          >
            <IconShare class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>