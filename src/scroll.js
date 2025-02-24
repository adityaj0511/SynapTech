import { useEffect } from "react";

const ScrollAnimation = () => {
    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-animation");

        const checkScroll = () => {
            let scrollPosition = window.innerHeight * 0.85; // 85% of viewport height

            elements.forEach((element) => {
                let position = element.getBoundingClientRect().top;
                if (position < scrollPosition) {
                    element.classList.add("visible");
                }
            });
        };

        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run on page load

        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    return null;
};

export default ScrollAnimation;
