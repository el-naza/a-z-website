/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import {
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";
import Marquee from "./animata/container/marquee";

export function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
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
          faq="What exactly does A-Z New Age Tutors offer?"
          answer="We provide personalized home and virtual tutoring for all grades. Our services cover academics, life skills, emotional growth, and special programs like summer transformation, learning pods, and parent-child learning support."
        ></FaqItem>
        <FaqItem
          faq="Are your tutors trained and vetted?"
          answer="Yes. Every tutor passes through a strict screening and training process, including academic testing, child safety checks, teaching demos, and soft skills development. We prioritize both subject mastery and learner care."
        ></FaqItem>
        <FaqItem
          faq="What locations do you cover?"
          answer="We offer in-person tutoring all round Nigeria: Lagos, Abuja, Port Harcourt, Ibadan. We also cover other parts of Nigeria on request, and our virtual programs serve families nationwide and in the Diaspora, including the UK, US, Canada, UAE, and more."
        ></FaqItem>
        <FaqItem
          faq="What curriculum do you follow?"
          answer="We support British, Nigerian, and hybrid curricula. Tutors align with your child's school syllabus or create custom learning plans based on your goals, including assessments and gap-filling strategies."
        ></FaqItem>
        <FaqItem
          faq="Do you offer both group and one-on-one tutoring?"
          answer="Yes! We offer: 1-on-1 sessions for personal lessons, Small groups (2 or more learners), Learning Pods (house-based mini bootcamps during holidays), Online clubs for skills and interactive learning."
        ></FaqItem>
        <FaqItem
          faq="How do I book a tutor or join a program?"
          answer="Simply: Chat with us on WhatsApp, Fill a short enrolment form, Schedule a free consultation call. We'll guide you through program options, pricing, and tutor matching."
        ></FaqItem>
        <FaqItem
          faq="What locations do you cover?"
          answer="We tutor learners of all ages, from early years to tertiary institutions."
        ></FaqItem>
        <FaqItem
          faq="What ages do you tutor?"
          answer="We tutor learners of all ages, from early years to tertiary institutions."
        ></FaqItem>
        <FaqItem
          faq="How do you match learners with tutors?"
          answer="We carefully match tutors with learners based on their individual needs, learning style, and goals."
        ></FaqItem>
        <FaqItem
          faq="How often are tutoring sessions held?"
          answer="Tutoring sessions can be scheduled as frequently or infrequently as needed, depending on the learner's needs."
        ></FaqItem>
        <FaqItem
          faq="Do you offer any additional resources or support?"
          answer="Yes, we offer a range of additional resources and support, including homework, study skills coaching, test preparation, and extracurricular activities."
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
        className="max-md:min-w-[15px] min-w-[25px]"
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
      className={`rounded-[45px] flex items-center justify-center leading-none ${
        secondary
          ? "border-primary2 border-[2px] text-primary2 bg-white max-md:px-[20.5px] max-md:py-[10.5px]"
          : "bg-primary2 text-white max-md:px-[22px] max-md:py-[12px]"
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
    <div className="relative flex h-full max-h-96 min-h-72 w-full min-w-72 max-w-xl items-center justify-center overflow-hidden rounded-[10px] py-6 bg-white">
      <Marquee pauseOnHover applyMask>
        <div className="flex gap-8">
          <Image
            alt="review"
            src="/whatsapp-reviews/1.jpeg"
            width={320}
            height={150}
            className="rounded-[10px]"
            objectFit="cover"
          />
          <Image
            alt="review"
            src="/whatsapp-reviews/2.jpeg"
            width={300}
            height={150}
            objectFit="cover"
            className="rounded-[10px]"
          />
          <Image
            alt="review"
            src="/whatsapp-reviews/3.jpeg"
            width={450}
            height={150}
            className="rounded-[10px]"
          />
          <Image
            alt="review"
            src="/whatsapp-reviews/4.jpeg"
            width={450}
            height={150}
            className="rounded-[10px]"
            objectFit="cover"
          />
          <Image
            alt="review"
            src="/whatsapp-reviews/5.jpeg"
            width={300}
            height={150}
            className="rounded-[10px]"
            objectFit="cover"
          />
          <Image
            alt="review"
            src="/whatsapp-reviews/6.jpeg"
            width={300}
            height={150}
            className="rounded-[10px]"
            objectFit="cover"
          />
          <Image
            alt="review"
            src="/whatsapp-reviews/7.jpeg"
            width={300}
            height={150}
            objectFit="cover"
            className="rounded-[10px]"
          />
          <div className=" w-0.5 text-[#00000000]">.</div>
        </div>
      </Marquee>
    </div>
  );
}
