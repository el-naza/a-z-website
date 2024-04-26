/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { ReactNode } from "react";
import { CustomButton } from "../components";

export default function Career() {
  return (
    <>
      <section className="relative">
        <Image
          width={1440}
          height={343}
          src="/career-people.png"
          alt="career people"
          className="mb-[42px] bg-black"
        />
        <h2 className="absolute top-0 bottom-0 left-0 right-0 text-white flex justify-center items-center">
          Join our team
        </h2>
      </section>
      <section className="m-auto w-[1116px] mb-[100px]">
        At A-Z New Age Tutors, we're dedicated to empowering students of all
        ages to achieve their academic goals. We believe in fostering a
        supportive and collaborative learning environment where both students
        and instructors can thrive.
        <br />
        <br />
        <h4>Why Join Us</h4>
        <br />
        <ul>
          <li>
            <strong>Make a real difference: </strong>Join a team dedicated to
            empowering learners and transforming lives through education. Your
            contributions will directly impact student success stories.
            <br />
            <br />
          </li>
          <li>
            <strong>Invest in your future: </strong>We believe in nurturing
            talent. We offer opportunities for professional development,
            skill-building workshops, and mentorship programs to help you grow
            your career.
            <br />
            <br />
          </li>
          <li>
            <strong>Be part of something special: </strong>We foster a
            collaborative and supportive work culture where colleagues become
            friends. You'll feel valued, respected, and empowered to do your
            best work.
            <br />
            <br />
          </li>
          <li>
            <strong>Rewarding compensation: </strong> We offer a competitive
            salary and benefits package to recognize your talent and
            contributions. Enjoy work-life balance with flexible work options
            (if applicable).
            <br />
            <br />
          </li>
        </ul>
        We encourage you to submit your resume and cover letter below:
      </section>
      <section className="m-auto w-[1147px] p-[16px] bg-gray-blue flex flex-col gap-[50px] mb-[256px] rounded-[12px]">
        <div className="h-[71px] flex items-center justify-between">
          <h4>Apply</h4>
        </div>
        <div className="text-[20px] leading-[24px] flex flex-col w-[736px] items-start">
          <strong>Full Name</strong>
          <input
            placeholder="Enter Your Full Name"
            type="text"
            className="mt-[16px] mb-[40px] rounded-[4px] px-4 py-5 shadow-[0px_0px_3px_0px_#00000033] w-full"
          />
          <strong>Email Address</strong>
          <input
            placeholder="@email address"
            type="email"
            className="mt-[16px] mb-[40px] rounded-[4px] px-4 py-5 shadow-[0px_0px_3px_0px_#00000033] w-full"
          />
          <div className="tiny flex flex-col gap-10 mb-10">
            <div>
              <button className="p-[12px] bg-white flex gap-[16px] items-center mb-[7px] rounded-[8px]">
                <Image
                  src="/upload.svg"
                  width={16}
                  height={16}
                  alt="upload icon"
                  className="aspect-square"
                />
                Upload Resume
              </button>
              <ul className="text-gray flex flex-col gap-1">
                <li>Resume size must not be more than 5MB</li>
                <li>Upload only portable document formats (PDF)</li>
              </ul>
            </div>
            <div>
              <button className="p-[12px] bg-white flex gap-[16px] items-center mb-[7px] rounded-[8px]">
                <Image
                  src="/upload.svg"
                  width={16}
                  height={16}
                  alt="upload icon"
                  className="aspect-square"
                />
                Upload application letter
              </button>
              <ul className="text-gray flex flex-col gap-1">
                <li>Application letter size must not be more than 5MB</li>
                <li>Upload only portable document formats (PDF)</li>
              </ul>
            </div>
          </div>

          <CustomButton>Submit</CustomButton>
        </div>
      </section>
    </>
  );
}

function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}
