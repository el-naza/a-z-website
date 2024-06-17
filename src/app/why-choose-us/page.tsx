import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <section className="relative flex items-center justify-center w-[calc(100%+76px)] h-[445px] bg-black ml-[-38px] mr">
        <Image
          src="/learners.png"
          alt="learners"
          width={1440}
          height={445}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full"
        />
        <h2 className="text-center z-10 text-white">
          Empowering learners
          <br />
          to succeed
        </h2>
      </section>
      <section className="mt-[68px] mb-[225px] mx-auto max-w-[1116px]">
        <p className="small mb-[60px]">
          We provide a personalized learning experience that ignites a passion
          for learning and helps learners achieve their academic goals.
        </p>
        <h4>Why Choose Us?</h4>
        <div className="mt-[105px] flex gap-[120px] flex-col">
          <div className="flex gap-10 items-center">
            <Image
              src="/certified-tutor.png"
              alt="certified tutor"
              width={342.75}
              height={400}
              className="rounded-[20px]"
            />
            <div className="gap-3 flex flex-col">
              <h4>Certified Tutors</h4>
              <div className="gap-4 flex flex-col">
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Credentials you can trust</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Wealth of experience</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Passionate mentors</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <Image
              src="/learning-plan-customizer.png"
              alt="certified tutor"
              width={342.75}
              height={400}
              className="rounded-[20px]"
            />
            <div className="gap-3 flex flex-col">
              <h4>Customized Learning Plan</h4>
              <div className="gap-4 flex flex-col">
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/rocket.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Individualized assessment</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Tailored instructions</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Flexible pace and approach</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">
                    Regular monitoring and adjustments
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <Image
              src="/result-prover.png"
              alt="certified tutor"
              width={342.75}
              height={400}
              className="rounded-[20px]"
            />
            <div className="gap-3 flex flex-col">
              <h4>Proven Results</h4>
              <div className="gap-4 flex flex-col">
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Academic excellence</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Guaranteed success in examinations</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Improved self confidence</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">
                    Enhanced critical thinking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
