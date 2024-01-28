import Image from "next/image";
import "./index.css";

type TitleSectionProps = {
  refCallback: any;
  intersectionRatio: number;
};

const TitleSection = ({
  refCallback,
  intersectionRatio,
}: TitleSectionProps): React.ReactElement => {
  return (
    <div id="title-section" className="pages" ref={refCallback}>
      <div className="section-body">
        <div className="wrapper">
          {/* <div className="profile-image-wrapper">
            <Image
              src="https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png"
              width={100}
              height={100}
              alt="profile image"
              className="profile-image"
            />
          </div> */}
          <div className="content-wrapper">
            <div className="name-text">Pratik Goswami</div>
            {/* <div className="desc">
              Welcome to my personal portfolio. I&apos;m a Software Developer
              with a strong passion for Frontend development. I thrive on
              creative thinking and consistently deliver high-quality work on
              time. <br />
              <br />
              As you browse through my portfolio, you&apos;ll see examples of
              projects that reflect my commitment to innovative, cutting-edge
              web applications. Feel free to contact me if you like my work and
              want to talk more.
            </div> */}
            <div className="desc">
              Hello and welcome to my personal portfolio! I&apos;m Pratik, a
              dedicated Software Developer deeply passionate about the world of
              Frontend development. I thrive on turning creative ideas into
              reality, consistently delivering top-notch work within deadlines.{" "}
              <br />
              <br />
              As you explore my portfolio, you&apos;ll discover a collection of
              projects that mirror my dedication to crafting innovative and
              cutting-edge web applications. If you find something that
              resonates with you, let&apos;s connect and discuss it further. For
              a more detailed overview of my skills and experience, feel free to
              check out my{" "}
              <a href="/Pratik-Goswami-Resume.pdf" target="_blank">
                resume
              </a>
              .
              <br />
              <br />
              Thank you for visiting, and I look forward to the opportunity of
              collaborating with you!
            </div>
          </div>
          <div
            className="scroll-down-icon"
            style={{
              opacity:
                intersectionRatio - 0.3 < 0 ? 0 : intersectionRatio - 0.3,
            }}
          >
            <div className="scroll-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
