/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

export function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}

// export function ConsultUs() {
//   return (
//       <div className="relative flex flex-wrap bg-white gap-[60px] gap-y-[16px] md:m-auto md:mb-[147px] mb-[147px] max-w-[1010px] px-[40px] py-[32px] rounded-[74px] items-center shadow-[0px_1px_22.8px_0px_#00000012] justify-center">
//         <div id="consult-us" className="absolute top-[-120px]"/>
//         <Image
//             src="/customer-care-rep.png"
//             alt="customer care representative"
//             width={272}
//             height={620}
//             className="max-md:w-[145px] max-md:h-[299px] rounded-[700px] shadow-[0px_0px_42.1px_0px_#0000001A]"
//         />
//         <div className="flex-1 max-md:text-center">
//           <p className="font-anybody bg-gradient-to-r from-[#50E4ED] to-[#3492D6] text-[transparent] bg-clip-text text-[64px] leading-[76.8px] mb-[4px] max-md:text-[24px] max-md:leading-[28.8px] max-md:font-bold">
//             Consult Us
//           </p>
//           <p className="mb-[20px]">
//             Let's discuss your needs. We're
//             <br className="md:hidden"/> here to help.
//           </p>
//           <div className="flex flex-col gap-[20px]">
//             <CustomInput placeholder="Full name"/>
//             <CustomInput type="email" placeholder="Email address"/>
//             <CustomInput placeholder="Enter coupon"/>
//             <CustomInput type="email" placeholder="Confirm email address"/>
//             <CustomTextArea
//                 name=""
//                 id=""
//                 // cols={30}
//                 rows={7.2}
//                 placeholder="Write your message here"
//             />
//           </div>
//           <div className="flex flex-col pt-[16px] gap-[20px]">
//             <Image
//                 src="/send.svg"
//                 alt="send"
//                 width={80}
//                 height={80}
//                 className="self-end max-md:w-[60px]"
//             />
//             <p className="tiny text-primary2">Message Us on Whatsapp instead</p>
//           </div>
//         </div>
//       </div>
//   );
// }

export function ConsultUs() {
  return (
    <div className="relative flex justify-center w-full">
      <div id="consult-us" className="absolute top-[-120px]" />
      <div className="flex max-md:flex-col flex-wrap bg-white gap-[60px] gap-y-[16px] md:m-auto md:mb-[147px] mb-[147px] max-w-[1010px] max-md:px-0 px-[40px] py-[32px] rounded-[36px] md:rounded-[74px] items-center shadow-[0px_1px_22.8px_0px_#00000012] justify-center">
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
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScYoBZ_0Jbm5gHU1VX-zieRtdM15SOehytpMgzUSeZvqLG5mg/viewform?embedded=true"
            width="100%"
            height="1050"
          >
            Loading…
          </iframe>
          {/*<div className="flex flex-col gap-[20px]">
            <CustomInput placeholder="Full name" />
            <CustomInput type="email" placeholder="Email address" />
            <CustomInput placeholder="Enter coupon" />
            <CustomInput type="email" placeholder="Confirm email address" />
            <CustomTextArea
              name=""
              id=""
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
          </div>*/}
        </div>
      </div>

      <Image
        src="/Ellipse.svg"
        alt="ellipse"
        width={94}
        height={94}
        className="absolute -top-[75px] -left-[38px] -z-[10] max-md:-top-[60px] max-md:h-[60px] max-md:w-[60px] max-md:-left-[30px]"
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
        <h4 className="text-white">Become a tutor with A-Z New Age Tutors</h4>
        <p>
          Make a <strong>difference</strong>. Join our team of passionate
          tutors. Empower learners and share your knowledge. 
        </p>
      </WordingItem>
      <Link href="/career">
        <CustomButton secondary>
          <h5 className="text-primary2 font-bold">Apply</h5>
        </CustomButton>
      </Link>
    </div>
  );
}

