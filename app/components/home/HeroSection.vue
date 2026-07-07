<script setup>
import { ref, onMounted } from "vue";
import heroVideo from "~/assets/videos/hero-video.mp4";

import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconTwitter from "~/components/icons/IconTwitter.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";
import IconShare from "~/components/icons/IconShare.vue";

const videoRef = ref(null);

const whatsappNumber = "923239806041";

const whatsappMessage =
  "Hi Avon Flower Store, I want to ask about flowers, gifts, or event decoration.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const facebookLink = "https://facebook.com";
const twitterLink = "https://twitter.com";
const instagramLink = "https://instagram.com";

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.playbackRate = 0.6;
  }
});

const goToGifts = () => {
  navigateTo("/gift-occasions");
};

const openWhatsapp = () => {
  window.open(whatsappLink, "_blank", "noopener,noreferrer");
};

const shareWebsite = async () => {
  const shareData = {
    title: "Avon Flower Store",
    text: "Explore luxury flowers, gifts, event decoration, and premium packaging.",
    url: window.location.origin,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.origin);
};
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
      class="absolute inset-0 bg-gradient-to-r from-[#fbf7ef]/92 via-[#fbf7ef]/60 to-[#fbf7ef]/20"
    ></div>

    <!-- Soft Readability Layer -->
    <div class="absolute inset-0 bg-white/10"></div>

    <!-- Decorative Glow -->
    <div
      class="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#d08f86]/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0f3d2e]/10 blur-3xl"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-2xl">
        <p
          class="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]"
        >
          Luxury Gifts & Flowers
        </p>

        <h1
          class="max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-[#071c15] sm:text-5xl lg:text-6xl"
        >
          Celebrate Every
          <span class="block text-[#d08f86]">Moment</span>
          with Elegance
        </h1>

        <p class="mt-6 max-w-xl text-lg leading-8 text-[#3f5a50]">
          From fresh flowers to bespoke gifts, stunning event decor to premium
          packaging, we craft unforgettable experiences for life's precious
          moments.
        </p>

        <!-- Buttons -->
        <div class="mt-9 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            @click="goToGifts"
            class="group inline-flex items-center justify-center rounded-md bg-[#0f3d2e] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0f3d2e]/25 transition duration-300 hover:-translate-y-1 hover:bg-[#09291f]"
          >
            Explore Gifts
            <span class="ml-2 transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            type="button"
            @click="openWhatsapp"
            class="inline-flex items-center justify-center gap-3 rounded-md border border-[#c9bda9] bg-white/75 px-8 py-4 text-sm font-bold text-[#0f3d2e] shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#0f3d2e] hover:bg-white"
          >
            <IconWhatsapp class="h-5 w-5 text-[#25D366]" />
            Contact Us
          </button>
        </div>

        <!-- Social Icons -->
        <div class="mt-7 flex items-center gap-3">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconWhatsapp class="h-5 w-5" />
          </a>

          <a
            :href="facebookLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconFacebook class="h-5 w-5" />
          </a>

          <a
            :href="twitterLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DA1F2] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconTwitter class="h-5 w-5" />
          </a>

          <a
            :href="instagramLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-md transition duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <IconInstagram class="h-5 w-5" />
          </a>

          <button
            type="button"
            @click="shareWebsite"
            aria-label="Share website"
            class="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#5f6f52] shadow-md backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:text-[#0f3d2e]"
          >
            <IconShare class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>