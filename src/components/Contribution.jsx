import gsap from "gsap";
import { useRef } from "react";
import { useIntersection } from "react-use";

const Contribution = () => {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  });

  const fadeIn = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: "power2",
      // stagger: {
      //   amount: 0.3,
      // },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "power2",
    });
  };

  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(sectionRef.current)
    : fadeIn(sectionRef.current);

  return (
    <section data-scroll-section className="max-w-lg mb-32 mx-auto md:text-center">
      <div ref={sectionRef} className="pt-24 pb-16 relative top-[60px]">
        <h4 className="text-[12px]">PROFESSIONAL EXPERIENCE</h4>
        <p className="text-3xl text-[#aaa] md:mt-5 md:text-3xl">
        
Senior Frontend Engineer - Pichi Finance (Remote) - May 2024 – Present
- Spearheaded frontend development for the MVP of Pichi Finance, a fintech platform, leading the design and implementation of responsive UIs using React, TypeScript, and CSS modules.
- Collaborated with cross-functional teams to integrate complex APIs and data visualizations, improving the overall UX by 30%.
- Implemented a reusable date range picker and sort/search component for order filtering, enhancing the platform's scalability and performance.
<br /><br />
Frontend Developer - Upwork Freelance (Remote) - 2021 – 2024
- Delivered tailored web applications for multiple clients in various sectors, including fintech and e-commerce, using ReactJS, TypeScript, and CSS modules.
- Integrated design systems from Figma into scalable  codebases, ensuring consistency across platforms and improving UI/UX.
- Created dashboards and dynamic components such as order tracking systems, date pickers, and customer data graphs, contributing to improved user satisfaction.
<br /><br />
Frontend Engineer - Coalition Technologies (Remote) - 2020 – 2021
- Converted Adobe XD templates into fully responsive Next.js applications, using best practices in CSS architecture and performance optimization.
- Developed an interactive dashboard to display real-time patient data, including a visual graph for tracking blood pressure, which was central to the client’s health app.
- Utilized Git, GitHub, and CI/CD pipelines to manage code deployment and testing, improving build efficiency and reducing development time by 15%.
<br /><br />
Frontend Developer - Fintech Solutions (Remote) - 2019 – 2020
- Implemented and maintained the front-end architecture of a Fintech web application, collaborating with backend developers to integrate secure payment gateways and customer data management features.
- Led the design system implementation to standardize UI elements, improving maintainability and reducing design inconsistencies across the platform.
          website.
        </p>
      </div>
    </section>
  );
};

export default Contribution;
