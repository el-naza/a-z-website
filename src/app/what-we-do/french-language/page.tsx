/* eslint-disable react/no-unescaped-entities */
import { ReactNode } from "react";

export default function OneOnOneHomeTutoring() {
  return (
    <>
      Unlike a traditional classroom setting, our one-on-one home tutoring
      sessions provide your child with the undivided focus they deserve. Our
      experienced and passionate tutors take the time to understand your child's
      unique learning style, strengths, and areas needing improvement. They then
      create a customized learning plan that caters to their individual needs,
      ensuring a clear path to academic success.
      <h4>Benefits of Home Tutoring:</h4>
      <li>
        Comfort and Convenience: Eliminate the stress of traveling. Our tutors
        come directly to the comfort of your home, creating a familiar and
        relaxed learning environment.
      </li>
      <li>
        Flexible Scheduling: We understand that every family has a busy
        schedule. That's why we offer flexible scheduling options to fit your
        needs, ensuring tutoring seamlessly integrates into your life.
      </li>
      <li>
        Distraction-Free Zone: Away from classroom distractions, your child can
        focus intently on the material at hand. This allows for deeper
        understanding, improved retention, and a more productive learning
        experience.
      </li>
      <h4>Proven Results, Lasting Impact:</h4>
      <p>
        Our personalized approach and one-on-one attention have a proven track
        record of achieving exceptional results. We've helped countless students
        improve their grades, gain confidence in their abilities, and develop a
        love for learning.
      </p>
      <p>Ready to unlock your child's full potential?</p>
      <p>
        Contact us today for a free consultation! Let's discuss your child's
        specific needs and how our one-on-one home tutoring programs can help
        them achieve academic success.
      </p>
    </>
  );
}

function li({ children }: Readonly<{ children: ReactNode }>) {
  return <li>{children}</li>;
}

