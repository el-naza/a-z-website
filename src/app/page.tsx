/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import {
  WordingItem,
  CustomButton,
  ItemCard,
  TestimonialCard,
  CallToApply,
  Faqs,
  ConsultUs,
} from "./components";

export default function Home() {
  return (
    <>
      <section className="max-w-[1112px] m-auto mt-[28px] md:mt-[56px] md:mb-[183.44px] mb-[67.4px] md:justify-between md:items-end items-center flex max-md:flex-col justify-center ">
        <WordingItem className="max-w-[700px] max-md:text-center max-md:items-center">
          <h1>
            Is your Child struggling with
            <span className="text-secondary"> poor</span> grades?
          </h1>
          <div className="flex flex-col gap-[40px]">
            <p>
              Help Them Shine! Spark Their Potential with
              <br />
              Personalized Tutoring. 
            </p>
            <div className="flex gap-[48px] max-md:hidden">
              <CustomButton>Learn More</CustomButton>
              <CustomButton secondary>Consult Us</CustomButton>
            </div>
          </div>
        </WordingItem>
        <Image
          alt="happy kid"
          src="/happy-kid.png"
          // className="aspect-square rounded-full h-[200px]"
          width={430.29}
          height={404.47}
          className=" max-md:h-[225.6px] max-md:w-[240px]"
        />
        <div className="flex gap-[16px] mt-[20px] md:hidden">
          <CustomButton>Learn More</CustomButton>
          <CustomButton secondary>Consult Us</CustomButton>
        </div>
      </section>

      <section className="relative flex justify-between items-center max-w-[1271px] m-auto md:mb-[100px] mb-[70px] flex-col text-center">
        <WordingItem className="max-w-[788px] items-center">
          <h3>
            Empowering learners to succeed - <br />
            <h4 className="inline text-primary2 max-md:leading-[24px] max-md:text-[20px]">
              Why choose us?
            </h4>
          </h3>

          <p className="max-md:mt-[-14px]">
            we provide a personalized learning experience that ignites a passion
            for learning and helps students achieve their academic goals.
          </p>

          <div className="flex flex-wrap gap-[20px] text-[16px] leading-[19.2px] min-h-[137.3px] justify-center max-md:w-[176px] text-left">
            <ItemCard>
              <Image
                src="/proven-results.svg"
                alt="certified"
                width={60}
                height={56.36}
              />
              <p className="small">Certified Tutor</p>
            </ItemCard>
            <ItemCard>
              <Image
                src="/customized-learning-plans.svg"
                alt="rocket"
                width={60}
                height={56.36}
              />
              <p className="small">Customized Learning Plans:</p>
            </ItemCard>
            <ItemCard>
              <Image
                src="/proven-results.svg"
                alt="proven"
                width={60}
                height={56.36}
              />
              <div className="flex flex-col gap-[16px]">
                <p className="small">Proven Results</p>
              </div>
            </ItemCard>
          </div>

          <div>
            <CustomButton>Learn More</CustomButton>
          </div>
        </WordingItem>

        <Image
          className="absolute max-md:hidden left-[372px] top-[360px]"
          src="/kite.png"
          alt="certified"
          width="72"
          height="72"
        />
      </section>

      <section className="flex gap-[54.73px] justify-center items-center">
        <div className="max-md:hidden w-[361.27px] h-[314px] relative">
          <Image
            className="bg-secondary rounded-[20px]"
            src="/girl-with-glasses.png"
            alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
            width={197.57}
            height={240}
          />

          <Image
            className="bg-tertiary rounded-[20px] absolute bottom-0 right-0"
            src="/boy-with-glasses.png"
            alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
            width={222.27}
            height={270}
          />
        </div>
        <WordingItem
          gapClass="max-md:gap-[32px] gap-[30px]"
          className="w-[584px] max-md:text-center max-md:items-center"
        >
          <h4>Our services are structured to help your child thrive</h4>
          <p className="max-md:px-[38px] max-md:mt-[-14px]">
            We offer a comprehensive range of tutoring services to support your
            child's success. 
          </p>
          <div className="w-[268.64px] h-[257px] md:w-[361.27px] md:h-[314px] relative md:hidden">
            <Image
              className="bg-secondary rounded-[20px] max-md:w-[164.64px]"
              src="/girl-with-glasses.png"
              alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
              width={197.57}
              height={240}
            />

            <Image
              className="bg-tertiary rounded-[20px] absolute bottom-0 right-0 max-md:w-[164.64px]"
              src="/boy-with-glasses.png"
              alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
              width={222.27}
              height={270}
            />
          </div>
          <CustomButton>Learn More</CustomButton>
        </WordingItem>
      </section>

      <section className="relative flex max-md:flex-col gap-[30px] md:gap-[82px] md:pl-[150px] py-[94px] md:pt-[200px] md:pb-[170px] md:pr-[80px] items-center md:overflow-hidden">
        <WordingItem className="max-w-[504px] max-md:text-center max-md:gap-[16px]">
          <h4>
            See what other learners & parents are saying about our services
          </h4>
          <p>
            Unveiling the impact we've made on families.. Read what parents are
            saying about their child's progress. 
          </p>
          <div className="max-md:hidden">
            <CustomButton>See all testimonials</CustomButton>
          </div>
        </WordingItem>

        <Image
          className="max-md:hidden absolute top-[170px] left-[690px] z-[-1]"
          src="/star.png"
          alt="star"
          width="114"
          height="114"
        />

        <div className="relative rounded-[10px] max-w-[617px] py-[42px] pl-[30px] md:bg-gray-blue bg-[#FEFEFED1] flex gap-[23px] md:overflow-visible w-[calc(100%_+_38px)] overflow-scroll items-center self-start max-md:shadow-sm">
          <TestimonialCard
            testimony="Lorem ipsum dolor sit amet consectetur. Tortor sit elementum sit ultrices nisl orci consectetur. Urna nunc facilisis urna laoreet blandit felis rutrum."
            testifier="Tobi Nwafor"
            role="Learner, A-Z New Age Tutors"
            dpUrl="/boy-with-glasses.png"
          />
          <TestimonialCard
            testimony="Lorem ipsum dolor sit amet consectetur. Tortor sit elementum sit ultrices nisl orci consectetur. Urna nunc facilisis urna laoreet blandit felis rutrum."
            testifier="Tobi Nwafor"
            role="Learner, A-Z New Age Tutors"
            dpUrl="/boy-with-glasses.png"
          />

          <div className="absolute right-[15px] bg-primary2 max-w-[60px] aspect-square rounded-full flex items-center justify-center max-md:hidden">
            <Image src="/arrow.svg" alt="next" width={18.75} height={15.75} />
          </div>
        </div>
        <div className="md:hidden">
          <CustomButton>See all testimonials</CustomButton>
        </div>
      </section>

      <CallToApply />
      <Faqs />
    </>
  );
}
