import "./UploadComp.css";
import fileSvg from "../assests/icons/file-select.svg";
import imgSvg from "../assests/icons/image-file.svg";
import timeSvg from "../assests/icons/time.svg";
import activeRadio from "../assests/icons/selected-radio.png";
import inactiveRadio from "../assests/icons/unselected-radio.png";
import { useState, useEffect } from "react";

function UploadComp() {
  const IMPORT_NAMES = ["Name 1", "Name 2", "Name 3"];
  const CLIENT_OPTIONS = ["Client 1", "Client 2", "Client 3"];
  const TESTING_CENTERS = [
    "Testing Center 1",
    "Testing Center 2",
    "Testing Center 3",
    "Testing Center 4",
  ];
  const MAX_FILE_SIZE = 10 * 1024 * 1024;
  const [selectedImportName, setSelectedImportName] = useState("");
  const [selectClients, setSelectedClients] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedFileSize, setSelectedFileSize] = useState("");
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [isToggleChecked, setIsToggleChecked] = useState(true);
  const [scheduleRadioOption, setScheduleRadioOption] = useState("Yes");
  const [clientRadioOption, setClientRadioOption] = useState("Multiple");
  const [testingCenters, setTestingCenters] = useState([]);

  useEffect(() => {
    if (clientRadioOption === "Single") {
      setTestingCenters(["Testing Center 1"]);
      setSelectedClients({});
    } else {
      setTestingCenters(TESTING_CENTERS);
    }
  }, [clientRadioOption]);

  const handleSelectImportName = (event) => {
    setSelectedImportName(event.target.value);
  };

  const handleSelectClientTesting = (event, center) => {
    setSelectedClients({
      ...selectClients,
      [center]: event.target.value,
    });
  };

  const handleSelectedFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert("File size exceeds the maximum allowed size of 100MB");
      } else {
        const progress = (file.size * 0.000001).toFixed(0);
        const fileSize = (file.size * 0.000001).toFixed(1) + "MB";
        setSelectedFileName(file.name);
        setSelectedFileSize(fileSize);
        setProgressBarValue(progress);
      }
    }
  };

  const handleToggleSwitch = (event) => {
    console.log("log > event", event);
    setIsToggleChecked(!isToggleChecked);
  };

  return (
    <section id="uploadComp">
      <div className="container">
        <div>
          {/* close button top left */}
          <button className="close-btn">
            <div className="close-btn-label">&#10005;</div>
          </button>
        </div>
        <div className="header-container">
          {/* modal label text center */}
          <div className="header-label">Document Upload</div>
          <div className="partial-border"></div>
        </div>
        <div className="upload-sections">
          {/* container for drag&drop and selects */}
          <form className="left-form">
            <select
              name="import-name"
              id="import-name"
              className="select-input import-name-select"
              value={selectedImportName}
              onChange={handleSelectImportName}
            >
              {/* include options for select input (importname) */}
              <option value="" disabled={true}>
                Select Import Name:
              </option>
              <option value="name1">Name 1</option>
              <option value="name2">Name 2</option>
              <option value="name3">Name 3</option>
            </select>
            <div className="partial-border"></div>
            <div className="manifest-drag-drop">
              <h4 className="form-label">
                Select a manifest that you'd like to import
              </h4>
              <div className="drop-container">
                <div className="droppable-area">
                  {/* file svg goes here */}
                  <img src={fileSvg} alt="" className="icon" />
                  <div>
                    Drag & Drop Here Or{" "}
                    <span>
                      <label htmlFor="browseFile" className="browse-file">
                        <strong>Browse</strong>
                      </label>
                      <input
                        type="file"
                        id="browseFile"
                        accept=".csv,.jpg"
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
              <div className="imported-file-container">
                <img src={imgSvg} alt="" />
                <div className="imported-file">
                  <div className="file-data">
                    <div className="file-name">{selectedFileName}</div>
                    <div className="file-size">{selectedFileSize}</div>
                  </div>
                  <progress
                    className="import-progress-bar"
                    value={progressBarValue}
                    max="100"
                  />
                </div>
              </div>
              <div className="partial-border"></div>
              <div className="elapse-check">
                <h4 className="form-label">Elapse Data Checking:</h4>
                <p className="check-result">No Elapsed Dates!</p>
              </div>
              <div className="partial-border"></div>
              <div className="select-tolerance-container">
                <h4 className="form-label">Tolerance Window:</h4>
                <div>
                  <div className="select-tolerance">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={isToggleChecked}
                        onChange={handleToggleSwitch}
                      />
                      <span className="slider"></span>
                    </label>
                    <div className="tolerance-switch">
                      Toggle {isToggleChecked ? "ON" : "OFF"}
                    </div>
                    <img src={timeSvg} alt="" />
                    <div className="tolerance-level">
                      Select Tolerance Level
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <form className="right-form">
            <div className="split-schedule-container">
              <div className="form-label">
                Split schedule using social distancing?
              </div>
              <div className="schedule-radio-inputs">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="custom-radio">
                    <input
                      type="radio"
                      value={option}
                      checked={scheduleRadioOption === option}
                      onChange={() => setScheduleRadioOption(option)}
                      className="radio-input"
                    />
                    <img
                      src={
                        scheduleRadioOption === option
                          ? activeRadio
                          : inactiveRadio
                      }
                      alt={option}
                      className="radio-icon"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
            <div className="partial-border"></div>
            <div>
              <h4 className="form-label">Location Checking:</h4>
              <p className="check-result">All Available!</p>
            </div>
            <div className="partial-border"></div>
            <div>
              <div className="select-client-options">
                <h4 className="form-label">Client:</h4>
                <div className="client-radio-inputs">
                  {["Single", "Multiple"].map((option) => (
                    <label key={option} className="custom-radio">
                      <input
                        type="radio"
                        value={option}
                        checked={clientRadioOption === option}
                        onChange={() => setClientRadioOption(option)}
                        className="radio-input"
                      />
                      <img
                        src={
                          clientRadioOption === option
                            ? activeRadio
                            : inactiveRadio
                        }
                        alt={option}
                        className="radio-icon"
                      />
                      <span className="radio-icon">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="client-testing-container">
                {testingCenters.map((center, index) => (
                  <div className="select-container" key={index}>
                    <p className="testing-center-label">{center}</p>
                    <div className="client-option-select">
                      <select
                        name={`testing-center-select-${index}`}
                        id={`testing-center-select-${index}`}
                        className="select-input"
                        value={selectClients[center] || ""}
                        onChange={(event) =>
                          handleSelectClientTesting(event, center)
                        }
                      >
                        <option value="" disabled>
                          Select Client
                        </option>
                        {/* Dynamically populate options here */}
                      </select>
                      <img src={timeSvg} alt="" />{" "}
                      {/* Assuming timeSvg is defined elsewhere */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default UploadComp;
