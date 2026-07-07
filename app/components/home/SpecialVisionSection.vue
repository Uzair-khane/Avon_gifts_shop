<script setup>
import specialVisionBg from "~/assets/images/services/event-decoration.webp";
import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";

const whatsappNumber = "923239806041";

const whatsappMessage =
  "Hi Avon Flower Store, I want to share my vision for a custom gift or decoration. I will send 1–3 pictures with details.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;
</script>

<template>
  <section class="relative overflow-hidden bg-[#fbf7ef] px-4 py-24 sm:px-6 lg:px-8">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${specialVisionBg})` }"
    ></div>

    <!-- Hero Theme Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-[#071c15]/92 via-[#071c15]/78 to-[#071c15]/55"
    ></div>

    <!-- Soft Readability Layer -->
    <div class="absolute inset-0 bg-black/10"></div>

    <!-- Decorative Glow -->
    <div
      class="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#b68a2c]/15 blur-3xl"
    ></div>
    <div
      class="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#d08f86]/20 blur-3xl"
    ></div>

    <!-- Content -->
    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="mx-auto max-w-4xl text-center">
        <p class="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
          Custom Gifts & Decoration
        </p>

        <h2
          class="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Have Something Special
          <span class="text-[#d08f86]">in Mind?</span>
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
          Upload 1–3 pictures with a description and we will craft the perfect
          gift or decoration for you.
        </p>

        <!-- Buttons -->
        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share your custom gift or decoration vision on WhatsApp"
            class="group inline-flex min-w-[280px] items-center justify-center gap-3 rounded-md bg-white px-8 py-4 text-sm font-bold text-[#071c15] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-[#fbf7ef]"
          >
            <span
              class="flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white transition duration-300 group-hover:scale-110"
            >
              <IconWhatsapp class="h-4 w-4" />
            </span>

            Share Your Vision on WhatsApp
          </a>

          <NuxtLink
            to="/events"
            class="inline-flex min-w-[220px] items-center justify-center rounded-md border border-white/35 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#b68a2c] hover:bg-[#b68a2c] hover:text-[#071c15]"
          >
            Browse Events
            <span class="ml-2">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>