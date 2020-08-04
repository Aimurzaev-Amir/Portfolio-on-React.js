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
      articlePreview: require("./img/articles/FEEDBACK FORM HTML + CSS + PHP + JAVASCRIPT + JQUERY/article4-main.png"),
      previewDescription: "article on portfolio site",
      urlAdress: "/blog/feedback-form-html+css+php+JavaScript+jQuery",
      comments: 3,
      likes: 8,
      fullVersion: [
        {
          sectionTitle: null,
          sectionText: "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source and released under the permissive MIT License. The compiled binaries are freeware and free for private or commercial use.",
          sectionImg: null,
          imgPositioning: null,
        },
        {
          sectionTitle: null,
          sectionText: "I collected on this page the most convenient extensions for those who are just starting to work with VS Code. Some of them are the most necessary, some less, but all of them are very convenient.",
          sectionImg: null,
        },
        {
          sectionTitle: "Material Theme",
          sectionText: "The theme for VSCode, with the most convenient way to work, has more than 5 million different options. Material theme is the most popular theme in VSCode. This theme is ideal for fans of dark colors and for those who like to work at night.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/materialTheme-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Live Server",
          sectionText: "This plugin is launched when you right-click on the HTML page, in the drop-down menu you need to select 'Open with Live Server'. After that, a tab with your project will open in the browser, which will refresh the page every time you make any changes to your project. It seems to me that this is not only convenient, but also effective. Since even a click on the reboot button takes a lot of time.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/liveServer-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "CSS Peek",
          sectionText: "Thanks to this plugin, you can go to css definitions directly from the html file, for this you need to right-click on the definition in the html file, and then select 'Go to definition'. This plugin is very convenient when you have many classes and their search can take time.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/csspeak-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Bracket Pair Colorizer",
          sectionText: "This plugin paints the opening and closing brackets in the corresponding colors. Most often it is used in Javascript.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/bracketPairColorizer-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Prettier - Code formatter",
          sectionText: "The code formatting plugin that supports a wide range of languages. Bring any code to its normal form by pressing Ctrl + shift + p and selecting Format document in the drop-down menu. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/prettier-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Auto Rename Tag",
          sectionText: "A convenient plugin for html, which when you change the opening / closing tag, it automatically changes another opening / closing tag.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/autoRenameTag-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Path Autocomplete",
          sectionText: "This is a very simple plugin that is used in both js and html. When writing the path to the file, the plugin indicates which files and folders are in the project. Thanks to this plugin, there is no need to remember the names of the necessary files, you just select the one you need in Explorer.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/pathAutocomplete-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "HTML CSS Support",
          sectionText: "If you have a lot of classes, identifiers in your work and you often have errors in the names when you write them manually, then this plugin is for you. This plugin automatically completes the name of the id or class for the html attribute based on the definitions found in your workspace or in the external files referenced by link.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/htmlCssSupport-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Emmet",
          sectionText: "Sorry for the banality, but I could not help but include this plugin in the list of must-haves for beginners. Emmet plugin support is already built into VSCode. Additionally, you do not need to install the plugin. Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/emmet-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: null,
          sectionText: "You can install any of these plugins by going to the VSCode Market Place.",
          sectionImg: null,
          imgPositioning: null,
        },
      ]
    },
    {
      id: 1,
      articleName: "Useful extensions for beginners in VS Code",
      articleDate: "15 February",
      articleSmallDescription:
        "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring.",
      articlePreview: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/vscode-article.png"),
      previewDescription: "article on portfolio site",
      urlAdress: "/blog/useful-extensions-for-beginners-in-VSCode",
      comments: 2,
      likes: 5,
      fullVersion: [
        {
          id: 0,
          sectionTitle: null,
          sectionText: "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source and released under the permissive MIT License. The compiled binaries are freeware and free for private or commercial use.",
          sectionImg: null,
          sectionImgDescr: "",
          imgPositioning: null,
        },
        {
          id: 1,
          sectionTitle: null,
          sectionText: "I collected on this page the most convenient extensions for those who are just starting to work with VS Code. Some of them are the most necessary, some less, but all of them are very convenient.",
          sectionImg: null,
          sectionImgDescr: "",
          imgPositioning: null,
        },
        {
          id: 2,
          sectionTitle: "Material Theme",
          sectionText: "The theme for VSCode, with the most convenient way to work, has more than 5 million different options. Material theme is the most popular theme in VSCode. This theme is ideal for fans of dark colors and for those who like to work at night.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/materialTheme-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 3,
          sectionTitle: "Live Server",
          sectionText: "This plugin is launched when you right-click on the HTML page, in the drop-down menu you need to select 'Open with Live Server'. After that, a tab with your project will open in the browser, which will refresh the page every time you make any changes to your project. It seems to me that this is not only convenient, but also effective. Since even a click on the reboot button takes a lot of time.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/liveServer-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 4,
          sectionTitle: "CSS Peek",
          sectionText: "Thanks to this plugin, you can go to css definitions directly from the html file, for this you need to right-click on the definition in the html file, and then select 'Go to definition'. This plugin is very convenient when you have many classes and their search can take time.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/csspeak-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 5,
          sectionTitle: "Bracket Pair Colorizer",
          sectionText: "This plugin paints the opening and closing brackets in the corresponding colors. Most often it is used in Javascript.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/bracketPairColorizer-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 6,
          sectionTitle: "Prettier - Code formatter",
          sectionText: "The code formatting plugin that supports a wide range of languages. Bring any code to its normal form by pressing Ctrl + shift + p and selecting Format document in the drop-down menu. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/prettier-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 7,
          sectionTitle: "Auto Rename Tag",
          sectionText: "A convenient plugin for html, which when you change the opening / closing tag, it automatically changes another opening / closing tag.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/autoRenameTag-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 8,
          sectionTitle: "Path Autocomplete",
          sectionText: "This is a very simple plugin that is used in both js and html. When writing the path to the file, the plugin indicates which files and folders are in the project. Thanks to this plugin, there is no need to remember the names of the necessary files, you just select the one you need in Explorer.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/pathAutocomplete-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 9,
          sectionTitle: "HTML CSS Support",
          sectionText: "If you have a lot of classes, identifiers in your work and you often have errors in the names when you write them manually, then this plugin is for you. This plugin automatically completes the name of the id or class for the html attribute based on the definitions found in your workspace or in the external files referenced by link.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/htmlCssSupport-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 10,
          sectionTitle: "Emmet",
          sectionText: "Sorry for the banality, but I could not help but include this plugin in the list of must-haves for beginners. Emmet plugin support is already built into VSCode. Additionally, you do not need to install the plugin. Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/emmet-icon.png"),
          sectionImgDescr: "",
          imgPositioning: "articleImgCentering",
        },
        {
          id: 11,
          sectionTitle: null,
          sectionText: "You can install any of these plugins by going to the VSCode Market Place.",
          sectionImg: null,
          sectionImgDescr: "",
          imgPositioning: null,
        },
      ]
    },
    {
      id: 2,
      articleName: "Competitor site analysis services",
      articleDate: "01 February",
      articleSmallDescription:
        "Smart people learn from the mistakes of others and achievements. Also, companies that want to achieve great success can learn from the experience of their competitors. Observing competitors will help not only to identify their strengths and weaknesses, but also to understand what your company should strive for and in which direction to move.",
      articlePreview: require("./img/articles/COMPETITOR SITE ANALYSIS SERVICES/article3-main.jpg"),
      previewDescription: "article on portfolio site",
      urlAdress: "/blog/competitor-site-analysis-services",
      comments: 5,
      likes: 7,
      fullVersion: [
        {
          sectionTitle: null,
          sectionText: "Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control and GitHub, syntax highlighting, intelligent code completion, snippets, and code refactoring. It is highly customizable, allowing users to change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality. The source code is free and open source and released under the permissive MIT License. The compiled binaries are freeware and free for private or commercial use.",
          sectionImg: null,
          imgPositioning: null,
        },
        {
          sectionTitle: null,
          sectionText: "I collected on this page the most convenient extensions for those who are just starting to work with VS Code. Some of them are the most necessary, some less, but all of them are very convenient.",
          sectionImg: null,
        },
        {
          sectionTitle: "Material Theme",
          sectionText: "The theme for VSCode, with the most convenient way to work, has more than 5 million different options. Material theme is the most popular theme in VSCode. This theme is ideal for fans of dark colors and for those who like to work at night.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/materialTheme-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Live Server",
          sectionText: "This plugin is launched when you right-click on the HTML page, in the drop-down menu you need to select 'Open with Live Server'. After that, a tab with your project will open in the browser, which will refresh the page every time you make any changes to your project. It seems to me that this is not only convenient, but also effective. Since even a click on the reboot button takes a lot of time.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/liveServer-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "CSS Peek",
          sectionText: "Thanks to this plugin, you can go to css definitions directly from the html file, for this you need to right-click on the definition in the html file, and then select 'Go to definition'. This plugin is very convenient when you have many classes and their search can take time.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/csspeak-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Bracket Pair Colorizer",
          sectionText: "This plugin paints the opening and closing brackets in the corresponding colors. Most often it is used in Javascript.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/bracketPairColorizer-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Prettier - Code formatter",
          sectionText: "The code formatting plugin that supports a wide range of languages. Bring any code to its normal form by pressing Ctrl + shift + p and selecting Format document in the drop-down menu. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/prettier-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Auto Rename Tag",
          sectionText: "A convenient plugin for html, which when you change the opening / closing tag, it automatically changes another opening / closing tag.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/autoRenameTag-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Path Autocomplete",
          sectionText: "This is a very simple plugin that is used in both js and html. When writing the path to the file, the plugin indicates which files and folders are in the project. Thanks to this plugin, there is no need to remember the names of the necessary files, you just select the one you need in Explorer.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/pathAutocomplete-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "HTML CSS Support",
          sectionText: "If you have a lot of classes, identifiers in your work and you often have errors in the names when you write them manually, then this plugin is for you. This plugin automatically completes the name of the id or class for the html attribute based on the definitions found in your workspace or in the external files referenced by link.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/htmlCssSupport-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: "Emmet",
          sectionText: "Sorry for the banality, but I could not help but include this plugin in the list of must-haves for beginners. Emmet plugin support is already built into VSCode. Additionally, you do not need to install the plugin. Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.",
          sectionImg: require("./img/articles/USEFUL EXTENSIONS FOR BEGINNERS IN VS CODE/emmet-icon.png"),
          imgPositioning: "articleImgCentering",
        },
        {
          sectionTitle: null,
          sectionText: "You can install any of these plugins by going to the VSCode Market Place.",
          sectionImg: null,
          imgPositioning: null,
        },
      ]
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
