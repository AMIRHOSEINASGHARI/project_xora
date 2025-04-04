"use client";

import Image from "next/image";

import { Element, Link as LinkScroll } from "react-scroll";

import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <section className="pt-40 pb-40 relative">
      <Element name="hero">
        <div className="container-base">
          <div className="flex flex-col max-w-512 relative z-2 max-lg:max-w-388 lg:pt-20">
            <span className="caption">Video Editing</span>
            <h1 className="h1 mb-6 uppercase text-p4 max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly simple
            </h1>
            <p className="body-1 max-w-440 mb-14 max-md:mb-10">
              We designed XORA AI Video Editor to be an easy to use, quick to
              learn, and surprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src="/images/hero.png"
              width={1300}
              height={1000}
              alt="hero"
              className="size-1230 max-lg:h-auto"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
