import Image from "next/image";
import { CallToApply } from "../components";

export default function Testimonials() {
  return (
    <>
      <Image
        src="/pink-gradient.svg"
        width={1440}
        height={1050}
        alt="pink gradient"
        className="absolute aspect-[29] top-[1179px] h-[1050px] w-[1440px] left-0 right-0 z-[-10]"
      />
      <div className="max-w-[1010px] m-auto mt-[83px] md:mt-[157px] mb-[72px]">
        <h2 className="md:mb-[72px] mb-[23px]">What our clients say</h2>
        <p className="text-[20px] leading-[24px]">
          Discover how we've helped others achieve their goals. Read real
          stories of success from our learners and parents.
        </p>
      </div>
      {/* <section className="w-[1174px] mb-[72px] m-auto flex justify-between items-center">
        <Arrow />

        <div className="w-[974px] h-full p-[20px] flex justify-between items-center">
          <div className="w-[290px] px-[20px] py-[12px]">
            <TestimonyCard
              imgSrc="/man-with-face-mask.png"
              fullName="Tobi Nwafor"
              role="Learner, A-Z New Age Tutors"
              testimony="Lorem ipsum dolor sit amet consectetur. Tortor sit elementum sit ultrices nisl orci consectetur. Urna nunc facilisis urna laoreet blandit felis rutrum. "
            />
          </div>
          <div className="w-[314px] h-full [box-shadow:0px_0px_42.1px_0px_#0000001A] p-[32px] rounded-[16px]">
            <TestimonyCard
              imgSrc="/man-with-face-mask.png"
              fullName="Tobi Nwafor"
              role="Learner, A-Z New Age Tutors"
              testimony="Lorem ipsum dolor sit amet consectetur. Tortor sit elementum sit ultrices nisl orci consectetur. Urna nunc facilisis urna laoreet blandit felis rutrum. "
            />
          </div>
          <div className="w-[290px] px-[20px] py-[12px] bg-white z-5">
            <TestimonyCard
              imgSrc="/man-with-face-mask.png"
              fullName="Tobi Nwafor"
              role="Learner, A-Z New Age Tutors"
              testimony="Lorem ipsum dolor sit amet consectetur. Tortor sit elementum sit ultrices nisl orci consectetur. Urna nunc facilisis urna laoreet blandit felis rutrum. "
            />
          </div>
        </div>
        <Arrow />
      </section> */}
      <CallToApply />
    </>
  );
}

function Arrow() {
  return (
    <div className="bg-primary2 w-[60px] aspect-square rounded-full flex items-center justify-center [box-shadow:2px_4px_30px_-2px_#67B3C059]">
      <Image src="/arrow.svg" alt="next" width={18.75} height={15.75} />
    </div>
  );
}

function TestimonyCard({
  imgSrc,
  fullName,
  role,
  testimony,
}: {
  imgSrc: string;
  fullName: string;
  role: string;
  testimony: string;
}) {
  return (
    <div className="text-center text-[16px] leading-[19.2px]">
      <Image
        src={imgSrc}
        width={77.97}
        height="80"
        alt={fullName}
        className="rounded-full mb-[14px] m-auto border-[2px] border-black2"
      />
      <p className="font-anybody font-bold mb-[4px]">{fullName}</p>
      <p className="mb-[24px]">{role}</p>
      <Image
        className="mt-[12px]"
        src="/quote-start.svg"
        alt={'"'}
        width={24}
        height={24}
      />
      <p className="mt-[14px] text-left">{testimony}</p>
    </div>
  );
}
