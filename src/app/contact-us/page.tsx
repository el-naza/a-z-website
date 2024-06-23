/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { ReactNode } from "react";

export default function OneOnOneHomeTutoring() {
  return (
    <>
      <section className="relative max-w-[1160px] m-auto mt-[136px] mb-[313px]">
        <h1 className="text-[64px] mb-[62px]">Contact Us</h1>
        <Image
          src="/contact-ppl.png"
          alt="contact"
          width={810}
          height={618}
          className="rounded-[32px]"
        />
        <div className="w-[698px] flex flex-col gap-[20px] px-[50px] py-[72px] bg-black opacity-90 rounded-[32px] absolute top-[53.5px] right-0">
          <Input placeholder="Full Name" />
          <Input placeholder="Email address" type="email" />
          <Input placeholder="Confirm email address" type="email" />
          <Input placeholder="Enter coupon" />
          <textarea
            placeholder="Write your message"
            className="resize-none p-[20px] rounded-[10px] text-[20px] leading-[24px] h-[237px] placeholder:text-gray"
          />
          <Image
            src="/send-contact.svg"
            alt="send contact"
            width={80}
            height={80}
            className="self-end"
          />

        
        </div>
      </section>
      <section className="max-w-[983px] m-auto mb-[238px] flex flex-row justify-center gap-[80px] flex-wrap font-bold">
        <Contact iconSrc="/whatsapp-contact.svg">+234 816 142 8680</Contact>
        <Contact iconSrc="/email-contact.svg">
          atoznewagetutors@gmail.com
        </Contact>
        <Contact iconSrc="/fb-contact.svg">A-Z New Age Tutors</Contact>
        <Contact iconSrc="/x-contact.svg">A2zNewageTutors</Contact>
        <Contact iconSrc="/insta-contact.svg">atoznewagetutorsnigeria</Contact>
      </section>
    </>
  );
}

function Contact({ iconSrc, children }: { iconSrc: string; children: any }) {
  return (
    <div className="flex flex-col gap-4 p-4 items-center bg-gray-blue rounded-[16px]">
      <Image src={iconSrc} width={80} height={80} alt="contact" />
      {children}
    </div>
  );
}

function Input({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="px-[20px] py-[29px] rounded-[10px] text-[20px] leading-[24px] placeholder:text-gray"
    />
  );
}
