<script setup>
import freshFlowersImg from "~/assets/images/services/fresh-flowers.webp";
import giftOccasionsImg from "~/assets/images/services/gift-occasions.jpg";
import eventDecorationImg from "~/assets/images/services/event-decoration.webp";
import giftPackagingImg from "~/assets/images/services/gift-packaging.webp";

const services = [
  {
    title: "Fresh Flowers",
    description:
      "Handcrafted bouquets and elegant stems delivered fresh to your doorstep.",
    image: freshFlowersImg,
    tag: "01",
    path: "/fresh-flowers",
  },
  {
    title: "Gift Occasions",
    description:
      "Curated luxury gifts for birthdays, anniversaries, Hajj, weddings and more.",
    image: giftOccasionsImg,
    tag: "02",
    path: "/gift-occasions",
  },
  {
    title: "Event Decoration",
    description:
      "Transform your celebrations with breathtaking floral decor and styling.",
    image: eventDecorationImg,
    tag: "03",
    path: "/events",
  },
  {
    title: "Gift Packaging",
    description:
      "Premium wrapping and presentation designed to make every gift unforgettable.",
    image: giftPackagingImg,
    tag: "04",
    path: "/packaging",
  },
];
</script>

<template>
  <section class="relative overflow-hidden bg-[#fbf7ef] px-4 py-24 sm:px-6 lg:px-8">
    <!-- Decorative Background -->
    <div class="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#d08f86]/10 blur-3xl"></div>
    <div class="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#0f3d2e]/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl">
      <!-- Header -->
      <div class="mx-auto mb-16 max-w-3xl text-center">
        <p class="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
          Our Services
        </p>

        <h2 class="text-3xl font-black leading-tight tracking-tight text-[#071c15] sm:text-4xl lg:text-5xl">
          Crafted for Every Beautiful Moment
        </h2>

        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#3f5a50] sm:text-lg">
          From fresh floral arrangements to luxurious gift packaging, we bring elegance,
          emotion, and detail into every celebration.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid gap-8 md:grid-cols-2">
        <article
          v-for="service in services"
          :key="service.title"
          class="group relative overflow-hidden rounded-sm bg-white shadow-[0_20px_50px_rgba(15,61,46,0.08)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(15,61,46,0.18)]"
        >
          <!-- Image -->
          <div class="relative h-72 overflow-hidden sm:h-80">
            <img
              :src="service.image"
              :alt="service.title"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-[#071c15]/60 via-[#071c15]/15 to-transparent"></div>

            <span class="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black tracking-widest text-[#0f3d2e] shadow-md backdrop-blur-md">
              {{ service.tag }}
            </span>
          </div>

          <!-- Content -->
          <div class="relative p-7 sm:p-8">
            <div class="mb-5 h-[2px] w-14 rounded-full bg-[#b68a2c] transition-all duration-500 group-hover:w-28"></div>

            <h3 class="text-xl font-black tracking-tight text-[#071c15] sm:text-2xl">
              {{ service.title }}
            </h3>

            <p class="mt-3 text-[15px] leading-7 text-[#3f5a50]">
              {{ service.description }}
            </p>

            <NuxtLink
              :to="service.path"
              class="mt-7 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-[#b56f5d] transition duration-300 hover:text-[#0f3d2e]"
            >
              Explore
              <span class="flex h-9 w-9 items-center justify-center rounded-full border border-[#eadfcd] transition-all duration-300 group-hover:translate-x-2 group-hover:border-[#0f3d2e] group-hover:bg-[#0f3d2e] group-hover:text-white">
                →
              </span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>