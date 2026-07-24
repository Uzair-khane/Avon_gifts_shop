<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useGiftOccasions } from '~/composables/useGiftOccasions';

const { categories, getByCategory } = useGiftOccasions();
const rootEl = ref(null);

onMounted(async () => {
  await nextTick();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
  );

  const revealEls = rootEl.value?.querySelectorAll(".reveal") ?? [];
  revealEls.forEach((el) => observer.observe(el));
});
</script>

<template>
  <section
    ref="rootEl"
    class="relative overflow-hidden bg-[#fbf7ef] px-8 pb-24 pt-16 sm:px-12 lg:px-20 font-sans"
  >
    <div class="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-[#d08f86]/15 blur-[100px]"></div>
    <div class="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#0f3d2e]/10 blur-[100px]"></div>

    <div class="relative mx-auto max-w-7xl">
      <div
        v-for="cat in categories"
        :key="cat.slug"
        :id="cat.slug"
        class="mb-16 last:mb-0"
      >
        <div class="reveal mb-12 flex flex-col gap-4 border-b border-[#0f3d2e]/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="max-w-2xl">
            <div class="mb-4 flex items-center gap-3">
             
              <p class="text-xs font-bold uppercase tracking-[0.3em] text-[#b68a2c]">
                Collection
              </p>
              <span class="rounded-full bg-[#b68a2c]/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#b68a2c]">
                {{ getByCategory(cat.slug).length }} Items
              </span>
            </div>
            <h2 class="text-2xl font-black font-bold leading-tight tracking-tight text-[#071c15] sm:text-2xl lg:text-3xl">
              {{ cat.label }}
            </h2>
            <p class="mt-4 text-[16px] leading-relaxed text-[#3f5a50]">
              {{ cat.description }}
            </p>
          </div>
          
          <div class="hidden sm:block pb-2">
            <button class="text-sm font-bold text-[#0f3d2e] hover:text-[#b68a2c] transition-colors flex items-center gap-2 uppercase tracking-widest">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          <article
            v-for="(gift, i) in getByCategory(cat.slug)"
            :key="gift.id"
            :style="{ transitionDelay: `${(i % 3) * 100}ms` }"
            class="reveal group flex flex-col overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_rgb(15,61,46,0.06)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_16px_32px_rgb(15,61,46,0.12)] border border-[#0f3d2e]/5"
          >
            <div class="relative aspect-[3/2] w-full overflow-hidden sm:aspect-[4/3]">
              <img
                :src="gift.image"
                :alt="gift.name"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              />
              
              <div class="absolute inset-0 bg-gradient-to-t from-[#071c15]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <span
                v-if="gift.badge"
                class="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#0f3d2e] shadow-sm backdrop-blur-sm"
              >
                {{ gift.badge }}
              </span>
            </div>

            <div class="relative flex flex-1 flex-col justify-between p-4 sm:p-5">
              <div>
                <div class="mb-2 h-[2px] w-8 rounded-full bg-[#b68a2c] transition-all duration-500 group-hover:w-16"></div>
                <h3 class="text-xl font-bold tracking-tight text-[#071c15] transition-colors duration-300 group-hover:text-[#0f3d2e]">
                  {{ gift.name }}
                </h3>
              </div>

              <div class="mt-2 flex items-center justify-between border-t border-[#0f3d2e]/5 pt-2">
                <span class="text-xl font-black text-[#0f3d2e]">
                  <span class="text-sm font-medium text-[#3f5a50] mr-1">Rs.</span>{{ gift.price.toLocaleString() }}
                </span>
                
                <button class="flex items-center justify-center rounded-full bg-[#0f3d2e] h-10 w-10 text-white transition-all duration-300 hover:bg-[#b68a2c] hover:scale-110 hover:shadow-lg focus:outline-none" aria-label="Add to cart">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reveal {
  opacity: 0;
  --tw-translate-y: 40px;
  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1));
  animation: fallbackReveal 1s ease-out forwards 3s; 
}

.reveal-visible {
  opacity: 1 !important;
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) rotate(var(--tw-rotate, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1)) !important;
  transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  animation: none;
}

@keyframes fallbackReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
