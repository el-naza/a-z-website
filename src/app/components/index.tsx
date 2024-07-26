/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"


export function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}

export function ConsultUs() {
  return (
    <div className="relative flex justify-center w-full">
      <div className="flex flex-wrap bg-white gap-[60px] gap-y-[16px] md:m-auto md:mb-[147px] mb-[147px] max-w-[1010px] px-[40px] py-[32px] rounded-[74px] items-center shadow-[0px_1px_22.8px_0px_#00000012] justify-center">
      <Image
        src="/customer-care-rep.png"
        alt="customer care representative"
        width={272}
        height={620}
        className="max-md:w-[145px] max-md:h-[299px] rounded-[700px] shadow-[0px_0px_42.1px_0px_#0000001A]"
      />

      
      <div className="flex-1 max-md:text-center">
        <p className="font-anybody bg-gradient-to-r from-[#50E4ED] to-[#3492D6] text-[transparent] bg-clip-text text-[64px] leading-[76.8px] mb-[4px] max-md:text-[24px] max-md:leading-[28.8px] max-md:font-bold">
          Consult Us
        </p>
        <p className="mb-[20px]">
          Let's discuss your needs. We're
          <br className="md:hidden" /> here to help.
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
            className="self-end max-md:w-[60px]"
          />
          <p className="tiny text-primary2">Message Us on Whatsapp instead</p>
        </div>
      </div>
     
      </div>

      <Image
            src="/Ellipse.svg"
            alt="ellipse"
            width={94}
            height={94}
            className="absolute -top-[75px] -left-[25px] -z-[10] max-md:-top-[60px] max-md:h-[60px] max-md:w-[60px] max-md:-left-[30px]"
          />

      <Image
            src="/measure.svg"
            alt="measure"
            width={54}
            height={94}
            className="absolute top-[60px] -right-[36.7px] -z-[10] max-md:top-[60px] max-md:h-[50px] max-md:w-[50px] max-md:-right-[70px]"
          />

       <Image
            src="/Ellipse1.svg"
            alt="ellipse"
            width={94}
            height={94}
            className="absolute top-[165px] -right-[36.7px] -z-[10] max-md:top-[120px] max-md:h-[60px] max-md:w-[60px] max-md:-right-[70px]"
          />
    </div>
  );
}

const inputClasses = "bg-gray2 px-[20px] placeholder:text-gray rounded-[10px]";

export function CustomInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`${inputClasses} py-[29px] max-md:py-[19.5px]`}
      {...props}
    />
  );
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
    <div className="flex max-md:flex-col gap-[16px] max-w-[1010px] m-auto md:mb-[230px] mb-[60px] items-center bg-gradient-to-r from-[#579797] to-[#03A4AE9C] px-[28px] md:pl-[101px] md:pr-[64px] py-[46px] rounded-[12px]">
      <WordingItem gapClass="gap-[16px]" className="text-white">
        <h4 className="text-white">Become a tutor in A-Z New Age Tutors</h4>
        <p>
          Make a Difference. Join Our Team of Passionate Tutors. Empower
          Students; share Your Knowledge; become a Tutor. 
        </p>
      </WordingItem>

      <CustomButton secondary>
        <h5 className="text-primary2 font-bold">Apply</h5>
      </CustomButton>
    </div>
  );
}

export function Faqs() {
  return (
    <div className="relative flex gap-[24px] m-auto md:mb-[230px] mb-[60px] max-w-[895px] flex-col items-center">
      <h2 className="text-primary text-center">Frequently Asked Questions</h2>
      <h5 className="font-normal text-center">
        Find the answers you need and get started today!
      </h5>
      <div className="w-full flex flex-col gap-[12px] px-[7.5px]">
        <Accordion  type="single" collapsible className="w-full">
          <AccordionItem value={"item 1"}>
            <AccordionTrigger>What services do you offer?</AccordionTrigger>
            <AccordionContent>Some answer to the question asked above</AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item 2"}>
            <AccordionTrigger>What are the benefits of using your services?</AccordionTrigger>
            <AccordionContent>Some answer to the question asked above</AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item 3"}>
            <AccordionTrigger>How do I get started with your services?</AccordionTrigger>
            <AccordionContent>Some answer to the question asked above</AccordionContent>
          </AccordionItem>
          <AccordionItem value={"item 4"}>
            <AccordionTrigger>Who are your services geared towards to?</AccordionTrigger>
            <AccordionContent>Some answer to the question asked above</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

// export function FaqItem({
//   faq,
//   answer,
//   ...props
// }: Readonly<{
//   faq: string;
//   answer: string;
//   children?: React.ReactNode;
// }>) {
//   return (
//     <div className="flex bg-gray-blue p-[20px] md:p-[32px] rounded-[12px] justify-between gap-5">
//       <div className="flex flex-col gap-[12px]">
//         <h5 className="max-md:font-normal">{faq}</h5>
//         <p className="tiny">{answer}</p>
//       </div>
//       <Image
//         src="/chevron.svg"
//         alt="dropdown"
//         width={25}
//         height={13.75}
//         className="max-md:w-[15px]"
//       />
//     </div>
//   );
// }

export function ItemCard({
  className,
  children,
  ...props
}: Readonly<{
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={`flex flex-col items-start border-2 border-gray2 p-4 rounded-[32px] gap-[16px] ${className}`}
      {...props}
    >
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
      className={`rounded-[45px] max-md:px-[32px] max-md:py-[12px] px-[50px] py-[20px] flex items-center justify-center leading-none ${
        secondary
          ? "border-primary2 border-[2px] text-primary2 bg-white"
          : "bg-primary2 text-white"
      } text-[24px] leading-[28.8px] max-md:text-[14px] max-md:leading-[19.2px] `}
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
      className={`rounded-[10px] px-[20px] md:py-[30px] py-[20px] bg-white md:text-[16px] md:leading-[19.2px] flex flex-col gap-[12px] md:min-w-[425px] min-w-[285px] shadow-lg ${className}`}
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
          className="rounded-full max-md:h-[50px] aspect-square"
          src={dpUrl}
          alt="profile"
          width={58.46}
          height={60}
        />
        <div>
          <div className="font-bold md:mb-[4px] font-anybody tiny">
            {testifier}
          </div>
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
