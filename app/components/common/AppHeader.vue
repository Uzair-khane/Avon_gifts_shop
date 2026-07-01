<script setup>
import { ref } from "vue";
import { navLinks } from "~/data/navLinks";

import IconCart from "~/components/icons/IconCart.vue";
import IconMenu from "~/components/icons/IconMenu.vue";
import IconClose from "~/components/icons/IconClose.vue";
import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";

const isMenuOpen = ref(false);
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-[#fbf7ef]/95 backdrop-blur-xl">
    <div class="mx-auto  px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between border-b border-[#eadfcd]">

        <!-- Logo Image -->
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/logo.png"
            alt="Avon Gifts Shop"
            class="h-14 w-auto object-contain sm:h-20"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-8 xl:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="group relative inline-block py-2 text-sm font-semibold text-[#66705f] transition duration-300 hover:text-[#0f3d2e]"
            active-class="text-[#0f3d2e]"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#0f3d2e] transition-all duration-300 ease-out group-hover:w-full"></span>
          </NuxtLink>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden items-center gap-3 xl:flex">
          <button class="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <IconCart class="h-5 w-5" />
            <span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0f3d2e] text-[10px] font-bold text-white">
              0
            </span>
          </button>

          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
          >
            <IconWhatsapp class="h-5 w-5" />
            Chat with Us
          </a>
        </div>

        <!-- Tablet Button -->
        <div class="hidden items-center gap-3 lg:flex xl:hidden">
          <a
            href="#"
            class="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white"
          >
            <IconWhatsapp class="h-5 w-5" />
            Chat
          </a>

          <button
            class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-sm"
            @click="isMenuOpen = !isMenuOpen"
          >
            <IconClose v-if="isMenuOpen" class="h-6 w-6" />
            <IconMenu v-else class="h-6 w-6" />
          </button>
        </div>

        <!-- Mobile Button -->
        <button
          class="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-sm lg:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <IconClose v-if="isMenuOpen" class="h-6 w-6" />
          <IconMenu v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Mobile / Tablet Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="-translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="border-b border-[#eadfcd] bg-[#fbf7ef] xl:hidden">
        <div class="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">

          <nav class="flex flex-col items-center gap-4 text-center">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="group relative inline-block w-fit py-1 text-sm font-bold text-[#66705f] transition duration-300 hover:text-[#0f3d2e]"
              active-class="text-[#0f3d2e]"
              @click="isMenuOpen = false"
            >
              {{ link.name }}
              <span class="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#0f3d2e] transition-all duration-300 ease-out group-hover:w-full"></span>
            </NuxtLink>
          </nav>

          <div class="mt-5 grid grid-cols-2 gap-3">
            <button class="relative flex h-12 items-center justify-center rounded-2xl bg-white text-[#0f3d2e] shadow-sm">
              <IconCart class="h-5 w-5" />
              <span class="ml-2 text-sm font-bold">Cart</span>
            </button>

            <a
              href="#"
              class="flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-sm font-bold text-white"
            >
              <IconWhatsapp class="h-5 w-5" />
              Chat
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>