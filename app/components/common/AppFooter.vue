<script setup>
import IconWhatsapp from "~/components/icons/IconWhatsapp.vue";
import IconFacebook from "~/components/icons/IconFacebook.vue";
import IconTwitter from "~/components/icons/IconTwitter.vue";
import IconInstagram from "~/components/icons/IconInstagram.vue";

const currentYear = new Date().getFullYear();

const whatsappNumber = "923239806041";

const whatsappMessage =
  "Hi Avon Flower Store, I want to ask about flowers, gifts, custom orders, or event decoration.";

const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

const services = [
  { label: "Fresh Flowers", path: "/fresh-flowers" },
  { label: "Gift Occasions", path: "/gift-occasions" },
  { label: "Event Decoration", path: "/events" },
  { label: "Gift Packaging", path: "/packaging" },
];

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "FAQ", path: "/faq" },
  { label: "Terms & Conditions", path: "/terms-and-conditions" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: IconFacebook,
    className: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: IconInstagram,
    className: "hover:border-[#DD2A7B] hover:bg-[#DD2A7B] hover:text-white",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: IconTwitter,
    className: "hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white",
  },
];
</script>

<template>
  <footer class="relative overflow-hidden border-t border-[#eadfcd] bg-white">
    <!-- Subtle Background -->
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#d08f86]/8 blur-3xl"
      ></div>

      <div
        class="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#0f3d2e]/8 blur-3xl"
      ></div>
    </div>

    <div class="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
    

      <!-- Main Footer -->
      <div class="grid gap-12 lg:grid-cols-12">
        <!-- Brand -->
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="inline-flex items-center">
            <img
              src="/logo.png"
              alt="Avon Gifts & Events"
              class="h-14 w-auto object-contain sm:h-16"
              loading="lazy"
            />
          </NuxtLink>

          <p class="mt-6 max-w-sm text-[15px] leading-8 text-[#3f5a50]">
            We create refined floral arrangements, curated gifts, elegant
            packaging, and event styling for memorable occasions.
          </p>

          <!-- Social Icons -->
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
          <h3 class="text-base font-black uppercase tracking-[0.16em] text-[#071c15]">
            Services
          </h3>

          <div class="mt-4 h-[2px] w-10 rounded-full bg-[#b68a2c]"></div>

          <ul class="mt-6 space-y-3">
            <li v-for="service in services" :key="service.label">
              <NuxtLink
                :to="service.path"
                class="text-[15px] font-semibold text-[#3f5a50] transition duration-300 hover:text-[#b56f5d]"
              >
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div class="lg:col-span-2">
          <h3 class="text-base font-black uppercase tracking-[0.16em] text-[#071c15]">
            Company
          </h3>

          <div class="mt-4 h-[2px] w-10 rounded-full bg-[#b68a2c]"></div>

          <ul class="mt-6 space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <NuxtLink
                :to="link.path"
                class="text-[15px] font-semibold text-[#3f5a50] transition duration-300 hover:text-[#b56f5d]"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="lg:col-span-4">
          <div class="lg:border-l lg:border-[#eadfcd] lg:pl-8">
            <h3 class="text-base font-black uppercase tracking-[0.16em] text-[#071c15]">
              Contact
            </h3>

            <div class="mt-4 h-[2px] w-10 rounded-full bg-[#b68a2c]"></div>

            <p class="mt-6 max-w-sm text-[15px] leading-7 text-[#3f5a50]">
              Have a custom order, event decoration request, or gift idea?
              Message us and we will guide you.
            </p>

            <div class="mt-6 space-y-4">
              <!-- Email -->
              <a
                href="mailto:info@avongifts.com"
                class="group flex items-center gap-4 text-[15px] font-semibold text-[#3f5a50]"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#eadfcd] bg-white text-[#0f3d2e] transition duration-300 group-hover:border-[#0f3d2e] group-hover:bg-[#0f3d2e] group-hover:text-white"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6.5h16v11H4v-11Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linejoin="round"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <span class="transition duration-300 group-hover:text-[#b56f5d]">
                  info@avongifts.com
                </span>
              </a>

              <!-- Phone -->
              <a
                href="tel:+923239806041"
                class="group flex items-center gap-4 text-[15px] font-semibold text-[#3f5a50]"
              >
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#eadfcd] bg-white text-[#0f3d2e] transition duration-300 group-hover:border-[#0f3d2e] group-hover:bg-[#0f3d2e] group-hover:text-white"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8.2 5.5 10 9.3l-1.7 1.3c.9 1.9 2.4 3.4 4.2 4.2l1.4-1.7 3.8 1.8-.6 3.1c-.2.8-.9 1.3-1.7 1.2C9.6 18.5 5.5 14.4 4.8 8.6c-.1-.8.4-1.5 1.2-1.7l2.2-.4Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <span class="transition duration-300 group-hover:text-[#b56f5d]">
                  +92 323 980 6041
                </span>
              </a>

              <!-- Hours -->
              <div class="flex items-center gap-4 text-[15px] font-semibold text-[#3f5a50]">
                <span
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#eadfcd] bg-white text-[#0f3d2e]"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                    />
                    <path
                      d="M12 7.5V12l3 2"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>

                <span>Mon – Sat: 9AM – 9PM</span>
              </div>
            </div>

       
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-14 flex flex-col gap-4 border-t border-[#eadfcd] pt-7 text-sm text-[#6f8178] md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ currentYear }} Avon Gifts & Events. All rights reserved.</p>

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

          <span class="hidden h-1 w-1 rounded-full bg-[#b68a2c] md:block"></span>

          <p class="font-semibold text-[#0f3d2e]">
            Delivering happiness, one gift at a time.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>