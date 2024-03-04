import "./UploadComp.css";
import { useState } from "react";

function UploadComp() {
  const importNames = ["Name 1", "Name 2", "Name 3"];
  const [selectedImportName, setSelectedImportName] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);

  const handleSelectImportName = (event) => {
    console.log("log handleSelectImportName > event", event);
    setSelectedImportName(event.target.value);
  };

  const handleSelectedFile = (event) => {
    console.log("log > event", event);
  };
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
        <div className="uploadSections">
          {/* container for drag&drop and selects */}
          <form className="leftForm">
            <select
              name="importName"
              id="importName"
              className="selectImportName"
              value={selectedImportName}
              onChange={handleSelectImportName}
            >
              {/* include options for select input (importname) */}
              <option value="" disabled={true}>
                Select Import Name
              </option>
              <option value="name1">Name 1</option>
              <option value="name2">Name 2</option>
              <option value="name3">Name 3</option>
            </select>
            <div className="partialBorder"></div>
            <div className="manifestImportDragAndDrop">
              <p className="formLabel">
                Select a manifest that you'd like to import
              </p>
              <div className="dropContainer">
                <div className="droppableArea">
                  {/* file svg goes here */}
                  <div>file svg</div>
                  <div>
                    Drag & Drop Here Or{" "}
                    <span>
                      <label htmlFor="browseFile" className="browseFile">
                        <strong>Browse</strong>
                      </label>
                      <input
                        type="file"
                        id="browseFile"
                        accept=".csv"
                        hidden
                        onChange={handleSelectedFile}
                      />
                    </span>
                  </div>
                </div>
                <button>
                  <strong>Upload Manifest</strong>
                </button>
              </div>
            </div>
          </form>
          <form className="rightForm">
            <div className="splitSchedule">
              <div className="splitScheduleLabel">
                Split schedule using social distancing?
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UploadComp;