export function Faqs() {
  return (
    <div className=" relative flex gap-[24px] m-auto md:mb-[230px] mb-[60px] max-w-[895px] flex-col items-center">
      <h2 className="text-primary  text-center">Frequently Asked Questions</h2>
      <h5 className="font-normal text-center m">
        Find the answers you need and get started today!
      </h5>
      <div className="w-full flex flex-col gap-[12px] px-[7.5px]">
        <FaqItem
          faq="What ages do you tutor?"
          answer="We tutor learners of all ages, from early years to tertiary institutions."
        ></FaqItem>
        <FaqItem
          faq="How do you match learners with tutors?"
          answer="We carefully match tutors with learners based on their individual needs, learning style, and goals."
        ></FaqItem>
        <div className="flex bg-gray-blue p-[20px] md:p-[32px] rounded-[12px] justify-between gap-5">
          <div className="flex flex-col gap-[12px]">
            <h5 className="max-md:font-normal">
              How do I get started with your services?
            </h5>
            <p className="tiny">
              Fill out our application form{" "}
              <Link href="/application-from" className="text-[blue]">
                here
              </Link>
              .
            </p>
          </div>
          <Image
            src="/chevron.svg"
            alt="dropdown"
            width={25}
            height={13.75}
            className="max-md:w-[15px]"
          />
        </div>
        {/* <FaqItem
          faq=""
          answer={``}
        ></FaqItem> */}
        <FaqItem
          faq="How often are tutoring sessions held?"
          answer="Tutoring sessions can be scheduled as frequently or infrequently as needed, depending on the learner's needs."
        ></FaqItem>
        <FaqItem
          faq="Do you offer any additional resources or support?"
          answer="Yes, we offer a range of additional resources and support, including homework, study skills coaching, and test preparation."
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
    <div className="flex bg-gray-blue p-[20px] md:p-[32px] rounded-[12px] justify-between gap-5">
      <div className="flex flex-col gap-[12px]">
        <h5 className="max-md:font-normal">{faq}</h5>
        <p className="tiny">{answer}</p>
      </div>
      <Image
        src="/chevron.svg"
        alt="dropdown"
        width={25}
        height={13.75}
        className="max-md:w-[15px]"
      />
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
    <div
      className={`flex items-center border-2 border-gray2 p-4 rounded-[32px] gap-[16px] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CustomButton({
  children,
  secondary,
  small,
  ...props
}: Readonly<{
  secondary?: boolean;
  small?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`rounded-[45px] max-md:px-[32px] max-md:py-[12px] flex items-center justify-center leading-none ${
        secondary
          ? "border-primary2 border-[2px] text-primary2 bg-white"
          : "bg-primary2 text-white"
      } ${
        small ? "px-[20px] py-[13px]" : "px-[50px] py-[20px]"
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
}: Readonly<
  {
    gapClass?: string;
    className?: string;
    children?: React.ReactNode;
  } & HTMLAttributes<HTMLElement>
>) {
  // console.log("props", props)
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

export function WhatsappReviews() {
  return (
    <div className="flex gap-8">
      <Image
        alt="review"
        src="/whatsapp-reviews/1.jpeg"
        width={320}
        height={1000}
        className="rounded-[10px]"
        objectFit="cover"
      />
      <Image
        alt="review"
        src="/whatsapp-reviews/2.jpeg"
        width={300}
        height={1000}
        objectFit="cover"
        className="rounded-[10px]"
      />
      <Image
        alt="review"
        src="/whatsapp-reviews/3.jpeg"
        width={300}
        height={1000}
        className="rounded-[10px]"
        objectFit="cover"
      />
      <Image
        alt="review"
        src="/whatsapp-reviews/4.jpeg"
        width={300}
        height={1000}
        className="rounded-[10px]"
        objectFit="cover"
      />
      <Image
        alt="review"
        src="/whatsapp-reviews/5.jpeg"
        width={300}
        height={1000}
        className="rounded-[10px]"
        objectFit="cover"
      />
      <Image
        alt="review"
        src="/whatsapp-reviews/6.jpeg"
        width={300}
        height={1000}
        className="rounded-[10px]"
        objectFit="cover"
      />
      <Image
        alt="review"
        src="/whatsapp-reviews/7.jpeg"
        width={300}
        height={1000}
        objectFit="cover"
        className="rounded-[10px]"
      />
      <div className="w-8 text-[#00000000]">.</div>
    </div>
  );
}
