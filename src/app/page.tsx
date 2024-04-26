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
    <div className="text-[20px] leading-[24px]">
      <section className="w-[1111px] m-auto mt-[56px] mb-[183.44px] justify-between items-end flex">
        <WordingItem className="w-[700px]">
          <h1>
            Is your Child struggling with{" "}
            <span className="text-secondary">poor</span> grades?
          </h1>
          <div className="flex flex-col gap-[40px]">
            <p>
              Help Them Shine! Spark Their Potential with Personalized
              Tutoring. 
            </p>
            <div className="flex gap-[48px]">
              <CustomButton>Learn More</CustomButton>
              <CustomButton secondary>Consult Us</CustomButton>
            </div>
          </div>
        </WordingItem>
        <Image
          alt="happy kid"
          src="/happy-kid.svg"
          // className="aspect-square rounded-full h-[200px]"
          width={522.28}
          height={490.94}
        />
      </section>

      <section className="relative flex justify-between items-center max-w-[1271px] m-auto mb-[100px]">
        <WordingItem className="w-[484px]">
          <h3>
            Empowering learners to succeed -{" "}
            <h4 className="inline text-primary2">Why choose us?</h4>
          </h3>

          <p>
            we provide a personalized learning experience that ignites a passion
            for learning and helps students achieve their academic goals.
          </p>
          <CustomButton>Learn More</CustomButton>
        </WordingItem>

        <Image
          className="absolute left-[372px] top-[360px]"
          src="/kite.png"
          alt="certified"
          width="72"
          height="72"
        />

        <div>
          <div className="flex gap-[20px] text-[16px] leading-[19.2px] mb-[20px] h-[234px]">
            <ItemCard className="w-[292px] border-2 border-gray2 p-5 rounded-[32px] gap-[16px]">
              <Image
                src="/proven-results.svg"
                alt="certified"
                width={60}
                height={56.36}
              />
              <h5 className="text-gray">Certified Tutor</h5>
              <p>
                Our team comprises highly experieced educators who are
                passionate about students' success.
              </p>
            </ItemCard>

            <ItemCard className="w-[394px] border-2 border-gray2 p-5 rounded-[32px] gap-[16px]">
              <Image
                src="/customized-learning-plans.svg"
                alt="rocket"
                width={60}
                height={56.36}
              />
              <h5 className="text-gray">Customized Learning Plans:</h5>
              <p>
                We create personalized learning plans that address each
                student's specific strengths, weaknesses and goals.
              </p>
            </ItemCard>
          </div>

          <div className="flex gap-[20px] text-[16px] leading-[19.2px] h-[298px]">
            <ItemCard className="w-[292px] border-2 border-gray2 p-5 rounded-[32px] gap-[40px]">
              <Image
                src="/proven-results.svg"
                alt="proven"
                width={60}
                height={56.36}
              />
              <div className="flex flex-col gap-[16px]">
                <h5 className="text-gray">Proven Results</h5>
                <p>
                  Our proven track record demonstrates a consistent record of
                  improved grades, increased confidence, and a love for learning
                  in our students.
                </p>
              </div>
            </ItemCard>

            <ItemCard className="w-[394px] border-2 border-gray2 p-5 rounded-[32px] gap-[40px]">
              <Image
                src="/customized-learning-plans.svg"
                alt="learning"
                width={60}
                height={56.36}
              />
              <div className="flex flex-col gap-[16px]">
                <h5 className="text-gray">Customized Learning Plans:</h5>
                <p>
                  We create personalized learning plans that address each
                  student's specific strengths, weaknesses and goals.
                </p>
              </div>
            </ItemCard>
          </div>
        </div>
      </section>

      <section className="flex gap-[54.73px] justify-center items-center">
        <div className="w-[361.27px] h-[314px] relative">
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
        <WordingItem className="w-[584px]">
          <h4>Our services are structured to help your child thrive</h4>
          <p>
            We offer a comprehensive range of tutoring services to support your
            child's success. 
          </p>
          <CustomButton>Learn More</CustomButton>
        </WordingItem>
      </section>

      <section className="relative flex gap-[82px] pl-[150px] pt-[200px] pb-[170px] pr-[80px] items-center overflow-hidden">
        <WordingItem className="w-[504px]">
          <h4>
            See what other learners & parents are saying about our services
          </h4>
          <p>
            Unveiling the impact we've made on families.. Read what parents are
            saying about their child's progress. 
          </p>
          <CustomButton>See all testimonials</CustomButton>
        </WordingItem>

        <Image
          className="absolute top-[170px] left-[690px] z-[-1]"
          src="/star.png"
          alt="star"
          width="114"
          height="114"
        />

        <div className="relative rounded-[10px] max-w-[617px] py-[44px] pl-[30px] bg-gray-blue flex gap-[25px] overflow-visible items-center">
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

          <div className="absolute right-[15px] bg-primary2 max-w-[60px] aspect-square rounded-full flex items-center justify-center">
            <Image src="/arrow.svg" alt="next" width={18.75} height={15.75} />
          </div>
        </div>
      </section>

      <CallToApply />
      <Faqs />
    </div>
  );
}


