<script setup>
const { categories, getByCategory } = useFreshFlowers();

const rootEl = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  const revealEls = rootEl.value?.querySelectorAll(".reveal") ?? [];
  revealEls.forEach((el) => observer.observe(el));
});
</script>

<template>
  <section
    ref="rootEl"
    class="relative overflow-hidden bg-[#fbf7ef] px-4 pb-24 pt-8 sm:px-6 lg:px-8"
  >
    <!-- Decorative Background -->
    <div class="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#d08f86]/10 blur-3xl"></div>
    <div class="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0f3d2e]/10 blur-3xl"></div>

    <div class="relative mx-auto max-w-7xl">
      <div
        v-for="cat in categories"
        :key="cat.slug"
        class="mb-24 last:mb-0"
      >
        <!-- Category Heading -->
        <div class="reveal mb-10 flex flex-col gap-6 border-b border-[#0f3d2e]/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div class="mb-3 flex items-center gap-3">
              <p class="text-xs font-bold uppercase tracking-[0.35em] text-[#b68a2c]">
                Collection
              </p>
              <span class="rounded-full bg-[#0f3d2e]/5 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-[#0f3d2e]">
                {{ getByCategory(cat.slug).length }} Items
              </span>
            </div>
            <h2 class="text-3xl font-black leading-tight tracking-tight text-[#071c15] sm:text-4xl">
              {{ cat.label }}
            </h2>
            <p class="mt-3 max-w-xl text-[15px] leading-7 text-[#3f5a50]">
              {{ cat.description }}
            </p>
          </div>
        </div>

        <!-- Products Grid for this Category -->
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(flower, i) in getByCategory(cat.slug)"
            :key="flower.id"
            :style="{ transitionDelay: `${(i % 3) * 120}ms` }"
            class="reveal group relative overflow-hidden rounded-sm bg-white shadow-[0_20px_50px_rgba(15,61,46,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_35px_80px_rgba(15,61,46,0.18)]"
          >
            <div class="relative h-64 overflow-hidden sm:h-72">
              <img
                :src="flower.image"
                :alt="flower.name"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#071c15]/50 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70"></div>

              <span
                v-if="flower.badge"
                class="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-black tracking-widest text-[#0f3d2e] shadow-md backdrop-blur-md"
              >
                {{ flower.badge }}
              </span>
            </div>

            <div class="relative p-6">
              <div class="mb-4 h-[2px] w-10 rounded-full bg-[#b68a2c] transition-all duration-500 group-hover:w-20"></div>

              <h3 class="text-lg font-black tracking-tight text-[#071c15] transition-colors duration-300 group-hover:text-[#0f3d2e]">
                {{ flower.name }}
              </h3>

              <div class="mt-5 flex items-center justify-between">
                <span class="text-lg font-black text-[#0f3d2e]">
                  Rs. {{ flower.price.toLocaleString() }}
                </span>
                <button class="flex items-center gap-2 overflow-hidden rounded-full bg-[#0f3d2e] px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#071c15] hover:px-6">
                  Add to Cart
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
  transform: translateY(36px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>