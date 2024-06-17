/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { CallToApply } from "../components";

export default function OurTeam() {
  return (
    <>
      <Image
        src="/pink-gradient.svg"
        width={1440}
        height={1050}
        alt="pink gradient"
        className="absolute aspect-[29] top-[1179px] h-[1050px] w-[1440px] left-0 right-0 z-[-10]"
      />
      <div className="max-w-[1010px] m-auto mt-[67px] md:mt-[107px] mb-[92px]">
        <h2 className="md:mb-[16px] mb-[23px] max-md:flex max-md:justify-between items-center">
          Say hello to our team
          <span className="md:ml-[59.275px] md:text-[72.45px] text-[38px] md:w-[159px]  text-center md:leading-[159px] leading-[70px] font-inter">
            👋
          </span>
        </h2>
        <p className="md:text-[20px] md:leading-[24px]">
          Our team is the heart of A-Z New Age Tutors. We are passionate
          educators, subject experts, and lifelong professionals, all dedicated to
          your academic success. Expect experienced instruction, personalized
          support, and a genuine desire to see our learners thrive.
        </p>
        <div className="mt-[72px] flex flex-wrap md:gap-x-[70px] md:gap-y-[92px] gap-y-[24px] max-md:justify-between">
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
          <TeamMemberCard
            imgSrc="/man-with-face-mask.png"
            fullName="Full Names"
            role="Role"
          />
        </div>
      </div>
      <CallToApply />
    </>
  );
}

function TeamMemberCard({
  imgSrc,
  fullName,
  role,
}: {
  imgSrc: string;
  fullName: string;
  role: string;
}) {
  return (
    <div className="text-center">
      <Image
        src={imgSrc}
        width="200"
        height="200"
        alt={fullName}
        className="aspect-square rounded-[16px] mb-[30px] max-md:w-[150px]"
      />
      <p className="font-bold mb-[8px] max-md:text-[20px] max-md:leading-[24px]">
        {fullName}
      </p>
      <p>{role}</p>
    </div>
  );
}
