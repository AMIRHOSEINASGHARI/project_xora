"use client";

import Image from "next/image";

import { faq } from "@/constants";

import { Element } from "react-scroll";

import FaqItem from "@/components/shared/FaqItem";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="container-base relative z-2 py-28">
          <div className="md:text-center md:flex md:flex-col md:items-center">
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn&apos;t kill the cat, it gave it answers.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              You&apos;ve got questions, we&apos;ve got answers.
            </p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>
        <div className="faq-glow_before relative z-2 border-y-2 border-s2 bg-s1">
          <div className="container-base flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <Image
                src="/images/faq-logo.svg"
                width={100}
                height={100}
                alt="logo"
                className="size-1/2"
              />
            </div>
            <div className="relative flex-1 pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} />
              ))}
            </div>
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} />
              ))}
            </div>
          </div>
          <div className="absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
