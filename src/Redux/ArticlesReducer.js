const newArticleType = "ARTICLESREDUCER/ADD-WORK";
const setCurrentArticleType = "ARTICLESRUDUCER/CHANGE-ARTICLE-ID"

let initialState = {
  Articles: [
    {
      id: 0,
      articleName: "Feedback form html + css + php + JavaScript + jQuery",
      articleDate: "28 February",
      articleSmallDescription:
        "Hello everyone, friends! In this article I want to share with you a simple feedback form for a site running on PHP, JavaScript and Jquery. This form has some additional functions, which are discussed in more detail later.",
      articlePreview: require("./img/articles/article4/article4-main.png"),
      previewDescription: "article on portfolio site",
      urlAdress: "/blog/feedback-form-html+css+php+JavaScript+jQuery",
      comments: 3,
      likes: 8,
    },
    {
      id: 1,
      articleName: "Useful extensions for beginners in VS Code",
      articleDate: "15 February",
      articleSmallDescription:
        "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.",
      articlePreview: require("./img/articles/article2/vscode-article.png"),
      previewDescription: "article on portfolio site",
      urlAdress: "/blog/useful-extensions-for-beginners-in-VSCode",
      comments: 2,
      likes: 5,
    },
    {
      id: 2,
      articleName: "Competitor site analysis services",
      articleDate: "01 February",
      articleSmallDescription:
        "Smart people learn from the mistakes of others and achievements. Also, companies that want to achieve great success can learn from the experience of their competitors. Observing competitors will help not only to identify their strengths and weaknesses, but also to understand what your company should strive for and in which direction to move.",
      articlePreview: require("./img/articles/article3/article3-main.jpg"),
      previewDescription: "article on portfolio site",
      urlAdress: "/blog/competitor-site-analysis-services",
      comments: 5,
      likes: 7,
    },
  ],
  currentArticleId: 1,
};

const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case newArticleType:
      let newArticle = {
        id: 4,
        articleName: "KazTransGas",
        articleDate: "",
        articleSmallDescription: "Website",
        articlePreview: require(`${action.newArticlePreview}`),
        previewDescription: "kaztransgas redesign website Aimurzaev Amir",
        urlAdress: "works/work-KazTransGas.html",
      };
      return {
        ...state,
        Works: [...state.Works, newArticle],
      };
      case setCurrentArticleType:
        return {
          ...state,
          currentArticleId: action.currentArticleId,
        };
      default:
      return state;
  }
};

export const addArticle = (newArticlePreview) => {
  return {
    type: newArticleType,
    newArticlePreview,
  };
};
export const setArticleId = (currentArticleId) => {
  return {
    type: setCurrentArticleType,
    currentArticleId,
  };
};

export default ArticlesReducer;
