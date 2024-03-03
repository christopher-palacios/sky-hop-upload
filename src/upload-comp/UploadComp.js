import "./UploadComp.css";

function UploadComp() {
  return (
    <section id="uploadComp">
      <div className="container">
        <div>
          {/* close button top left */}
          <button className="closeBtn">
            <div className="closeBtnLabel">&#10005;</div>
          </button>
        </div>
        <div className="headerContainer">
          {/* modal label text center */}
          <div className="headerLabel">Document Upload</div>
          <div className="partialBorder"></div>
        </div>
        <div className="uploadSections"></div>
      </div>
    </section>
  );
}

export default UploadComp;
