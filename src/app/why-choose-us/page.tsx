import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <>
      <section className="relative flex items-center justify-center w-full h-[445px] bg-black">
        <Image
          src="/learners.png"
          alt="learners"
          width={1440}
          height={445}
          className="absolute left-0 right-0 top-0 bottom-0"
        />
        <h2 className="text-center z-10 text-white">
          Empowering learners
          <br />
          to succeed
        </h2>
      </section>
      <section className="mt-[68px] mb-[225px] ml-[160px] w-[864px]">
        <p className="small mb-[60px]">
          we provide a personalized learning experience that ignites a passion
          for learning and helps students achieve their academic goals.
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
              <h4>Certified Tutor</h4>
              <div className="gap-4 flex flex-col">
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Credentials You Can Trust</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Wealth of experience Trust</span>
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
                  <span className="opacity-70">Individualized Assessment</span>
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
                  <span className="opacity-70">Flexible Pace and Approach</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">
                    Regular Monitoring and Adjustments
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
              <h4>Proven Result</h4>
              <div className="gap-4 flex flex-col">
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">Individualized Assessment</span>
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
                  <span className="opacity-70">Flexible Pace and Approach</span>
                </div>
                <div className="gap-[10px] p-[10px] flex rounded-[8px] shadow-[0px_0px_3.5px_0px_#00000033] ">
                  <Image
                    src="/check-mark.svg"
                    alt="check mark"
                    width={24}
                    height={24}
                  />
                  <span className="opacity-70">
                    Regular Monitoring and Adjustments
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
