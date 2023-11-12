import Image from "next/image";
import "./index.css";

type TitleSectionProps = {};

const TitleSection = ({}: TitleSectionProps): React.ReactElement => {
  return (
    <div id="title-section" className="pages">
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
            <div className="desc">
              Welcome to my personal portfolio. I&apos;m a Software Developer
              with a strong passion for Frontend development. I thrive on
              creative thinking and consistently deliver high-quality work on
              time. <br />
              <br />
              As you browse through my portfolio, you&apos;ll see examples of
              projects that reflect my commitment to innovative, cutting-edge
              web applications. Feel free to contact me if you like my work and
              want to talk more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
