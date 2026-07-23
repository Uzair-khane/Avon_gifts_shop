import { ref } from 'vue';
import gift1Image from '~/assets/images/gifts/gift1.jpg';
import gift2Image from '~/assets/images/gifts/gift2.jpg';
import gift3Image from '~/assets/images/gifts/gift3.jpg';
import gift4Image from '~/assets/images/gifts/gift4.jpg';
import gift5Image from '~/assets/images/gifts/gift5.jpg';
import umrah1Image from '~/assets/images/gifts/Umrah1.webp';
import umrah2Image from '~/assets/images/gifts/umrah2.jpg';
import umrah3Image from '~/assets/images/gifts/umrah3.webp';
import umrah4Image from '~/assets/images/gifts/umrah4.jpg';
import umrah5Image from '~/assets/images/gifts/umrah5.jpg';
import eid1Image from '~/assets/images/gifts/eid1.jpg';
import eid2Image from '~/assets/images/gifts/eid2.jpg';
import eid3Image from '~/assets/images/gifts/eid3.jpg';
import eid4Image from '~/assets/images/gifts/eid4.jpg';
import eid5Image from '~/assets/images/gifts/eid5.jpg';
import ramadan1Image from '~/assets/images/gifts/ramadan1.jpg';
import ramadan2Image from '~/assets/images/gifts/ramadan2.jpg';
import ramadan3Image from '~/assets/images/gifts/ramadan3.jpg';
import ramadan4Image from '~/assets/images/gifts/ramadan4.jpg';
import ramadan5Image from '~/assets/images/gifts/ramadan5.jpg';
import birthday1Image from '~/assets/images/gifts/birthday1.jpg';
import birthday2Image from '~/assets/images/gifts/birthday2.jpg';
import birthday3Image from '~/assets/images/gifts/birthday3.jpg';
import birthday4Image from '~/assets/images/gifts/birthday4.jpg';
import birthday5Image from '~/assets/images/gifts/birthday5.jpg';
import anniversary1Image from '~/assets/images/gifts/anniversary1.jpg';
import anniversary2Image from '~/assets/images/gifts/anniversary2.jpg';
import anniversary3Image from '~/assets/images/gifts/anniversary3.jpg';
import anniversary4Image from '~/assets/images/gifts/anniversary4.jpg';
import anniversary5Image from '~/assets/images/gifts/anniversary5.jpg';



