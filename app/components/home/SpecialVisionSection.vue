<script setup>
import specialVisionBg from "~/assets/images/services/event-decoration.webp";

const whatsappNumber = "923000000000";

const whatsappMessage =
  "Hi Avon Flower Store, I want to share my vision for a custom gift or decoration.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;
</script>

<template>
  <section
    class="relative overflow-hidden bg-[#071c15] px-4 py-24 sm:px-6 lg:px-8"
  >
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${specialVisionBg})` }"
    ></div>

    <!-- Dark Green Overlay -->
    <div class="absolute inset-0 bg-[#071c15]/82"></div>

    <!-- Soft Decorative Glow -->
    <div class="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#b68a2c]/10 blur-3xl"></div>
    <div class="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-[#d08f86]/10 blur-3xl"></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-5xl text-center">
      <p class="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
        Custom Gifts & Decoration
      </p>

      <h2
        class="mx-auto max-w-4xl font-serif text-3xl font-black leading-tight tracking-wide text-white drop-shadow-sm sm:text-4xl lg:text-5xl"
      >
        Have Something Special in Mind?
      </h2>

      <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
        Upload 1–3 pictures with a description and we will craft the perfect gift
        or decoration for you.
      </p>

      <!-- Buttons -->
      <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex min-w-[270px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-black tracking-[0.12em] text-[#071c15] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#fbf7ef] hover:shadow-[0_25px_65px_rgba(0,0,0,0.32)]"
        >
        <IconsIconWhatsapp class="h-5 w-5" />

          Share Your Vision on WhatsApp
        </a>

        <NuxtLink
          to="/events"
          class="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/35 px-8 py-4 text-sm font-black tracking-[0.12em] text-white backdrop-blur-md transition-all duration-500 hover:-translate-y-1  hover:shadow-[0_25px_65px_rgba(0,0,0,0.25)]"
        >
          Browse Events
        </NuxtLink>
      </div>
    </div>
  </section>
</template>