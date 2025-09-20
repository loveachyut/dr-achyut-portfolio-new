import albumimage1 from "@/assets/1.png";
import albumimage2 from "@/assets/2.png";
import albumimage3 from "@/assets/3.png";
import albumimage4 from "@/assets/4.png";
import albumimage5 from "@/assets/5.png";
import albumimage6 from "@/assets/6.png";
import albumimage7 from "@/assets/7.png";
import albumimage8 from "@/assets/8.png";
import albumimage9 from "@/assets/9.png";
import albumimage10 from "@/assets/10.png";
import albumimage11 from "@/assets/11.png";




import { StaticImageData } from "next/image";

export interface Album {
  id: string;
  title: string;
  songCount: number;
  type: "Album" | "Single";
  description: string;
  youtubeId?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  image: string | StaticImageData;
}

export const albums: Album[] = [
  {
    id: "1",
    title: "Astronaut To Mars",
    songCount: 1,
    type: "Single",
    description:
      "A cosmic journey through sound, exploring the vastness of space and human dreams.",
    youtubeId: "SR30bztPQLA",
    spotifyUrl:
      "https://open.spotify.com/track/36Qey67j4g1Z922LrIwkUX?si=0461394d2f224d6c",
    image: albumimage1,
  },
  {
    id: "2",
    title: "Abasar Deu",
    songCount: 1,
    type: "Single",
    description:
      "An empowering melody that inspires hope and opportunities, blending cultural rhythms with therapeutic harmonies to promote emotional growth and healing.",
    youtubeId: "koAQMscyzFI",
    spotifyUrl:
      "https://open.spotify.com/track/47WVM7tKZiSF2gRHVt3DDV?si=8fd38b8319de4981",
    image: albumimage2,
  },
  {
    "id": "3",
    "title": "Andhakar Pachi ko Ujelo",
    "songCount": 1,
    "type": "Single",
    "description": "A soulful melody capturing light emerging from darkness.",
    "youtubeId": "nbFsT1gtyYI",
    "spotifyUrl": "https://open.spotify.com/track/3vLQyu156eyysWdyi3GvbB?si=cf8d07fcc9e24bca",
    "image": "albumimage3"
  },
  {
    "id": "4",
    "title": "Echo Of Birds",
    "songCount": 1,
    "type": "Album",
    "description": "Nature-inspired sounds echoing the serenity of birds.",
    "youtubeId": "LAi0swTLB1U",
    "spotifyUrl": "https://open.spotify.com/album/1Hv2cNExUZyNEzr08rMplE?si=73-es0VRQPO8whFMReMXwQ",
    "image": "albumimage4"
  },
  {
    "id": "5",
    "title": "Guitar Bajdai Garda",
    "songCount": 1,
    "type": "Single",
    "description": "A vibrant guitar-driven track full of energy.",
    "youtubeId": "7n4VVdyP4Y0",
    "spotifyUrl": "https://open.spotify.com/track/6xoY3mHGJ2UwRHIkINGIo3?si=67ccdc8420104599",
    "image": "albumimage5"
  },
  {
    "id": "6",
    "title": "Flute (Bansuri) of Himalayas",
    "songCount": 1,
    "type": "Single",
    "description": "A tranquil bansuri melody from the Himalayas.",
    "youtubeId": "EVexYY98fcU",
    "spotifyUrl": "https://open.spotify.com/track/2N7YlxnIt2MXwadCUl7Iis?si=5f1247884d314366",
    "image": "albumimage6"
  },
  {
    "id": "7",
    "title": "Instruments of Heaven",
    "songCount": 1,
    "type": "Album",
    "description": "Celestial sounds blending divine instruments.",
    "youtubeId": "kDIjoN942gA",
    "spotifyUrl": "https://open.spotify.com/album/5uNkPtYzxwxZpVryHp7FAZ?si=pz0trXJmTIu78NesHZE-Ew",
    "image": "albumimage7"
  },
  {
    "id": "8",
    "title": "Love Wish",
    "songCount": 1,
    "type": "Single",
    "description": "A heartfelt tune expressing love and longing.",
    "youtubeId": "u6kJeFoxEsQ",
    "spotifyUrl": "https://open.spotify.com/track/25jN8GWfWBTdVm45lbhySC?si=8db852d38ea34c00",
    "image": "albumimage8"
  },
  {
    "id": "9",
    "title": "Upahar Timlai",
    "songCount": 1,
    "type": "Single",
    "description": "A touching gift of music for loved ones.",
    "youtubeId": "70Ib08lXKvE",
    "spotifyUrl": "https://open.spotify.com/track/7kXiwclsxUgRalCFlQiatu?si=fdd7979652504a0d",
    "image": "albumimage9"
  },
  {
    "id": "10",
    "title": "Tune Of Healing (Buddha's Notes)",
    "songCount": 1,
    "type": "Single",
    "description": "Soothing notes inspired by Buddha’s wisdom.",
    "youtubeId": "bmPWYtfNA5g",
    "spotifyUrl": "https://open.spotify.com/track/5pjqVJLTWgnltvKlJtTLcb?si=6fd280b1de4c4d98",
    "image": "albumimage10"
  },
  {
    "id": "11",
    "title": "Orchestral Romance",
    "songCount": 1,
    "type": "Single",
    "description": "A romantic orchestral piece full of emotion.",
    "youtubeId": "sFZ3RtcaaaU",
    "spotifyUrl": "https://open.spotify.com/track/20IZu4hpSGoiWb0HR6BZ00?si=67470f96540e4c48",
    "image": "albumimage11"
  }
];
