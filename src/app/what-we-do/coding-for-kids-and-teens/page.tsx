/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from "react";

export default function OneOnOneHomeTutoring() {
  return (
    <>
      In today's digital world, coding is more than just a technical skill –
      it's a superpower! At A-Z New Age Tutors, we ignite a passion for coding
      in kids and teens, empowering them to become creators, problem-solvers,
      and innovators of tomorrow.
      <br />
      <br />
      <h4>Why Choose Us?</h4>
      <br />
      <ul>
        <li>
          <strong>Fun and Engaging:</strong> We make learning code an exciting
          adventure through interactive games, animations, and real-world
          projects that spark curiosity and keep young minds engaged.
          <br />
          <br />
        </li>
        <li>
          <strong>Age-Appropriate Learning:</strong> Our programs are designed
          for all levels, from complete beginners to aspiring coders. We cater
          to the specific needs and interests of each age group.
          <br />
          <br />
        </li>
        <li>
          <strong>Building Blocks of Success:</strong> We teach kids and teens
          the fundamental coding concepts and languages they need to create
          their own games, apps, websites, and more.
          <br />
          <br />
        </li>
        <li>
          <strong>Develop Essential Skills:</strong> Coding goes beyond
          programming. Our courses nurture critical thinking, problem-solving,
          creativity, collaboration, and communication skills – valuable assets
          for any future path.
          <br />
          <br />
        </li>
        <li>
          <strong>Experienced Instructors:</strong> Our passionate and qualified
          instructors provide expert guidance, support, and encouragement every
          step of the way.
          <br />
          <br />
        </li>
      </ul>
      <h4>Watch Your Child Thrive:</h4>
      <br />
      <ul>
        <li>
          <strong>Boost Confidence:</strong> As kids master new coding skills,
          their confidence and sense of accomplishment soar.
          <br />
          <br />
        </li>
        <li>
          <strong>Embrace Challenges:</strong> We encourage creative
          problem-solving, fostering a love of learning and perseverance.
          <br />
          <br />
        </li>
        <li>
          <strong>Prepare for the Future:</strong> Coding skills are becoming
          increasingly sought-after in all fields. We give your child a head
          start on a bright future.
          <br />
          <br />
        </li>
      </ul>
      <h4>We Offer a Variety of Coding Programs:</h4>
      <br />
      <ul>
        <li>
          <strong>Beginner Courses:</strong> Introduce the basics of coding
          through interactive games and activities.
          <br />
          <br />
        </li>
        <li>
          <strong>Game Development:</strong> Learn to create engaging and
          exciting games, sparking creativity and imagination.
          <br />
          <br />
        </li>
        <li>
          <strong>App Development:</strong> Unleash their inner entrepreneur by
          building functional and user-friendly apps.
          <br />
          <br />
        </li>
        <li>
          <strong>Web Development:</strong> Delve into the world of websites,
          learning how to design and develop interactive web pages.
          <br />
          <br />
        </li>
        <li>
          <strong>Advanced Courses:</strong> Challenge experienced coders with
          complex projects and cutting-edge languages.
          <br />
          <br />
        </li>
      </ul>
      Investing in coding education is an investment in your child's future.
      <br />
      <br />
      <h4>Ready to unlock their potential?</h4>
      <br />
      Contact us today to explore our coding programs and find the perfect fit
      for your child's age, interests, and skill level! Let's embark on this
      exciting coding adventure together!
    </>
  );
}

function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}
