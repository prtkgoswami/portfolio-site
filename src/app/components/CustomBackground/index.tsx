/* eslint-disable react-hooks/exhaustive-deps */
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useRef, useState } from "react";
import "./index.css";

const IMPACT_RANGE: number = 200;
const FRAME_SIZE = 3;

const convertRemToPixels = (rem: number) => {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

type CustomBackgroundProps = {
  isInteractive?: boolean;
  dotIcon?: IconDefinition;
  dotSize?: SizeProp;
  isAlternateColoring?: boolean;
};

const CustomBackground = ({
  isInteractive = false,
  dotIcon = faCircle,
  dotSize = "2xs",
  isAlternateColoring = false,
}: CustomBackgroundProps): ReactElement => {
  const bgRef = useRef(null);
  const [dotElementList, setDotElementList] = useState<ReactElement[]>([]);

  const bgInteraction = (e: MouseEvent) => {
    const dots = document.querySelectorAll(".item-container");
    if (dots.length > 0) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      dots.forEach((dot) => {
        const sqrX = (dot as HTMLDivElement).offsetLeft + 20;
        const sqrY = (dot as HTMLDivElement).offsetTop + 20;

        const diffX = mouseX - sqrX;
        const diffY = mouseY - sqrY;
        const distFromCursor = Math.sqrt(diffX * diffX + diffY * diffY);

        if (distFromCursor < IMPACT_RANGE) {
          dot.classList.add("active");
          const roundedDist: number = Number(
            (distFromCursor / IMPACT_RANGE).toFixed(1)
          );
          (dot as HTMLDivElement).style.filter = `grayscale(${roundedDist})`;
          (dot as HTMLDivElement).style.transform = `scale(${
            1 + (1.5 - roundedDist)
          })`;
        } else {
          dot.classList.remove("active");
        }
      });
    }
  };

  useEffect(() => {
    if (bgRef.current) {
      const parentDiv = bgRef.current as HTMLDivElement;
      const bgWidth = parentDiv.offsetWidth;
      const bgHeight = parentDiv.offsetHeight;

      parentDiv.innerHTML = "";

      const sizePerDot = convertRemToPixels(FRAME_SIZE);
      const rowCount = Math.floor(bgHeight / sizePerDot);
      const colCount = Math.floor(bgWidth / sizePerDot);

      parentDiv.style.gridTemplateColumns = "1fr ".repeat(colCount);
      parentDiv.style.gridTemplateRows = "1fr ".repeat(rowCount);
      const dotContainerTemplate = (
        <div
          className={`item-container ${isAlternateColoring ? "alternate" : ""}`}
        >
          <FontAwesomeIcon icon={dotIcon} size={dotSize} className="dot" />
        </div>
      );

      const dotContainers: ReactElement[] = new Array(rowCount * colCount).fill(
        dotContainerTemplate
      );
      setDotElementList(dotContainers);
    }

    if (isInteractive) {
      document.addEventListener("mousemove", bgInteraction);
    }

    return () => {
      if (isInteractive) {
        document.removeEventListener("mousemove", bgInteraction);
      }
    };
  }, []);

  return (
    <div id="background-container" ref={bgRef}>
      {dotElementList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default CustomBackground;
