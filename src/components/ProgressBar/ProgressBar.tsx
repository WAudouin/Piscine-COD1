import { useEffect, useState } from "react";
import "./ProgressBar.scss";

export interface ProgressBarProps {
  scrollPercentage: number;
  position?: string;
}

const ProgressBar = ({
  scrollPercentage,
  position = "top",
}: ProgressBarProps) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const progressBarWidth = 32 + (scrollPercentage / 100) * (windowWidth - 32);

  return (
    <span
      style={{ width: `${progressBarWidth}px` }}
      className={`progress-bar ${position === "bottom" ? "bottom" : "top"}`}
    ></span>
  );
};

export default ProgressBar;
