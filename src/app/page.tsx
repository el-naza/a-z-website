/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  WordingItem,
  CustomButton,
  ItemCard,
  TestimonialCard,
  CallToApply,
  Faqs,
  ConsultUs,
  WhatsappReviews,
} from "./components";
import Link from "next/link";

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
              Help them shine! Spark their potential with
              <br />
              personalized tutoring.
            </p>
            <div className="flex gap-[48px] max-md:hidden">
              <Link href="#services">
                <CustomButton secondary>Learn More</CustomButton>
              </Link>

              <Link href="/application-form">
                <CustomButton>Enroll Now</CustomButton>
              </Link>
            </div>
          </div>
        </WordingItem>

        <div className={"relative"}>
          <Image
            alt="happy kid"
            src="/happy-kid.png"
            // className="aspect-square rounded-full h-[200px]"
            width={430.29}
            height={404.47}
            className=" max-md:h-[225.6px] max-md:w-[240px]"
          />
          <Image
            alt="crown"
            src="/crown.svg"
            width={72}
            height={70.02}
            className="absolute max-md:w-[48px] max-md:h-[50px] max-md:right-[44px] max-md:top-[-3px] right-[82px] top-[2px] w-70 h-70.2"
            style={{
              animationName: "rotate",
              animationDuration: ".4s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          />
          <Image
            alt="squigly"
            src="/sign.svg"
            width={58}
            height={25}
            className="absolute left-[38.83px] top-[304.91px] max-md:left-[10px] max-md:top-[195px]"
          />
        </div>

        <div className="flex gap-[16px] mt-[20px] md:hidden">
          <Link href="#services">
            <CustomButton>Learn More</CustomButton>
          </Link>
          <Link href="#consult-us">
            <CustomButton secondary>Consult Us</CustomButton>
          </Link>
        </div>
      </section>

      <section className="relative flex justify-between items-center max-w-[1271px] m-auto md:mb-[211px] mb-[70px] flex-col text-center">
        <WordingItem className="max-w-[788px] items-center">
          <h3>
            Empowering learners to succeed
            <br />
            <br />
            <h4 className="inline text-primary2 max-md:leading-[24px] max-md:text-[20px]">
              Why choose us?
            </h4>
          </h3>

          <p className="max-md:mt-[-14px]">
            We provide a personalized learning experience that ignites a passion
            for learning and helps learners achieve their academic goals.
          </p>

          <div className="flex max-md:flex-col gap-[20px] text-[16px] leading-[19.2px] min-h-[137.3px] justify-center max-md:w-[260px] text-left">
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
            <Link href="why-choose-us">
              <CustomButton>Learn More</CustomButton>
            </Link>
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

      <Link href="/vision-mission-goals-and-objectives">
        <section className="relative pt-[140px] pb-[85px] rounded-[12px] mb-[295px] m-auto flex flex-col gap-[60px] max-w-[1100px] items-center min-h-[469px] overflow-hidden">
          <Image
            className="absolute md:top-[-150px] bg-secondary -z-10 max-md:h-full"
            src="/visions-and-missions.png"
            alt="visions-and-missions"
            width={1100}
            height={469}
          />

          <div className="absolute top-0 flex h-full z-[-10] w-full items-center justify-center opacity-75 bg-[#100F0F]" />
          <h2 className="text-center text-white">
            Our vision, mission, goals and objectives set us apart.
          </h2>
          <CustomButton secondary>Learn More</CustomButton>
        </section>
      </Link>

      <section className="relative flex gap-[54.73px] justify-center items-center">
        <div id="services" className="absolute top-[-200px]" />
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
          className="relative w-[584px] max-md:text-center max-md:items-center"
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

          <Link href="our-services">
            <CustomButton>Learn More</CustomButton>
          </Link>
        </WordingItem>
      </section>

      <section className="relative flex max-md:flex-col gap-[30px] md:gap-[82px] md:w-[1116px] md:pt-[200px] md:pb-[170px] items-center md:overflow-hidden md:m-auto">
        <WordingItem className="max-w-[504px] max-md:mt-20 max-md:text-center max-md:gap-[16px]">
          <h4>
            See what other learners & parents are saying about our services
          </h4>
          <p>
            Unveiling the impact we've made on families.. Read what parents are
            saying about their child's progress.
          </p>
          <div className="max-md:hidden">
            <Link href={"/application-form"}>
              <CustomButton>Enroll Now</CustomButton>
            </Link>
          </div>
        </WordingItem>

        <Image
          className="max-md:hidden absolute top-[170px] left-[530px] z-[-1]"
          src="/star.png"
          alt="star"
          width="114"
          height="114"
        />

        <div className="relative rounded-[10px] max-w-[617px] p-10 md:bg-gray-blue bg-[#FEFEFED1] flex gap-[23px] w-[calc(100%_+_38px)] overflow-scroll items-center self-start max-md:shadow-sm">
          <WhatsappReviews />
        </div>

        {/* <div className="relative rounded-[10px] max-w-[617px] py-[42px] pl-[30px] md:bg-gray-blue bg-[#FEFEFED1] flex gap-[23px] md:overflow-visible w-[calc(100%_+_38px)] overflow-scroll items-center self-start max-md:shadow-sm">
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
        </div> */}
        <div className="md:hidden mb-20">
          <Link href={"/application-form"}>
            <CustomButton>Enroll Now</CustomButton>
          </Link>
        </div>
      </section>

      <CallToApply />
      <Faqs />
    </>
  );
}
