const newWorkType = "WORKSREDUCER/ADD-WORK";
const setCurrentWorkType = "WORKSREDUCER/SET-WORK-ID";

let initialState = {
  Works: [
    {
      id: 0,
      workName: "KazTransGas",
      smallDescription: "Website",
      whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
      workPreview: require("./img/work-cards/kaztransgas-card.png"),
      workBackground: require("./img/work-kaztransgas/kaztransgas-main-bg.jpg"),
      workPhoto: require("./img/work-kaztransgas/kaztransgas-main-logo.png"),
      previewDescription: "kaztransgas redesign website Aimurzaev Amir",
      urlAdress: "/portfolio/kaztransgas",
      onlineUrl: "https://aimurzaev-amir.github.io/kaztransgas/",
      additional: {
        workTitle:
          "KazTransGas JSC is the main gas energy and gas transportation company of the Republic of Kazakhstan, representing the interests of the state in both the domestic and foreign gas markets.",
        aboutProject:
          "KazTransGas is a reliable supplier of gas to consumers in the Central Asian region of the gas transmission network, a unified system of domestic gas supply. The main task was to make a complete redesign of the company’s website, as the previous design was outdated and not effective. The goal was also to improve the site’s interface according to all modern trends, optimize it for browsers and develop a mobile version of the website.",
        typography: {
          fontName: "Roboto",
        },
        textStyles: [
          {
            id: 0,
            name: "H1 - Text Styles",
            size: 30,
            weight: "bold",
          },
          {
            id: 1,
            name: "H2 - Text Styles",
            size: 16,
            weight: "500",
          },
          {
            id: 2,
            name: "H3 - Text Styles",
            size: 15,
            weight: "300",
          },
        ],
        colors: [
          {
            id: 0,
            color: "#007ab9",
          },
          {
            id: 1,
            color: "#000",
          },
          {
            id: 2,
            color: "#ffffff",
          },
          {
            id: 3,
            color: "#f3f4f4",
          },
        ],
        whatIDid: [
          {
            id: 0,
            name: "Front-end",
          },
          {
            id: 1,
            name: "Website Design",
          },
          {
            id: 2,
            name: "CMS",
          },
          {
            id: 3,
            name: "Responsive Design",
          },
        ],
        technologyUsed: "HTML, CSS3, CMS, PHP, JavaScript, JQuery, Photoshop, Figma",
        desktopImg: [
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas1.png"),
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas2.png"),
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas3.png"),
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas4.png"),
          },
        ],
        mobileImg: [
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/KazTransGas-mobile-menu.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas5.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
        ],
      },
    },
    {
      id: 1,
      workName: "Be Dentist",
      smallDescription: "Website",
      whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
      workPreview: require("./img/work-cards/bedentist-card.png"),
      workBackground: require("./img/work-bedentist/main-img.png"),
      workPhoto: require("./img/work-bedentist/bedentist-work-logo.png"),
      previewDescription: "Be Dentist dental clinic website",
      urlAdress: "/portfolio/bedentist",
      additional: {
        workTitle:
          "KazTransGas JSC is the main gas energy and gas transportation company of the Republic of Kazakhstan, representing the interests of the state in both the domestic and foreign gas markets.",
        aboutProject:
          "KazTransGas is a reliable supplier of gas to consumers in the Central Asian region of the gas transmission network, a unified system of domestic gas supply. The main task was to make a complete redesign of the company’s website, as the previous design was outdated and not effective. The goal was also to improve the site’s interface according to all modern trends, optimize it for browsers and develop a mobile version of the website.",
        typography: {
          fontName: "Roboto",
        },
        textStyles: [
          {
            name: "H1 - Text Styles",
            size: "30px",
            weight: "bold",
          },
          {
            name: "H2 - Text Styles",
            size: "16px",
            weight: "500",
          },
          {
            name: "H3 - Text Styles",
            size: "15px",
            weight: "300",
          },
        ],
        colors: [
          {
            color: "#007ab9",
          },
          {
            color: "#000",
          },
          {
            color: "#ffffff",
          },
          {
            color: "#f3f4f4",
          },
        ],
        whatIDid: [
          {
            name: "Front-end",
          },
          {
            name: "Website Design",
          },
          {
            name: "CMS",
          },
          {
            name: "Responsive Design",
          },
        ],
        technologyUsed: "HTML, CSS3, CMS, PHP, JavaScript, JQuery, Photoshop, Figma",
        desktopImg: [
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas4.png"),
            imgDescr: "",
          },
        ],
        mobileImg: [
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas5.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
        ],
      },
    },
    {
      id: 2,
      workName: "Move",
      smallDescription: "Online Shop",
      whatIDid: "UX   |   UI   |   WEB DEVELOPMENT",
      workPreview: require("./img/work-cards/move-card.png"),
      workBackground: require("./img//work-move/main-move-bg.jpg"),
      workPhoto: require("./img/work-move/move-main-logo.png"),
      previewDescription: "Move online shop website",
      urlAdress: "/portfolio/move",
      additional: {
        workTitle:
          "KazTransGas JSC is the main gas energy and gas transportation company of the Republic of Kazakhstan, representing the interests of the state in both the domestic and foreign gas markets.",
        aboutProject:
          "KazTransGas is a reliable supplier of gas to consumers in the Central Asian region of the gas transmission network, a unified system of domestic gas supply. The main task was to make a complete redesign of the company’s website, as the previous design was outdated and not effective. The goal was also to improve the site’s interface according to all modern trends, optimize it for browsers and develop a mobile version of the website.",
        typography: {
          fontName: "Roboto",
        },
        textStyles: [
          {
            name: "H1 - Text Styles",
            size: "30px",
            weight: "bold",
          },
          {
            name: "H2 - Text Styles",
            size: "16px",
            weight: "500",
          },
          {
            name: "H3 - Text Styles",
            size: "15px",
            weight: "300",
          },
        ],
        colors: [
          {
            color: "#007ab9",
          },
          {
            color: "#000",
          },
          {
            color: "#ffffff",
          },
          {
            color: "#f3f4f4",
          },
        ],
        whatIDid: [
          {
            name: "Front-end",
          },
          {
            name: "Website Design",
          },
          {
            name: "CMS",
          },
          {
            name: "Responsive Design",
          },
        ],
        technologyUsed: "HTML, CSS3, CMS, PHP, JavaScript, JQuery, Photoshop, Figma",
        desktopImg: [
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/desktop-version-kaztransgas4.png"),
            imgDescr: "",
          },
        ],
        mobileImg: [
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas1.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas2.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas3.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas5.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
          {
            img: require("./img/work-kaztransgas/mobile-version-kaztransgas6.png"),
            imgDescr: "",
          },
          
        ],
      },
    },
  ],
  currentWorkId: 0,
};

const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case newWorkType:
      let newWork = {
        id: 3,
        workPreview: require(`${action.newWorkPreview}`), //action.newWorkPreview
      };
      return {
        ...state,
        Works: [...state.Works, newWork],
      };
    case setCurrentWorkType:
      return {
        ...state,
        currentWorkId: action.currentWorkId,
      };
    default:
      return state;
  }
};

export const addWork = (newWorkPreview) => {
  return {
    type: newWorkType,
    newWorkPreview,
  };
};
export const setWorkId = (currentWorkId) => {
  return {
    type: setCurrentWorkType,
    currentWorkId,
  };
};

export default worksReducer;
