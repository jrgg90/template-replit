"use client"

import AutoScroll from "embla-carousel-auto-scroll"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'

const logos = [
  {
    id: "amazon",
    description: "Amazon",
    image: "/logos-partners-png/amazon.png",
  },
  {
    id: "ebay",
    description: "eBay",
    image: "/logos-partners-png/ebay.png",
  },
  {
    id: "etsy",
    description: "Etsy",
    image: "/logos-partners-png/etsy.png",
  },
  {
    id: "mercadolibre",
    description: "Mercado Libre",
    image: "/logos-partners-png/mercadolibre.png",
  },
  {
    id: "shopify",
    description: "Shopify",
    image: "/logos-partners-png/shopify.png",
  },
  {
    id: "walmart",
    description: "Walmart",
    image: "/logos-partners-png/walmart.png",
  },
  {
    id: "woocommerce",
    description: "WooCommerce",
    image: "/logos-partners-png/woo.png",
  },    
  {
    id: "alibaba",
    description: "Alibaba",
    image: "/logos-partners-png/alibaba.png",
  },
  {
    id: "faire",
    description: "Faire",
    image: "/logos-partners-png/faire.png",
  },
  {
    id: "magento",
    description: "Magento",
    image: "/logos-partners-png/magento.png",
  },
  {
    id: "rakuten",
    description: "Rakuten",
    image: "/logos-partners-png/rakuten.png",
  },
  {
    id: "square",
    description: "Square",
    image: "/logos-partners-png/squarespace.png",
  },
  {
    id: "tiktok",
    description: "Tiktok",
    image: "/logos-partners-png/tiktok.png",
  },
  {
    id: "webflow",
    description: "Webflow",
    image: "/logos-partners-png/webflow.png",
  },
  {
    id: "wix",
    description: "Wix",
    image: "/logos-partners-png/wix.png",
  }
]

export function PartnersCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8 mb-16">
      <div className="relative mx-auto">
        <Carousel
          opts={{
            loop: true,
            align: "start",
            skipSnaps: false,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              stopOnInteraction: false,
              speed: 0.5,
            }),
          ]}
        >
          <CarouselContent className="flex">
            {[...logos, ...logos].map((logo, index) => (
              <CarouselItem 
                key={index} 
                className="min-w-[110px] flex-shrink"
              >
                <div className="flex items-center justify-center h-24 px-0">
                  <Image
                    src={logo.image}
                    alt={logo.description}
                    width={200}
                    height={120}
                    className="w-auto h-16 object-contain hover:filter-none hover:scale-105 transition-all duration-100"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  )
} 