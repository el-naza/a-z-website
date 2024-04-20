"use client";
import Image from "next/image";
import {
  CallToApply,
  ConsultUs,
  CustomButton,
  Faqs,
  ItemCard,
  TestimonialCard,
  WordingItem,
} from "../components";
import { useParams, usePathname } from "next/navigation";

const routeTitle: Record<string, string> = {
  "coding-for-kids-and-teens": "Coding for kids and teens",
  "core-subjects-for-all-grades": "Core subjects for all grades",
  "french-language": "FRENCH LANGUAGE",
  "home-schooling": "Home Schooling",
  "montessori-and-eyfs-education": "Montessori and EYFS Education",
  "nigerian-languages": "Nigerian Languages",
  "one-on-one-private-tutoring": "One-on-one Private Tutoring",
  "sat,-igcse,-ielts-exams": "SAT, IGCSE, IELTS exams",
  "special-needs-education": "Special Needs Education",
  "waec,-jamb-and-neco-(gce)": "WAEC, JAMB AND NECO (GCE)",
};

export default function WhatWeDoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <>
      <section className="max-w-[1110px] m-auto">
        <div className="mb-[84px] mt-[152px] h-[508px] overflow-hidden rounded-[60px] text-white flex items-center justify-center">
          <Image
            src={`${pathName}-l.png`}
            alt="coding-for-kids-and-teens"
            width={1110}
            height={508}
            className="absolute z-[-10] rounded-[60px]"
          />
          <div className="absolute flex h-[508px] z-[-10] w-[1110px] items-center rounded-[60px] justify-center opacity-[60%] bg-[#0c0c0c]" />
          <h1 className="text-[64px] leading-[76.8px] w-[635px] text-center">
            {routeTitle[pathName.split("/").at(-1)!]}
          </h1>
        </div>
        <article>{children}</article>
      </section>

      <div className="max-w-[544px] m-auto mt-[60px] mb-[150px] rounded-full h-[100px] leading-none p-[4px] pr-[4.5px] [background-image:linear-gradient(180deg,_#50E4ED_0%,_#3492D6_100%)] text-primary2 bg-white text-[24px]">
        <span className="h-full w-full rounded-full  bg-white flex items-center justify-center">
          <span className="[background-image:linear-gradient(180deg,_#50E4ED_0%,_#3492D6_100%)] text-[transparent] bg-clip-text">
            Consult Us
          </span>
        </span>
      </div>
      <Faqs />
      <ConsultUs />
    </>
  );
}



















































