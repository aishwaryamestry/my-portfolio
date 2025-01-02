"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import astro from "../../public/astro.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Image from "next/image";
import motion from "framer-motion";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front End Developer", "React Developer", "web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className=" banner flex justify-center items-center px-60">
      <div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeIn  text-white" : ""
              }
            >
              <span className="tagline rounded-full">
                Welcome to my Portfolio
              </span>
              <h1 className=" text-white ">
                {`Hi! I'm Aishwarya `}
                <span
                  className="txt-rotate"
                  data-period="1000"
                  data-rotate='[ "Web Developer", "React Developer", "Front End Developer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>

              <button onClick={() => console.log("connect")}>
                Let’s Connect <ArrowRightCircle size={25} />
              </button>
            </div>
          )}
        </TrackVisibility>
      </div>

      <div>
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={isVisible ? "animate__animated animate__zoomIn" : ""}
            >
              <Image src={astro} alt="work icons" height={350} width={350} />
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};
