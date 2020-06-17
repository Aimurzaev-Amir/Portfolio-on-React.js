const newWorkType = "WORKSREDUCER/ADD-WORK";

let initialState = {
  Works: [
    {
      id: 1,
      workName: "KazTransGas",
      smallDescription: "Website",
      workPreview: require("./img/work-cards/kaztransgas-card.png"),
      workPhoto: require("./img/work-cards/kaztransgas-card.png"),
      previewDescription: "kaztransgas redesign website Aimurzaev Amir",
      urlAdress: "works/work-KazTransGas.html"
    },
    {
      id: 2,
      workName: "Be Dentist",
      smallDescription: "Website",
      workPreview: require("./img/work-cards/bedentist-card.png"),
      workPhoto: require("./img/work-cards/kaztransgas-card.png"),
      previewDescription: "Be Dentist dental clinic website",
      urlAdress: "works/work-BeDentist.html"
    },
    {
      id: 3,
      workName: "Move",
      smallDescription: "Online Shop",
      workPreview: require("./img/work-cards/move-card.png"),
      workPhoto: require("./img/work-cards/kaztransgas-card.png"),
      previewDescription: "Move online shop website",
      urlAdress: "works/work-Move.html"
    },
  ],
};

const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case newWorkType:
      let newWork = {
        id: 4,
        workPreview: require(`${action.newWorkPreview}`), //action.newWorkPreview
      };
      return {
        ...state,
        Works: [...state.Works, newWork],
      };
    default:
      return state;
  }
};

export const addWork = (newWorkPreview) => {
  return {
    type: newWorkType, newWorkPreview,
  };
};

export default worksReducer;