export const useGiftOccasions = () => {
    const categories = ref([
        {
            "slug": "hajj-gifts",
            "icon": "",
            "label": "Hajj Gifts",
            "description": "Thoughtfully curated gifts for pilgrims returning from Hajj.",
            "itemCount": 5
        },
        {
            "slug": "umrah-gifts",
            "icon": "",
            "label": "Umrah Gifts",
            "description": "Meaningful presents to celebrate the blessed journey of Umrah.",
            "itemCount": 5
        },
        {
            "slug": "eid-gifts",
            "icon": "",
            "label": "Eid Gifts",
            "description": "Joyful floral and gift arrangements for Eid celebrations.",
            "itemCount": 5
        },
        {
            "slug": "ramadan-gifts",
            "icon": "",
            "label": "Ramadan Gifts",
            "description": "Spiritual and elegant gifts to share during the holy month.",
            "itemCount": 5
        },
        {
            "slug": "birthday-gifts",
            "icon": "",
            "label": "Birthday Gifts",
            "description": "Celebrate every birthday with memorable floral gift arrangements.",
            "itemCount": 5
        },
        {
            "slug": "wedding-anniversary-gifts",
            "icon": "",
            "label": "Wedding Anniversary Gifts",
            "description": "Romantic gifts to celebrate years of love and togetherness.",
            "itemCount": 5
        }
    ]);
    const gifts = ref([
        {
            "id": 1,
            "name": "Luxury Hajj Gift 1",
            "category": "hajj-gifts",
            "price": 59,
            "image": gift1Image
        },
        {
            "id": 2,
            "name": "Luxury Hajj Gift 2",
            "category": "hajj-gifts",
            "price": 69,
            "image": gift2Image
        },
        {
            "id": 3,
            "name": "Luxury Hajj Gift 3",
            "category": "hajj-gifts",
            "price": 79,
            "image": gift3Image
        },
        {
            "id": 4,
            "name": "Luxury Hajj Gift 4",
            "category": "hajj-gifts",
            "price": 89,
            "image": gift4Image
        },
        {
            "id": 5,
            "name": "Luxury Hajj Gift 5",
            "category": "hajj-gifts",
            "price": 99,
            "image": gift5Image
        },
        {
            "id": 6,
            "name": "Luxury Umrah Gift 1",
            "category": "umrah-gifts",
            "price": 59,
            "image": umrah1Image
        },
        {
            "id": 7,
            "name": "Luxury Umrah Gift 2",
            "category": "umrah-gifts",
            "price": 69,
            "image": umrah2Image
        },
        {
            "id": 8,
            "name": "Luxury Umrah Gift 3",
            "category": "umrah-gifts",
            "price": 79,
            "image": umrah3Image
        },
        {
            "id": 9,
            "name": "Luxury Umrah Gift 4",
            "category": "umrah-gifts",
            "price": 89,
            "image": umrah4Image
        },
        {
            "id": 10,
            "name": "Luxury Umrah Gift 5",
            "category": "umrah-gifts",
            "price": 99,
            "image": umrah5Image
        },
        {
            "id": 11,
            "name": "Luxury Eid Gift 1",
            "category": "eid-gifts",
            "price": 59,
            "image": eid1Image
        },
        {
            "id": 12,
            "name": "Luxury Eid Gift 2",
            "category": "eid-gifts",
            "price": 69,
            "image": eid2Image
        },
        {
            "id": 13,
            "name": "Luxury Eid Gift 3",
            "category": "eid-gifts",
            "price": 79,
            "image": eid3Image
        },
        {
            "id": 14,
            "name": "Luxury Eid Gift 4",
            "category": "eid-gifts",
            "price": 89,
            "image": eid4Image
        },
        {
            "id": 15,
            "name": "Luxury Eid Gift 5",
            "category": "eid-gifts",
            "price": 99,
            "image": eid5Image
        },
        {
            "id": 16,
            "name": "Luxury Ramadan Gift 1",
            "category": "ramadan-gifts",
            "price": 59,
            "image": ramadan1Image
        },
        {
            "id": 17,
            "name": "Luxury Ramadan Gift 2",
            "category": "ramadan-gifts",
            "price": 69,
            "image": ramadan2Image
        },
        {
            "id": 18,
            "name": "Luxury Ramadan Gift 3",
            "category": "ramadan-gifts",
            "price": 79,
            "image": ramadan3Image
        },
        {
            "id": 19,
            "name": "Luxury Ramadan Gift 4",
            "category": "ramadan-gifts",
            "price": 89,
            "image": ramadan4Image
        },
        {
            "id": 20,
            "name": "Luxury Ramadan Gift 5",
            "category": "ramadan-gifts",
            "price": 99,
            "image": ramadan5Image
        },
        {
            "id": 21,
            "name": "Luxury Birthday Gift 1",
            "category": "birthday-gifts",
            "price": 59,
            "image": birthday1Image
        },
        {
            "id": 22,
            "name": "Luxury Birthday Gift 2",
            "category": "birthday-gifts",
            "price": 69,
            "image": birthday2Image
        },
        {
            "id": 23,
            "name": "Luxury Birthday Gift 3",
            "category": "birthday-gifts",
            "price": 79,
            "image": birthday3Image
        },
        {
            "id": 24,
            "name": "Luxury Birthday Gift 4",
            "category": "birthday-gifts",
            "price": 89,
            "image": birthday4Image
        },
        {
            "id": 25,
            "name": "Luxury Birthday Gift 5",
            "category": "birthday-gifts",
            "price": 99,
            "image": birthday5Image
        },
        {
            "id": 26,
            "name": "Luxury Wedding Anniversary Gift 1",
            "category": "wedding-anniversary-gifts",
            "price": 59,
            "image": anniversary1Image
        },
        {
            "id": 27,
            "name": "Luxury Wedding Anniversary Gift 2",
            "category": "wedding-anniversary-gifts",
            "price": 69,
            "image": anniversary2Image
        },
        {
            "id": 28,
            "name": "Luxury Wedding Anniversary Gift 3",
            "category": "wedding-anniversary-gifts",
            "price": 79,
            "image": anniversary3Image
        },
        {
            "id": 29,
            "name": "Luxury Wedding Anniversary Gift 4",
            "category": "wedding-anniversary-gifts",
            "price": 89,
            "image": anniversary4Image
        },
        {
            "id": 30,
            "name": "Luxury Wedding Anniversary Gift 5",
            "category": "wedding-anniversary-gifts",
            "price": 99,
            "image": anniversary5Image
        }
    ]);
    const pending = ref(false);
    const error = ref(null);

    const getByCategory = (slug) => {
        if (!slug || slug === "all") return gifts.value;
        return gifts.value.filter((g) => g.category === slug);
    };

    const getCategoryLabel = (slug) => {
        const found = categories.value.find((c) => c.slug === slug);
        return found ? found.label : slug;
    };

    return { gifts, categories, pending, error, getByCategory, getCategoryLabel };
};
