/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}

export function ConsultUs() {
  return (
    <div
      className="flex gap-[60px] m-auto mb-[147px] max-w-[1010px] px-[40px] py-[32px] rounded-[74px] items-center"
      style={{
        boxShadow: "0px 1px 22.8px 0px #00000012",
      }}
    >
      <Image
        src="/customer-care-rep.png"
        alt="customer care representative"
        width={272}
        height={620}
        className="rounded-[700px]"
        style={{
          boxShadow: "0px 0px 42.1px 0px #0000001A",
        }}
      />
      <div className="flex-1">
        <p className="bg-gradient-to-r from-[#50E4ED] to-[#3492D6] text-[transparent] bg-clip-text text-[64px] leading-[76.8px] mb-[4px]">
          Consult Us
        </p>
        <p className="mb-[20px]">
          Let's discuss your needs. We're here to help.
        </p>
        <div className="flex flex-col gap-[20px]">
          <CustomInput placeholder="Full name" />
          <CustomInput type="email" placeholder="Email address" />
          <CustomInput placeholder="Enter coupon" />
          <CustomInput type="email" placeholder="Confirm email address" />
          <CustomTextArea
            name=""
            id=""
            // cols={30}
            rows={7.2}
            placeholder="Write your message here"
          />
        </div>
        <div className="flex flex-col pt-[16px] gap-[20px]">
          <Image
            src="/send.svg"
            alt="send"
            width={80}
            height={80}
            className="self-end"
          />
          <p className="tiny text-primary2">Message Us on Whatsapp instead</p>
        </div>
      </div>
    </div>
  );
}

const inputClasses = "bg-gray2 px-[20px] placeholder:text-gray rounded-[10px]";

export function CustomInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${inputClasses} py-[29px]`} {...props} />;
}

export function CustomTextArea({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={`${inputClasses} py-[20px] resize-none`} {...props} />
  );
}

export function CallToApply() {
  return (
    <div className="flex gap-[16px] max-w-[1010px] m-auto mb-[230px] items-center bg-gradient-to-r from-[#579797] to-[#03A4AE9C] pl-[101px] pr-[64px] py-[46px] rounded-[12px]">
      <WordingItem gapClass="gap-[16px]" className="text-white">
        <h4>Become a tutor in A-Z New Age Tutors</h4>
        <p>
          Make a Difference. Join Our Team of Passionate Tutors. Empower
          Students; share Your Knowledge; become a Tutor. 
        </p>
      </WordingItem>

      <CustomButton secondary>
        <h5 className="text-primary2">Apply</h5>
      </CustomButton>
    </div>
  );
}

export function Faqs() {
  return (
    <div className="flex gap-[24px] m-auto mb-[230px] max-w-[895px] flex-col items-center">
      <h2 className="text-primary">Frequently asked asked questions</h2>
      <h5 className="font-normal">
        Find the answers you need and get started today!
      </h5>
      <div className="w-full flex flex-col gap-[12px] px-[7.5px]">
        <FaqItem
          faq="What services do you offer?"
          answer="Some answer to the question asked above"
        ></FaqItem>
        <FaqItem
          faq="What services do you offer?"
          answer="Some answer to the question asked above"
        ></FaqItem>
        <FaqItem
          faq="What services do you offer?"
          answer="Some answer to the question asked above"
        ></FaqItem>
        <FaqItem
          faq="What services do you offer?"
          answer="Some answer to the question asked above"
        ></FaqItem>
      </div>
    </div>
  );
}

export function FaqItem({
  faq,
  answer,
  ...props
}: Readonly<{
  faq: string;
  answer: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className="flex bg-gray-blue p-[32px] rounded-[12px] justify-between ">
      <div className="flex flex-col gap-[12px]">
        <h5>{faq}</h5>
        <p className="tiny">{answer}</p>
      </div>
      <Image src="/chevron.svg" alt="dropdown" width={25} height={13.75} />
    </div>
  );
}

export function ItemCard({
  className,
  children,
  ...props
}: Readonly<{
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col items-start ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CustomButton({
  children,
  secondary,
  ...props
}: Readonly<{
  secondary?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`rounded-[45px] px-[50px] py-[20px] flex items-center justify-center leading-none ${
        secondary
          ? "border-primary2 border-[2px] text-primary2 bg-white"
          : "bg-primary2 text-white"
      } text-[24px] leading-[28.8px] `}
      {...props}
    >
      {children}
    </div>
  );
}

export function TestimonialCard({
  testimony,
  testifier,
  role,
  dpUrl,
  className,
  ...props
}: Readonly<{
  testimony: string;
  testifier: string;
  role: string;
  dpUrl: string;
  className?: string;
}>) {
  return (
    <div
      style={{
        boxShadow: "0px 0px 42.1px 0px #0000001A",
      }}
      className={`rounded-[10px] px-[20px] py-[30px] bg-white text-[16px] leading-[19.2px] flex flex-col gap-[12px] min-w-[425px] ${className}`}
      {...props}
    >
      <Image
        className="mt-[12px]"
        src="/quote-start.svg"
        alt={'"'}
        width={24}
        height={38.4}
      />
      <div>{testimony}</div>
      <div className="flex gap-[14px] items-center">
        <Image
          className="rounded-full h-[60px] aspect-square"
          src={dpUrl}
          alt="profile"
          width={60}
          height={60}
        />
        <div>
          <div className="font-bold mb-[4px]">{testifier}</div>
          <div>{role}</div>
        </div>
      </div>
    </div>
  );
}

export function WordingItem({
  gapClass,
  className,
  children,
  ...props
}: Readonly<{
  gapClass?: string;
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={`flex flex-col ${
        gapClass || "gap-[30px]"
      } items-start ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}





