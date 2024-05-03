"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link, { LinkProps } from "next/link";

import Image from "next/image";

export function Header() {
  let [showSidebar, setShowSidebar] = useState(false);

  function hideSideBar() {
    setShowSidebar(false);
  }

  function NavLink({
    children,
    ...props
  }: LinkProps & {
    children?: React.ReactNode;
  }) {
    const pathname = usePathname();

    return (
      <Link
        onClick={hideSideBar}
        className={`${
          pathname === props.href
            ? "font-[700]"
            : "md:text-gray max-md:font-light"
        } max-md:text-[16px] max-md:leading-[19.2px] `}
        {...props}
      >
        {children}
        {/* {isActive && (
        <div className="bg-black pt-[2px] h-[4px] w-full rounded-[30px]" />
      )} */}
      </Link>
    );
  }
  console.log(showSidebar);
  return (
    <header className="h-[102px] max-md:h-[58px]">
      <div
        className={`md:hidden fixed left-0 right-0 top-0 bottom-0 z-20 flex ${
          !showSidebar && "translate-x-[-100%]"
        } transition duration-300 ease-in-out`}
      >
        <div className="bg-black flex-1 opacity-25" onClick={hideSideBar}></div>
        <div className="bg-white px-[30px] pt-5 shadow-[0px_12px_20px_20px_#0000001A] flex flex-col gap-10 items-end">
          <Image
            src="/cancel.svg"
            alt="cancel"
            width={24}
            height={24}
            onClick={hideSideBar}
          />
          <Image
            src="/logo.png"
            alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
            width={50}
            height={50}
            className="mr-[-5px]"
          />
          <NavLink href="/">Home</NavLink>
          <NavLink href="/our-services">What we do</NavLink>
          <NavLink href="/our-team">Our team</NavLink>
          <NavLink href="/testimonials">Testimonials</NavLink>
          <NavLink href="/career">Career</NavLink>
          <NavLink href="/contact-us">
            <span className="p-2 bg-primary text-white rounded-[12px]">
              Contact us
            </span>
          </NavLink>
        </div>
      </div>
      <div className="px-[35px] max-md:py-1 fixed w-[100%] py-[10px] border-b-2 border-gray2 bg-white z-10">
        <div className="flex justify-between items-center max-w-[1116px] m-auto">
          <Image
            src="/logo.png"
            alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
            width={82}
            height={82}
            className="max-md:h-[50px] max-md:w-[50px]"
          />
          <Image
            src="/hamburger.svg"
            alt="menu"
            width={24}
            height={24}
            className="hidden max-md:block"
            onClick={() => {
              setShowSidebar(true);
            }}
          />
          <nav className="flex gap-[50px] text-[20px] leading-[24px] max-md:hidden">
            <NavLink href="/">Home</NavLink>
            <div className="group relative cursor-pointer">
              <span className="text-gray">What we do</span>
              <div className="absolute invisible flex flex-wrap w-[804px] bg-white p-[18px] rounded-[16px] left-[-13px]  gap-y-[12px] justify-between group-hover:visible hover:visible shadow-[0px_0px_30px_0px_#0000001A]">
                <WhatWeDoMenuItem title="One-on-one private tutoring" />
                <WhatWeDoMenuItem title="Home Schooling" />
                <WhatWeDoMenuItem title="Core subjects for all grades" />
                <WhatWeDoMenuItem title="Montessori and EYFS Education" />
                <WhatWeDoMenuItem title="SAT, IGCSE, IELTS exams" />
                <WhatWeDoMenuItem title="WAEC, JAMB AND NECO (GCE)" />
                <WhatWeDoMenuItem title="Coding for kids and teens" />
                <WhatWeDoMenuItem title="Special Needs Education" />
                <WhatWeDoMenuItem title="Nigerian Languages" />
                <WhatWeDoMenuItem title="French Language" />
              </div>
            </div>
            <NavLink href="/our-team">Our team</NavLink>
            <NavLink href="/testimonials">Testimonials</NavLink>
            <NavLink href="/career">Career</NavLink>
            <NavLink href="/contact-us">Contact us</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

function WhatWeDoMenuItem({
  title,
}: Readonly<{
  title: string;
}>) {
  const path = title.replaceAll(" ", "-").toLowerCase();
  return (
    <Link
      href={`/what-we-do/${path}`}
      className="flex gap-[30px] p-[20px] items-center max-w-[384px] rounded-[20px] hover:shadow-[0px_0px_3.5px_0px_#00000033]"
    >
      <Image
        src={`/what-we-do/${path}.png`}
        alt="A-Z_NEW_widthAGE_TUTORS_-_LOGO"
        width={90}
        height={90}
        className="rounded-[12px] h-[90px] aspect-square"
      />
      <div>
        <div className={`font-anybody mb-[2px]`}>
          <span className="font-bold">{title}</span>
        </div>
        <span className="tiny text-primary2">Learn More</span>
      </div>
    </Link>
  );
}
