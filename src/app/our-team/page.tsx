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
          educators, subject experts, and lifelong professionals, all dedicated
          to your academic success. Expect experienced instruction, personalized
          support, and a genuine desire to see our learners thrive.
        </p>
        <div className="mt-[72px] flex flex-wrap md:gap-x-[70px] gap-x-[44px] md:gap-y-[92px] gap-y-[24px] justify-center">
          <TeamMemberCard
            imgBgColor="#579797"
            imgSrc="/team-members/director.png"
            fullName="Christiana Okoro"
            role="Director"
          />
          <TeamMemberCard
            imgSrc="/team-members/operations-manager.png"
            fullName="Faith Akannoh"
            role="Operations Manager"
          />
          <TeamMemberCard
            imgSrc="/team-members/administrator.jpeg"
            fullName="Precious Joseph"
            role="Administrator"
          />
          <TeamMemberCard
            imgSrc="/team-members/recruitment-officer.png"
            fullName="Donatus Ushie"
            role="Recruitment officer"
          />
          <TeamMemberCard
            imgSrc="/team-members/ass-recruitment-officer.png"
            imgBgColor="#FF6209"
            fullName="Blessing Inyang"
            role="Ass. Recruitement officer"
          />
          <TeamMemberCard
            imgSrc="/team-members/orientation-officer.png"
            imgBgColor="#F1D7E0"
            fullName="Taiwo Bello"
            role="Orientation officer"
          />
          {/* <TeamMemberCard
            imgSrc="/team-members/ass-orientation-officer.png"
            imgBgColor="#C9DADA"
            fullName="Christopher Labi"
            role="Ass. Orientation officer"
          /> */}
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
  imgBgColor,
}: {
  imgSrc: string;
  fullName: string;
  role: string;
  imgBgColor?: string;
}) {
  return (
    <div className="flex flex-col text-center items-center">
      <Image
        src={imgSrc}
        width="200"
        height="200"
        alt={fullName}
        className={`aspect-square rounded-[16px] mb-[30px] max-md:w-[120px]`}
        style={{
          boxShadow: "0px 0px 42.1px 0px #0000001A",
          backgroundColor: imgBgColor,
        }}
      />
      <p className="font-bold mb-[8px] max-md:text-[20px] max-md:leading-[24px] max-md:w-[100px] w-[200px]">
        {fullName}
      </p>
      <p className="w-[200px] max-md:w-[100px]">{role}</p>
    </div>
  );
}
