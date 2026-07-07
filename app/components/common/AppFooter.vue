<script setup>
import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconTwitter from "~/components/icons/IconTwitter.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";

const currentYear = new Date().getFullYear();

const whatsappNumber = "923239806041";

const whatsappMessage =
  "Hi Avon Flower Store, I want to ask about flowers, gifts, or event decoration.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const services = [
  {
    label: "Fresh Flowers",
    path: "/fresh-flowers",
  },
  {
    label: "Gift Occasions",
    path: "/gift-occasions",
  },
  {
    label: "Event Decoration",
    path: "/events",
  },
  {
    label: "Gift Packaging",
    path: "/packaging",
  },
];

const companyLinks = [
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "FAQ",
    path: "/faq",
  },
  {
    label: "Terms & Conditions",
    path: "/terms-and-conditions",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: IconFacebook,
    className: "hover:bg-[#1877F2] hover:text-white",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: IconInstagram,
    className: "hover:bg-[#DD2A7B] hover:text-white",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: IconTwitter,
    className: "hover:bg-[#1DA1F2] hover:text-white",
  },
];
</script>

<template>
  <footer class="relative overflow-hidden bg-white">
    <!-- Decorative Background -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#d08f86]/10 blur-3xl"
      ></div>

      <div
        class="absolute right-0 top-32 h-96 w-96 rounded-full bg-[#0f3d2e]/10 blur-3xl"
      ></div>

      <div
        class="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#b68a2c]/10 blur-3xl"
      ></div>

      <div
        class="absolute inset-0 opacity-[0.22]"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(15, 61, 46, 0.12) 1px,
            transparent 0
          );
          background-size: 30px 30px;
        "
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
      <!-- Top CTA Card -->
      <div
        class="relative mb-16 overflow-hidden rounded-[2rem] bg-[#071c15] px-6 py-10 shadow-[0_30px_90px_rgba(15,61,46,0.22)] sm:px-10 lg:px-14"
      >
        <div
          class="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#d08f86]/20 blur-3xl"
        ></div>

        <div
          class="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#b68a2c]/20 blur-3xl"
        ></div>

        <div
          class="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div class="max-w-2xl">
            <p
              class="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#b68a2c]"
            >
              Custom Floral Experience
            </p>

            <h2
              class="font-serif text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Need flowers, gifts, or event decoration?
            </h2>

            <p class="mt-4 max-w-xl text-[15px] leading-7 text-white/75 sm:text-base">
              Share your idea with us and we will help you create a beautiful,
              premium, and memorable floral experience.
            </p>
          </div>

          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Avon Flower Store on WhatsApp"
            class="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,211,102,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#1fbd58]"
          >
            <IconWhatsapp class="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>
      </div>

      <!-- Main Footer -->
      <div class="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-12">
        <!-- Brand -->
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="inline-flex items-center">
            <img
              src="/logo.png"
              alt="Avon Gifts & Events"
              class="h-16 w-auto object-contain"
              loading="lazy"
            />
          </NuxtLink>

          <p class="mt-6 max-w-sm text-[15px] leading-8 text-[#3f5a50]">
            Crafting moments of joy through fresh flowers, thoughtful gifts,
            elegant packaging, and unforgettable event decoration.
          </p>

          <!-- Social Links -->
          <div class="mt-7 flex items-center gap-3">
            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              class="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-[#25D366]/20 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <IconWhatsapp class="h-5 w-5" />
            </a>

            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              :class="social.className"
              class="flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfcd] bg-white text-[#0f3d2e] shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              <component :is="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div class="lg:col-span-2">
          <h3 class="font-serif text-xl font-black text-[#071c15]">
            Services
          </h3>

          <div class="mt-4 h-[2px] w-10 rounded-full bg-[#b68a2c]"></div>

          <ul class="mt-6 space-y-3">
            <li v-for="service in services" :key="service.label">
              <NuxtLink
                :to="service.path"
                class="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#3f5a50] transition duration-300 hover:text-[#b56f5d]"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full bg-[#b68a2c] opacity-0 transition duration-300 group-hover:opacity-100"
                ></span>
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-2">
          <h3 class="font-serif text-xl font-black text-[#071c15]">
            Company
          </h3>

          <div class="mt-4 h-[2px] w-10 rounded-full bg-[#b68a2c]"></div>

          <ul class="mt-6 space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <NuxtLink
                :to="link.path"
                class="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#3f5a50] transition duration-300 hover:text-[#b56f5d]"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full bg-[#b68a2c] opacity-0 transition duration-300 group-hover:opacity-100"
                ></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Card -->
        <div class="lg:col-span-4">
          <div
            class="rounded-[1.5rem] border border-[#eadfcd] bg-[#fbf7ef]/80 p-6 shadow-[0_20px_60px_rgba(15,61,46,0.08)] backdrop-blur-md"
          >
            <h3 class="font-serif text-xl font-black text-[#071c15]">
              Get in Touch
            </h3>

            <div class="mt-5 space-y-4">
              <a
                href="mailto:info@avongifts.com"
                class="flex items-start gap-3 text-[15px] font-semibold text-[#3f5a50] transition duration-300 hover:text-[#b56f5d]"
              >
                <span
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-sm"
                >
                  ✉
                </span>
                <span>
                  <span class="block text-xs font-black uppercase tracking-[0.18em] text-[#b68a2c]">
                    Email
                  </span>
                  info@avongifts.com
                </span>
              </a>

              <a
                href="tel:+923239806041"
                class="flex items-start gap-3 text-[15px] font-semibold text-[#3f5a50] transition duration-300 hover:text-[#b56f5d]"
              >
                <span
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-sm"
                >
                  ☎
                </span>
                <span>
                  <span class="block text-xs font-black uppercase tracking-[0.18em] text-[#b68a2c]">
                    Phone
                  </span>
                  +92 323 980 6041
                </span>
              </a>

              <div class="flex items-start gap-3 text-[15px] font-semibold text-[#3f5a50]">
                <span
                  class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-sm"
                >
                  ⏱
                </span>
                <span>
                  <span class="block text-xs font-black uppercase tracking-[0.18em] text-[#b68a2c]">
                    Working Hours
                  </span>
                  Mon – Sat: 9AM – 9PM
                </span>
              </div>
            </div>

            <a
              :href="whatsappLink"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#0f3d2e] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#0f3d2e]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#09291f]"
            >
              <IconWhatsapp class="h-5 w-5" />
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="flex flex-col gap-4 border-t border-[#eadfcd] py-7 text-sm text-[#6f8178] md:flex-row md:items-center md:justify-between"
      >
        <p>
          © {{ currentYear }} Avon Gifts & Events. All rights reserved.
        </p>

        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <NuxtLink
            to="/privacy-policy"
            class="font-semibold transition duration-300 hover:text-[#0f3d2e]"
          >
            Privacy Policy
          </NuxtLink>

          <NuxtLink
            to="/terms-and-conditions"
            class="font-semibold transition duration-300 hover:text-[#0f3d2e]"
          >
            Terms
          </NuxtLink>

          <p class="font-semibold text-[#0f3d2e]">
            Delivering happiness, one gift at a time.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>