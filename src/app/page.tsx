import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="fixed w-screen py-[10px] border-b-2 border-gray-light bg-white z-10">
        <div className="flex justify-between items-center max-w-[1280px] m-auto">
          <Image
            src="/logo.png"
            alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
            width={82}
            height={82}
          />
          <nav className="flex gap-[50px]">
            <NavLink isActive={true}>Home</NavLink>
            <NavLink>What we do</NavLink>
            <NavLink>Our team</NavLink>
            <NavLink>Testimonial</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact us</NavLink>
          </nav>
        </div>
      </header>
      <main>
        <section className="w-[1280px] m-auto h-screen justify-between items-center flex">
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
                <Button>
                  <h5 className="font-normal">Learn More</h5>
                </Button>
                <Button>
                  <h5 className="font-normal">Consult Us</h5>
                </Button>
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
              we provide a personalized learning experience that ignites a
              passion for learning and helps students achieve their academic
              goals.
            </p>
            <Button>
              <h5 className="font-normal">Learn More</h5>
            </Button>
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
              <ItemCard className="w-[292px] border-2 border-gray-light p-5 rounded-[32px] gap-[16px]">
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

              <ItemCard className="w-[394px] border-2 border-gray-light p-5 rounded-[32px] gap-[16px]">
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
              <ItemCard className="w-[292px] border-2 border-gray-light p-5 rounded-[32px] gap-[40px]">
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
                    improved grades, increased confidence, and a love for
                    learning in our students.
                  </p>
                </div>
              </ItemCard>

              <ItemCard className="w-[394px] border-2 border-gray-light p-5 rounded-[32px] gap-[40px]">
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
              We offer a comprehensive range of tutoring services to support
              your child's success. 
            </p>
            <Button>
              <h5 className="font-normal">Learn More</h5>
            </Button>
          </WordingItem>
        </section>

        <section className="relative flex gap-[82px] pl-[150px] pt-[200px] pb-[170px] pr-[80px] items-center overflow-hidden">
          <WordingItem className="w-[504px]">
            <h4>
              See what other learners & parents are saying about our services
            </h4>
            <p>
              Unveiling the impact we've made on families.. Read what parents
              are saying about their child's progress. 
            </p>
            <Button>
              <h5 className="font-normal">See all testimonials</h5>
            </Button>
          </WordingItem>

          <Image
            className="absolute top-[170px] left-[690px] z-[-1]"
            src="/star.png"
            alt="star"
            width="114"
            height="114"
          />

          <div className="relative rounded-[10px] w-[617px] py-[44px] pl-[30px] bg-gray-blue flex gap-[25px] overflow-visible items-center">
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

            <div className="absolute right-[15px] bg-primary2 w-[60px] aspect-square rounded-full flex items-center justify-center">
              <Image src="/arrow.svg" alt="star" width={18.75} height={15.75} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ItemCard({
  className,
  children,
  ...props
}: Readonly<{
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className={`flex flex-col items-start ${className}`} {...props}>
      {children}
    </div>
  );
}

function NavLink({
  dropDown,
  isActive,
  children,
  ...props
}: Readonly<{
  dropDown?: React.ReactNode;
  isActive?: boolean;
  children: React.ReactNode;
}>) {
  return (
    <a className={isActive ? "font-[700]" : "text-gray"} href="#" {...props}>
      {children}
      {isActive && (
        <div className="bg-black pt-[2px] h-[4px] w-full rounded-[30px]" />
      )}
    </a>
  );
}

function Button({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`rounded-[45px] px-[50px] py-[20px] bg-primary2 text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function TestimonialCard({
  testimony,
  testifier,
  role,
  dpUrl,
  className,
  ...props
}: Readonly<{
  testimony: string;
  testifier: string;
  role: string;
  dpUrl: string;
  className?: string;
}>) {
  return (
    <div
      className={`rounded-[10px] px-[20px] py-[30px] bg-white text-[16px] leading-[19.2px] flex flex-col gap-[12px] min-w-[425px] ${className}`}
      {...props}
    >
      <Image
        className="mt-[12px]"
        src="/quote-start.svg"
        alt={'"'}
        width={24}
        height={38.4}
      />
      <div>{testimony}</div>
      <div className="flex gap-[14px] items-center">
        <Image
          className="rounded-full h-[60px] aspect-square"
          src={dpUrl}
          alt="profile"
          width={60}
          height={60}
        />
        <div>
          <div className="font-bold mb-[4px]">{testifier}</div>
          <div>{role}</div>
        </div>
      </div>
    </div>
  );
}

function WordingItem({
  gapClass,
  className,
  children,
  ...props
}: Readonly<{
  gapClass?: string;
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <div
      className={`flex flex-col ${
        gapClass || "gap-[30px]"
      } items-start ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}















































