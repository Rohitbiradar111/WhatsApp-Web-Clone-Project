import { RiDownloadLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrSettingsOption } from "react-icons/gr";
import QRCode from "react-qr-code";
import { Link, Route, Routes } from "react-router-dom";
import ContactUsPage from "./pages/contact/contact";
import "./App.css";

function HomePage() {
  return (
    <>
      {/* Header starts here */}
      <header>
        <div className="whatsappLogoContainer">
          <img
            src="\WhatsappLogo.png"
            alt="whatsapp logo"
            height="80px"
            width="80px"
            draggable={false}
            className="whatsappLogo"
          />
          <h1 className="logoText">WhatsApp</h1>
        </div>
      </header>
      {/* Header ends here */}

      {/* Main section starts here */}
      <main className="outerContainer">
        <div className="innerContainer">
          {/* first container content starts here */}
          <div className="firstContainer">
            <div className="firstInnerContainer">
              <img
                src="\LaptopImage.png"
                alt="Laptop Image"
                draggable={false}
                width="10%"
                style={{ marginLeft: "2rem" }}
              />
              <div className="firstInnerContainerText">
                <h2 className="firstText">Download WhatsApp for Windows</h2>
                <h2 className="secondText">
                  Make calls, share your screen and get a faster experience when
                  you download the Windows app.
                </h2>
              </div>
              <div className="downloadButtonContainer">
                <button className="firstInnerContainerButton">
                  Download
                  <RiDownloadLine />
                </button>
              </div>
            </div>
          </div>
          {/* first container content ends here */}

          {/* second container content starts here */}
          <div className="secondContainer">
            <div className="secondInnerContainer">
              <div className="secondInnerContainerText">
                <div className="secondInnerContainerFirstText">
                  <h1 className="thirdText">Log into WhatsApp Web</h1>
                  <p className="fourthText">
                    Message privately with friends and family using WhatsApp on
                    your browser.
                  </p>
                </div>
                <div className="secondInnerContainerlistText">
                  <ol>
                    <li>Open WhatsApp on your phone</li>
                    <li>
                      Tap Menu
                      <span>
                        <BsThreeDotsVertical color="#808080" />
                      </span>
                      on Android, or Settings{" "}
                      <span>
                        <GrSettingsOption color="#808080" />
                      </span>{" "}
                      on iPhone
                    </li>
                    <li>Tap Linked devices and then Link a device</li>
                    <li>Point your phone at this screen to scan the QR code</li>
                  </ol>
                </div>
                <div className="secondInnerContainerlastText">
                  <h3 className="highlightText">
                    Need help getting started? <LuArrowUpRight />
                  </h3>
                  <h3 className="highlightText">
                    Log in with phone number <FaChevronRight />
                  </h3>
                </div>
              </div>
              <div className="secondInnerContainerQRCode">
                <div className="qrcode">
                  <QRCode size="264" value="https://www.google.com/" />
                </div>
                <div className="checkboxText">
                  <input
                    type="checkbox"
                    id="checkbox"
                    style={{
                      cursor: "pointer",
                      width: "1rem",
                      height: "1rem",
                    }}
                  />
                  <label htmlFor="checkbox">
                    Stay logged in on this browser
                  </label>
                  <AiTwotoneInfoCircle
                    title="If selected, you'll stay logged into whatsapp web after
                  closing the browser tab."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* second container content ends here */}
        </div>
      </main>

      {/* contact button section starts here */}
      <footer>
        <div className="contactusContainer">
          <button className="contactUsButton">
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "#111b21" }}
            >
              Contact Us
            </Link>
          </button>
        </div>
      </footer>
      {/* contact button section end here */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
    </Routes>
  );
}
export default App;
