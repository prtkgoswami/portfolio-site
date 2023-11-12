type ShowcaseSectionProps = { isMobile: boolean };

const ShowcaseSection = ({
  isMobile,
}: ShowcaseSectionProps): React.ReactElement => {
  return (
    <div id="showcase-section" className="pages">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          fontSize: isMobile ? "1.5rem" : "3rem",
          color: "rgba(255,255,255, 0.4)",
          height: "300px",
          textTransform: "uppercase",
          wordBreak: "break-word",
          textAlign: "center",
        }}
      >
        <h1>Showcase Section</h1>
      </div>
      {/* <div className="section-body"></div> */}
    </div>
  );
};

export default ShowcaseSection;
