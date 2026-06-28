import { useEffect } from "react";

function useScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    reveals.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);
}

export default useScrollReveal;