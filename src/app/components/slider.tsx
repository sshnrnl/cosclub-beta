import * as React from "react";
import Autoplay from "embla-carousel-react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Caveat_Brush, Caveat } from "next/font/google";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // specify weights you want to use
  variable: "--font-poppins",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  // weight optional if font has default
});

const caveatBrush = Caveat_Brush({
  weight: "400", // only 400 supported
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});

export function Slider() {
  //   const plugin = React.useRef(
  //     Autoplay({ delay: 2000, stopOnInteraction: true })
  //   );
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      setSelectedIndex(index); // for dot indicator
      setCurrent(index + 1); // for the text counter
      setCount(api.scrollSnapList().length);
    };

    onSelect(); // initial call
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const cosplay = [
    {
      name: "Michael Kaiser",
      anime: "Blue Lock",
      bio: "I don't chase dreams or follow anyone. I lead, I dominate,and I win. 👑⚽",
    },
    {
      name: "Easton's Student",
      anime: "Mashle",
      bio: "真の魔法使いは、その手の内を決して明かさない。💫",
    },
    {
      name: "Mikaela Hyakuya",
      anime: "Seraph of the End",
      bio: "Once I have the power, I'll get revenge for the death of my family.",
    },
  ];

  return (
    <Carousel
      //   plugins={[plugin.current]}
      className="w-[97%] "
      //   onMouseEnter={plugin.current.stop}
      //   onMouseLeave={plugin.current.reset}
      setApi={setApi}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem className="px-[36px]" key={index}>
            <div className="grid grid-cols-2 gap-4">
              <div className="w-full h-full flex flex-col justify-center gap-4">
                <div>
                  <p
                    className={`${caveatBrush.className} text-black text-2xl leading-[100%]`}
                  >
                    {cosplay[index].name}
                  </p>
                  <p
                    className={`${caveat.className} tetx-black text-xl text-black leading-[100%]`}
                  >
                    {cosplay[index].anime}
                  </p>
                  <p
                    className={`${poppins.className} tetx-black text-sm text-black leading-[125%] mt-2`}
                  >
                    {cosplay[index].bio}
                  </p>
                </div>
                <img
                  className="w-full aspect-auto"
                  src="/assets/cloudy/ig-button.png"
                  alt=""
                />
              </div>
              <div className="w-full aspect-[4/5] relative left-1/2 top-1/2 -translate-1/2">
                <img
                  className="absolute left-1/2 top-1/2 h-[98%] -translate-1/2 w-[98%] object-cover rounded-3xl z-0"
                  src={`/assets/cloudy/cosplay-${index + 1}.webp`}
                  alt=""
                />
                <img
                  className="w-full aspect-[4/5] relative z-10"
                  src="/assets/cloudy/cos-img-border.png"
                  alt=""
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex gap-2 w-full justify-center mt-4">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-[12px] aspect-square rounded-full bg-center bg-cover transition-opacity duration-500 ease-in"
            style={{
              opacity: selectedIndex === index ? 1 : 0.5,
              backgroundImage: `url(/assets/cloudy/dot-${index + 1}.png)`,
            }}
          />
        ))}
      </div>
    </Carousel>
  );
}
