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
import Link from "next/link";

const routeTitle: Record<string, string> = {
  "coding-for-kids-and-teens": "Coding for kids and teens",
  "core-subjects-for-all-grades": "Core subjects for all grades",
  "foreign-languages": "FOREIGN LANGUAGES",
  "home-schooling": "Home Schooling",
  "montessori-and-eyfs-education": "Montessori and EYFS Education",
  "nigerian-languages": "Nigerian Languages",
  "one-on-one-private-tutoring": "One-on-one Private Tutoring",
  "sat,-igcse,-ielts-exams": "SAT, IGCSE, IELTS exams",
  "special-needs-education": "Special Needs Education",
  "standardized-exams": "Standardized Exams",
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
        <div className="md:mb-[84px] mb-[60px] md:mt-[152px] mt-[28px] md:h-[508px] h-[163.19px] overflow-hidden md:rounded-[60px] rounded-[30px] text-white flex items-center justify-center max-w-[1110px] relative">
          <Image
            src={`${pathName}-l.png`}
            alt="coding-for-kids-and-teens"
            width={1110}
            height={508}
            className="w-full h-full absolute z-[-10]"
          />
          <div className="absolute flex h-full z-[-10] w-full items-center justify-center opacity-[60%] bg-[#0c0c0c]" />
          <h1 className="md:text-[64px] md:leading-[76.8px] w-[635px] text-center text-white">
            {routeTitle[pathName.split("/").at(-1)!]}
            {pathName.includes("foreign") && (
              <span className="text-[14px] text-gray">
                <br />
                Image from freepik
              </span>
            )}
          </h1>
        </div>

        <article className="max-md:px-[17px]">{children}</article>
      </section>

      <Link href="#consult-us">
        <div
          className="md:w-[544px] w-[218px] m-auto mt-[60px] md:mb-[150px] mb-[60px] rounded-full md:h-[100px] h-[69px] leading-none p-[4px] pr-[4.5px] [background-image:linear-gradient(180deg,_#50E4ED_0%,_#3492D6_100%)] text-primary2 bg-white text-[24px]"
          // style={{
          //   backgroundImage: "linear-gradient(180deg, #50E4ED 0%, #3492D6 100%)",
          // }}
        >
          <span className="h-full w-full rounded-full  bg-white flex items-center justify-center">
            <span className="[background-image:linear-gradient(180deg,_#50E4ED_0%,_#3492D6_100%)] text-[transparent] bg-clip-text">
              Consult Us
            </span>
          </span>
        </div>
      </Link>
      <Faqs />
    </>
  );
}
