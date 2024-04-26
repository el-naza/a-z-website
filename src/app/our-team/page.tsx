import Image from "next/image";
import { CallToApply } from "../components";

export default function () {
  return (
    <>
      <Image
        src="/pink-gradient.svg"
        width={1440}
        height={1050}
        alt="pink gradient"
        className="absolute aspect-[29] top-[1179px] h-[1050px] w-[1440px] left-0 right-0 z-[-10]"
      />
      <div className="max-w-[1010px] m-auto mt-[107px] mb-[92px]">
        <h2 className="mb-[16px]">
          Say hello to our team
          <span className="ml-[59.275px] text-[72.45px] w-[159px] text-center leading-[159px]">
            👋
          </span>
        </h2>
        <p className="text-[20px] leading-[24px]">
          Our team is the heart of A-Z New Age Tutors. They're passionate
          educators, subject experts, and lifelong learners, all dedicated to
          your academic success. Expect experienced instruction, personalized
          support, and a genuine desire to see you thrive.
        </p>
        <div className="mt-[72px] flex flex-wrap gap-x-[70px] gap-y-[92px]">
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
        className="aspect-square rounded-[16px] mb-[30px]"
      />
      <p className="font-bold mb-[8px]">{fullName}</p>
      <p>{role}</p>
    </div>
  );
}

