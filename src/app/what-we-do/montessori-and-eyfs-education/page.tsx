/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from "react";

export default function MontessoriAndEyfsEducation() {
  return (
    <>
      At A-Z New Age Tutors, we believe in fostering a love of learning in young
      children. That's why we combine the best aspects of both Montessori and
      EYFS educational philosophies to create a stimulating and nurturing
      environment where children can thrive.
      <br />
      <br />
      <h4>Montessori Principles:</h4>
      <br />
      <ul>
        <li>
          Self-Directed Learning: We encourage children to explore their
          interests and learn at their own pace through hands-on activities and
          self-discovery.
          <br />
          <br />
        </li>
        <li>
          Individualized Approach: Our curriculum is designed to cater to each
          child's unique learning style and developmental needs.
          <br />
          <br />
        </li>
        <li>
          Prepared Learning Environment: Our classrooms are thoughtfully
          prepared with high-quality Montessori materials that encourage
          exploration, sensory play, and independent learning.
        </li>
      </ul>
      <br />
      <h4>EYFS Framework:</h4>
      <br />
      <ul>
        <li>
          <strong>Focus on the Whole Child: </strong>
          We go beyond academics, nurturing a child's social, emotional, and
          physical development through play-based learning and positive
          relationships.
          <br />
          <br />
        </li>
        <li>
          <strong>Learning Through Play: </strong>
          Play is an essential part of early childhood development. We provide a
          variety of play opportunities that spark curiosity, creativity, and
          problem-solving skills.
          <br />
          <br />
        </li>
        <li>
          <strong>Unique Child: </strong>
          We recognize that every child develops at their own pace and celebrate
          their individual strengths and talents.
        </li>
      </ul>
      <br />
      <h4>The Montessori-EYFS Blend:</h4>
      <br />
      By combining these two educational approaches, we offer a unique learning
      environment that provides:
      <br />
      <br />
      <ul>
        <li>
          <strong>A strong foundation in core academic skills: </strong>
          Literacy, numeracy, and critical thinking skills are introduced in a
          developmentally appropriate way.
          <br />
          <br />
        </li>
        <li>
          <strong>Social and Emotional Development: </strong>
          We foster positive social interactions, emotional intelligence, and
          self-confidence.
          <br />
          <br />
        </li>
        <li>
          <strong>A Love of Learning: </strong>
          Our classrooms are filled with wonder and exploration, igniting a
          passion for lifelong learning.
        </li>
      </ul>
      <br />
      <h4>Investing in Your Child's Future:</h4>
      <br />
      Montessori and EYFS education provide a strong foundation for future
      academic success and personal growth. We invite you to explore our program
      and see how we can nurture your child's natural curiosity and help them
      blossom into confident and capable learners.
      <br />
      <br />
      Ready to learn more?
      <br />
      <br />
      Contact us today to schedule a tour and discover how our Montessori-EYFS
      program can benefit your child!
    </>
  );
}

function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}

