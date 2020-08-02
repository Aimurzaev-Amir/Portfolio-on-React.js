import React from "react";
import BlockTitleText from "../../../common/BlockTitle";
import Button from "../../../common/Button";
import "./PortfolioPageWorks.css";

let Work = (props) => {
  let workStyle = props.works.additional.textStyles.map((style) => {
    return (
      <p
        key={style.id}
        className="workStyle"
        style={{ fontSize: style.size + "px", fontWeight: style.weight }}
      >
        {style.name}
      </p>
    );
  });
  let workColors = props.works.additional.colors.map((color) => {
    return <div key={color.id} className="colorEllipse" style={{ background: color.color }}></div>;
  });
  let whatIDid = props.works.additional.whatIDid.map((point) => {
    return <p key={point.id}> {point.name}</p>;
  });

  return (
    <div>
      <header
        className="workHeader"
        style={{ backgroundImage: "url(" + props.works.workBackground + ")" }}
      >
        <div className="workIntro">
          <div className="workIntroText wrapper">
            <h1>{props.works.workName}</h1>
            <p>{props.works.additional.workTitle}</p>
          </div>
        </div>
      </header>

      <div className="workDescriber">
        <div className="workMainLogo">
          <img src={props.works.workPhoto} alt="" />
        </div>
        <div className="workMainInfo wrapper">
          <div className="workOverview">
            <div className="workTitle">
              <h2>ABOUT PROJECT</h2>
              <p>{props.works.additional.aboutProject}</p>
            </div>
            <div className="designInfo">
              <div className="workTypography">
                <h2>Typography</h2>
                <p>{props.works.additional.typography.fontName}</p>
                <p>ABCDEFGIJKLMNOPQRSTUVWXYZ</p>
                <p>abcdefgijklmnopqrstuvwxyz</p>
              </div>
              <div className="workStyles">
                <h2>Text styles</h2>
                {workStyle}
              </div>
              <div className="workColors">
                <h2>Colors</h2>
                <div className="colorEllipses">{workColors}</div>
              </div>
            </div>
          </div>
          <div className="workDetails">
            <div className="detailsInfo">
              <h3>PROJECT TYPE</h3>
              <p>{props.works.smallDescription}</p>
            </div>
            <div className="detailsInfo">
              <h3>WHAT I DID</h3>
              {whatIDid}
            </div>
            <div className="detailsInfo">
              <h3>TECHNOLOGY USED</h3>
              <p>{props.works.additional.technologyUsed}</p>
            </div>
            <Button btnUrl={props.works.onlineUrl} btnTarget="_blank" btnText="Visit site" />
          </div>
        </div>
      </div>

      <div className="workScreenshots wrapper">
        <BlockTitleText titleClass="titleLines titleLines3" blockTitleText="desktop version" />
        <p className="sectionsParagraph">
          Main sections of the KazTransGas website (concept). <br />
          Display on the desktop version.
        </p>

        <table className="desktopScreenshots">
          <tbody>
            <tr>
              <td className="desktopScreenshotsRow">
                <img src={props.works.additional.desktopImg[0].img} alt=""></img>
              </td>
              <td className="desktopScreenshotsRow">
                <img src={props.works.additional.desktopImg[1].img} alt=""></img>
              </td>
            </tr>
            <tr>
              <td className="desktopScreenshotsRow">
                <img src={props.works.additional.desktopImg[2].img} alt=""></img>
              </td>
              <td className="desktopScreenshotsRow">
                <img src={props.works.additional.desktopImg[3].img} alt=""></img>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div className="desktopVersionScreenshots">
          <div className="workImgBe">
            <img
              src="../../../Redux/img/work-kaztransgas/desktop-version-kaztransgas1.png"
              alt="work screenshot"
              data-aos="flip-up"
            />
          </div>

          <div className="verticalLine"></div>
          <div className="workImgBe">
            <img
              src="../../../Redux/img/work-kaztransgas/desktop-version-kaztransgas2.png"
              alt="work screenshot"
              data-aos="flip-up"
              data-aos-delay="150"
            />
          </div>

          <div className="horizontalLine"></div>
          <div className="horizontalLine"></div>
          <div className="horizontalLine"></div>
          <img
            src="../../../Redux/img/work-kaztransgas/desktop-version-kaztransgas3.png"
            alt="work screenshot"
            data-aos="flip-up"
            data-aos-delay="150"
          />
          <div className="verticalLine"></div>
          <img
            src="../../../Redux/img/work-kaztransgas/desktop-version-kaztransgas4.png"
            alt="work screenshot"
            data-aos="flip-up"
            data-aos-delay="300"
          />
        </div> */}

        <div className="mobileVersionSection">
          <BlockTitleText titleClass="titleLines titleLines3" blockTitleText="mobile version" />
          <p className="sectionsParagraph">
            Main sections of the dental clinic website. <br />
            Display on the mobile version.
          </p>

          <table>
            <tbody>
              <tr>
                <td className="mobileScreenshotsRow">
                  <img src={props.works.additional.mobileImg[0].img} alt=""></img>
                </td>
                <td className="mobileScreenshotsRow">
                  <img src={props.works.additional.mobileImg[1].img} alt=""></img>
                </td>
                <td className="mobileScreenshotsRow">
                  <img src={props.works.additional.mobileImg[2].img} alt=""></img>
                </td>
              </tr>
              <tr>
                <td className="mobileScreenshotsRow">
                  <img src={props.works.additional.mobileImg[3].img} alt=""></img>
                </td>
                <td className="mobileScreenshotsRow">
                  <img src={props.works.additional.mobileImg[4].img} alt=""></img>
                </td>
                <td className="mobileScreenshotsRow">
                  <img src={props.works.additional.mobileImg[5].img} alt=""></img>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <div className="mobileVersionScreenshots">
            <img
              src="../img/work-kaztransgas/mobile-version-kaztransgas1.png"
              alt=""
              data-aos="flip-right"
            />
            <div className="verticalLine"></div>
            <img
              src="../img/work-kaztransgas/KazTransGas-mobile-menu.png"
              alt=""
              data-aos="flip-right"
              data-aos-delay="150"
            />
            <div className="verticalLine"></div>
            <img
              src="../img/work-kaztransgas/mobile-version-kaztransgas2.png"
              alt=""
              data-aos="flip-right"
              data-aos-delay="300"
            />
            <div className="horizontalLine"></div>
            <div className="horizontalLine"></div>
            <div className="horizontalLine"></div>
            <div className="horizontalLine"></div>
            <div className="horizontalLine"></div>
            <img
              src="../img/work-kaztransgas/mobile-version-kaztransgas3.png"
              alt=""
              data-aos="flip-right"
              data-aos-delay="150"
            />
            <div className="verticalLine"></div>
            <img
              src="../img/work-kaztransgas/mobile-version-kaztransgas5.png"
              alt=""
              data-aos="flip-right"
              data-aos-delay="300"
            />
            <div className="verticalLine"></div>
            <img
              src="../img/work-kaztransgas/mobile-version-kaztransgas6.png"
              alt=""
              data-aos="flip-right"
              data-aos-delay="450"
            />
          </div> */}
        </div>
        <p className="viewAllParagraph">To view all sections, please go to the project website.</p>
        <Button btnUrl={props.works.onlineUrl} btnTarget="_blank" btnText="Visit site" />
      </div>
    </div>
  );
};

export default Work;
