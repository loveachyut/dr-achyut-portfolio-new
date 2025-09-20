import albumimage1 from "@/assets/1.png";
import albumimage2 from "@/assets/2.png";
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
];
