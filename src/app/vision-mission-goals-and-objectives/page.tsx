import Image from "next/image";
import {CustomButton} from "@/app/components";

export default function Page() {
  return (
    <>
      <section className="flex gap-[71px] mt-[67px] mb-[80px] max-w-[1024px] m-auto items-center">
        <Image
          className=""
          src="/our-vision.svg"
          alt="our-vision"
          width={318}
          height={345}
        />
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[64px]">
            Our Vision
          </h1>

          Empowering students to reach their full potential through personalized, one-on-one tutoring services that
          foster a lifelong love of learning and academic success.
        </div>
      </section>

      <section className="flex gap-[71px] mb-[80px] max-w-[1024px] m-auto items-center">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[64px]">
            Our Mission
          </h1>
          Delivering exceptional, student-centered tutoring experiences that cater to each individual{"'"}s unique
          learning
          needs, goals, and learning style, in the comfort of their own homes. We strive to create a supportive and
          inclusive learning environment that empowers students to succeed academically, personally, and professionally.
        </div>
        <Image
          className=""
          src="/our-mission.svg"
          alt="our-mission"
          width={318}
          height={345}
        />
      </section>

      <section className="flex gap-[71px] mb-[80px] max-w-[1024px] m-auto items-center">
        <Image
          className=""
          src="/our-goals.svg"
          alt="Our Goals"
          width={318}
          height={345}
        />
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[64px]">
            Our Goals
          </h1>
          1. To provide tailored tutoring services that lead to significant improvements in academic performance and
          confidence.
          <br/>
          <span>

          2. To build a team of highly qualified, passionate, and dedicated tutors committed to delivering exceptional results.
          </span>
          <span>

          3. To establish a reputation as a trusted, innovative, and customer-focused tutoring agency.
          </span>
          <span>

      4. To continuously improve and expand our services to meet the evolving needs of our students and the community.
          </span>
        </div>
      </section>

      <section className="flex gap-[71px] mb-[80px] max-w-[1024px] m-auto items-center">

        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[64px]">
            Our Aims
          </h1>
          1. To create a nurturing environment that encourages curiosity, creativity, and critical thinking.
          <br/>
          <span>

         2. To develop a growth mindset in students, promoting resilience, persistence, and a love of learning.
          </span>
          <span>

       3. To empower students to take ownership of their learning, setting goals and developing strategies for success.
          </span>
          <span>

      4. To provide ongoing support and resources for students, parents, and tutors, ensuring a collaborative approach to learning.
          </span>
          <span>

   5. To promote inclusivity, diversity, and equity, ensuring every student feels valued, respected, and supported.
          </span>
        </div>
        <Image
          className=""
          src="/our-goals.svg"
          alt="Our Goals"
          width={318}
          height={345}
        />
      </section>
      <section className="flex gap-[71px] mb-[80px] max-w-[1024px] m-auto items-center">

        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[64px]">
            Our Objectives
          </h1>
          1. To achieve a 25% increase in student academic performance and confidence within the first 6 months of
          tutoring.
          <br/>
          <span>

         2. To maintain a 95% client satisfaction rate, as measured through regular feedback and evaluations.
          </span>
          <span>

       3. To expand our tutoring services to reach a minimum of 750 students within the first 3 years of operation.
          </span>
          <span>

  4. To establish partnerships with local schools, educational institutions, and community organizations to provide tutoring services to underserved populations.
          </span>
          <span>

 5. To develop and implement a comprehensive training program for tutors, ensuring ongoing professional development and excellence.
          </span>
          <span>

 6. To create a student ambassador program, empowering students to share their experiences and inspire others.
          </span>
          <span>

 7. To develop strategic partnerships with educational technology companies to enhance our services and stay at the forefront of innovation.
          </span>
        </div>
        <Image
          className="rounded-[12px]"
          src="/our-objectives.svg"
          alt="Our Goals"
          width={318}
          height={345}
        />
      </section>
      <section className="flex flex-col gap-[71px] mb-[80px] max-w-[1024px] m-auto items-center">
        <Image
          className="w-full rounded-[12px]"
          src="/company-profile.svg"
          alt="our-mission"
          width={318}
          height={345}
        />
        <div className="flex flex-col gap-[20px] items-center">
          <h2>
            OUR COMPANY PROFILE
          </h2>
          Get closer with us by downloading the softcopy here
          <CustomButton>Download</CustomButton>
        </div>
      </section>
    </>
  )
}