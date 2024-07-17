import Image from "next/image";
import { Faqs } from "../components";
import Link from "next/link";

export default function OurServices() {
  return (
    <>
      <section className="max-w-[1120px] m-auto flex md:gap-[79px] gap-[22px] mt-[33px] md:mt-[97px] md:mb-[154px] mb-[65px] items-center">
        <div>
          <h2 className="max-md:text-[20px] max-md:leading-[24px]">
            Our services are structured to help your child thrive
          </h2>
          <p className="small max-w-[584px] max-md:text-[14px] max-md:leading-[21px]">
            We offer a comprehensive range of tutoring services to support your
            child{"'"}s success. 
          </p>
        </div>
        <Image
          src="/thriving-child.png"
          alt="thriving child"
          width={343}
          height={350}
          className="rounded-[20px] bg-primary2 max-md:w-[141px]"
        />
      </section>
      <section className="m-auto max-w-[967px] mb-[100px]">
        <h4 className="text-center md:mb-[61px] mb-[40px] max-md:text-primary2 max-md:text-[20px] max-md:leading-[24px]">
          We offer:
        </h4>
        <div className="flex flex-wrap justify-between md:gap-y-[80px] gap-y-5 p-[20px]">
          <OfferItem title="One-on-one private tutoring" />
          <OfferItem title="Home Schooling" />
          <OfferItem title="Core subjects for all grades" />
          <OfferItem title="Montessori and EYFS Education" />
          <OfferItem title="SAT, IGCSE, IELTS exams" />
          <OfferItem title="Standardized Exams" />
          <OfferItem title="Coding for kids and teens" />
          <OfferItem title="Special Needs Education" />
          <OfferItem title="Nigerian Languages" />
          <OfferItem title="Foreign Languages" />
        </div>
      </section>
      <Faqs />
    </>
  );
}

function OfferItem({
  title,
}: Readonly<{
  title: string;
}>) {
  const path = title.replaceAll(" ", "-").toLowerCase();
  return (
    <Link
      href={`/what-we-do/${path}`}
      className="flex md:gap-[40px] gap-3 p-[12px] items-center max-w-[384px] rounded-[20px] active:bg-gray hover:bg-gray-blue"
    >
      <Image
        src={`/what-we-do/${path}.png`}
        alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
        width={126}
        height={123}
        className="rounded-[12px] md:h-[123px] md:w-[126px] h-[100px] w-[95.35px]"
      />
      <span className="font-bold max-md:text-[20px] max-md:leading-[24px]">
        {title}
      </span>
    </Link>
  );
}
