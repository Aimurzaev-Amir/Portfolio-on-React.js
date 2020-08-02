import React from "react";
import ShareArticle from "./ShareArticle";
import "../BlogPage.css";

let Article = (props) => {
  console.log(props.currentArticleId);
  return (
    <div className="articleReadMore blogPaper wrapper">
      <div className="blogOverlay">
        <div className="blogArticle">
          <h1>Useful extensions for beginners in VS Code</h1>
          <hr />
          <div className="dateViews">
            <p className="date">By Amir Aimurzayev on 15 Feb 2020</p>
          </div>
          <img src="../img/articles/article2/vscode-article.png" alt="" />
          <article>
            Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and
            macOS. It includes support for debugging, embedded Git control and GitHub, syntax
            highlighting, intelligent code completion, snippets, and code refactoring. It is highly
            customizable, allowing users to change the theme, keyboard shortcuts, preferences, and
            install extensions that add additional functionality. The source code is free and open
            source and released under the permissive MIT License. The compiled binaries are freeware
            and free for private or commercial use.
            <br />
            <br />I collected on this page the most convenient extensions for those who are just
            starting to work with VS Code. Some of them are the most necessary, some less, but all
            of them are very convenient.
          </article>
          <div className="articleBlock">
            <img src="../img/articles/article2/materialTheme-icon.png" alt="" />
            <h3>Material Theme</h3>
            <p>
              The theme for VSCode, with the most convenient way to work, has more than 5 million
              different options. Material theme is the most popular theme in VSCode. This theme is
              ideal for fans of dark colors and for those who like to work at night.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/liveServer-icon.png" alt="" />
            <h3>Live Server</h3>
            <p>
              This plugin is launched when you right-click on the HTML page, in the drop-down menu
              you need to select "Open with Live Server". After that, a tab with your project will
              open in the browser, which will refresh the page every time you make any changes to
              your project. It seems to me that this is not only convenient, but also effective.
              Since even a click on the reboot button takes a lot of time.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/csspeak-icon.png" alt="" />
            <h3>CSS Peek</h3>
            <p>
              Thanks to this plugin, you can go to css definitions directly from the html file, for
              this you need to right-click on the definition in the html file, and then select "Go
              to definition". This plugin is very convenient when you have many classes and their
              search can take time.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/bracketPairColorizer-icon.png" alt="" />
            <h3>Bracket Pair Colorizer</h3>
            <p>
              This plugin paints the opening and closing brackets in the corresponding colors. Most
              often it is used in Javascript.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/prettier-icon.png" alt="" />
            <h3>Prettier - Code formatter</h3>
            <p>
              The code formatting plugin that supports a wide range of languages. Bring any code to
              its normal form by pressing Ctrl + shift + p and selecting Format document in the
              drop-down menu. It enforces a consistent style by parsing your code and re-printing it
              with its own rules that take the maximum line length into account, wrapping code when
              necessary.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/autoRenameTag-icon.png" alt="" />
            <h3>Auto Rename Tag</h3>
            <p>
              A convenient plugin for html, which when you change the opening / closing tag, it
              automatically changes another opening / closing tag.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/pathAutocomplete-icon.png" alt="" />
            <h3>Path Autocomplete</h3>
            <p>
              This is a very simple plugin that is used in both js and html. When writing the path
              to the file, the plugin indicates which files and folders are in the project. Thanks
              to this plugin, there is no need to remember the names of the necessary files, you
              just select the one you need in Explorer.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/htmlCssSupport-icon.png" alt="" />
            <h3>HTML CSS Support</h3>
            <p>
              If you have a lot of classes, identifiers in your work and you often have errors in
              the names when you write them manually, then this plugin is for you. This plugin
              automatically completes the name of the id or class for the html attribute based on
              the definitions found in your workspace or in the external files referenced by link.
            </p>
          </div>

          <div className="articleBlock">
            <img src="../img/articles/article2/emmet-icon.png" alt="" />
            <h3>Emmet</h3>
            <p>
              Sorry for the banality, but I could not help but include this plugin in the list of
              must-haves for beginners. Emmet plugin support is already built into VSCode.
              Additionally, you do not need to install the plugin. Emmet takes the snippets idea to
              a whole new level: you can type CSS-like expressions that can be dynamically parsed,
              and produce output depending on what you type in the abbreviation. Emmet is developed
              and optimised for web-developers whose workflow depends on HTML/XML and CSS, but can
              be used with programming languages too.
            </p>
          </div>

          <p>You can install any of these plugins by going to the VSCode Market Place.</p>
        </div>
        <ShareArticle />
      </div>
    </div>
  );
};

export default Article;
