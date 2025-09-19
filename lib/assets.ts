export interface Album {
  id: string
  title: string
  songCount: number
  type: "Album" | "Single"
  description: string
  youtubeId?: string
  spotifyUrl?: string
  appleMusicUrl?: string
}

export const albums: Album[] = [
  {
    id: "1",
    title: "Astronaut To Mars",
    songCount: 1,
    type: "Single",
    description: "A cosmic journey through sound, exploring the vastness of space and human dreams.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube ID
  },
  {
    id: "2",
    title: "Echo Of Birds",
    songCount: 7,
    type: "Album",
    description: "Nature-inspired compositions featuring bird songs and natural harmonies.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    title: "Ishq Ke Raaste",
    songCount: 8,
    type: "Album",
    description: "Romantic melodies exploring the paths of love and emotional connections.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "4",
    title: "Manko Bagaicha",
    songCount: 12,
    type: "Album",
    description: "A garden of the heart - traditional Nepali melodies with modern arrangements.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "5",
    title: "Flute (Bansuri) of Himalayas",
    songCount: 8,
    type: "Album",
    description: "Traditional Himalayan flute music for meditation and spiritual healing.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "6",
    title: "Instruments Of Heaven",
    songCount: 11,
    type: "Album",
    description: "Divine instrumental compositions that connect earth and sky.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "7",
    title: "Love Wish",
    songCount: 9,
    type: "Album",
    description: "Heartfelt compositions expressing the deepest desires of love.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "8",
    title: "Upahar Timilai",
    songCount: 11,
    type: "Album",
    description: "A gift of music - dedicated compositions for loved ones.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "9",
    title: "Tune Of Healing (Buddha's Notes)",
    songCount: 9,
    type: "Album",
    description: "Therapeutic music inspired by Buddhist philosophy and healing practices.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "10",
    title: "Orchestral Romance",
    songCount: 10,
    type: "Album",
    description: "Grand orchestral arrangements celebrating love and romance.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "11",
    title: "Nothing But Solid Beat",
    songCount: 8,
    type: "Album",
    description: "Rhythmic compositions focusing on powerful beats and percussion.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "12",
    title: "World Of Joy",
    songCount: 7,
    type: "Album",
    description: "Uplifting melodies designed to bring happiness and positive energy.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "13",
    title: "Melodic Bundle (Electronic Heaven)",
    songCount: 14,
    type: "Album",
    description: "Electronic music collection blending digital sounds with organic melodies.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "14",
    title: "Prem Mein Prabhu",
    songCount: 4,
    type: "Album",
    description: "Spiritual love songs dedicated to divine connection and devotion.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "15",
    title: "Lost To Beat",
    songCount: 4,
    type: "Album",
    description: "Experimental rhythms exploring the boundaries of musical expression.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "16",
    title: "Christmas Wish",
    songCount: 6,
    type: "Album",
    description: "Festive compositions celebrating the joy and spirit of Christmas.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "17",
    title: "Mero Mutu Ma Timi",
    songCount: 1,
    type: "Single",
    description: "A heartfelt Nepali love song expressing deep emotional connection.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "18",
    title: "Kaushi Ko Woripari",
    songCount: 1,
    type: "Single",
    description: "Traditional Nepali melody with contemporary arrangement.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "19",
    title: "Ek Palta Suni Deuna",
    songCount: 1,
    type: "Single",
    description: "A pleading love song with beautiful Nepali lyrics and melody.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "20",
    title: "Hola Timi Vanda",
    songCount: 1,
    type: "Single",
    description: "Romantic Nepali composition expressing love and longing.",
    youtubeId: "dQw4w9WgXcQ",
  },
]
