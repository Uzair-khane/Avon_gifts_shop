<script setup>
import { ref, onMounted } from "vue";
import whyChooseImg from "~/assets/images/services/gift-occasions.jpg";

const sectionRef = ref(null);
const isVisible = ref(false);

const features = [
  {
    title: "Same-Day Delivery",
    description: "Order before 2 PM for same-day delivery across the city",
  },
  {
    title: "Handcrafted with Love",
    description: "Every arrangement is carefully designed by our expert florists",
  },
  {
    title: "100% Fresh Guarantee",
    description: "We source only the freshest blooms for lasting beauty",
  },
  {
    title: "Custom Creations",
    description: "Tell us your vision and we'll bring it to life",
  },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden bg-[#fbf7ef] px-4 py-24 sm:px-6 lg:px-8"
  >
    <div class="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#d08f86]/10 blur-3xl"></div>
    <div class="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-[#0f3d2e]/10 blur-3xl"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
      <!-- Left Content -->
      <div
        :class="[
          'transition-all duration-1000 ease-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        ]"
      >
        <p class="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
          Why Choose Us
        </p>

        <h2 class="text-4xl font-black leading-tight tracking-tight text-[#071c15] sm:text-5xl">
          Why Choose Avon?
        </h2>

        <p class="mt-5 max-w-xl text-lg leading-8 text-[#3f5a50]">
          We don't just deliver gifts — we deliver emotions, wrapped in elegance
          and presented with care.
        </p>

        <div class="mt-10 space-y-7">
          <div
            v-for="(feature, index) in features"
            :key="feature.title"
            :class="[
              'flex gap-5 transition-all duration-700 ease-out',
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            ]"
            :style="{ transitionDelay: `${index * 160}ms` }"
          >
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f3e7df] text-[#c07a70] transition duration-300 hover:scale-110 hover:bg-[#0f3d2e] hover:text-white">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3.5L14.6 8.8L20.5 9.7L16.2 13.8L17.2 19.6L12 16.9L6.8 19.6L7.8 13.8L3.5 9.7L9.4 8.8L12 3.5Z" stroke-linejoin="round" />
              </svg>
            </div>

            <div>
              <h3 class="text-lg font-black text-[#071c15]">
                {{ feature.title }}
              </h3>
              <p class="mt-1 text-[15px] leading-7 text-[#3f5a50]">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div
        :class="[
          'relative transition-all duration-1000 ease-out lg:pl-8',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        ]"
      >
        <div class="group relative overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(15,61,46,0.16)]">
          <img
            :src="whyChooseImg"
            alt="Luxury gift box"
            class="h-[360px] w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-110 sm:h-[420px]"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-[#071c15]/25 via-transparent to-transparent"></div>
        </div>

        <!-- Floating Card -->
        <div
          class="absolute -bottom-8 left-6 flex items-center gap-4 rounded-3xl bg-white px-6 py-5 shadow-[0_20px_60px_rgba(15,61,46,0.18)] transition duration-500 hover:-translate-y-2 sm:left-10"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-full bg-[#0f3d2e] text-white">
            <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 12V21H4V12" />
              <path d="M2 7H22V12H2V7Z" />
              <path d="M12 7V21" />
              <path d="M12 7H8.5C7.1 7 6 5.9 6 4.5S7.1 2 8.5 2C11 2 12 7 12 7Z" />
              <path d="M12 7H15.5C16.9 7 18 5.9 18 4.5S16.9 2 15.5 2C13 2 12 7 12 7Z" />
            </svg>
          </div>

          <div>
            <h4 class="text-xl font-black text-[#071c15]">500+</h4>
            <p class="text-sm font-medium text-[#3f5a50]">
              Happy Deliveries Monthly
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>