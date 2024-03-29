import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { Card } from "./components/card";

const App = () => {
  const description = `
Hello, this is an example short description
`;

  return (
    <React.StrictMode>
      <Card 
        version="1.0"
        contributor="More"
        description={description}
        repoName="Prueba1"
      />
    </React.StrictMode>
  );
};

if (typeof document !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("root"));
}

module.exports.renderCard = (data: {
  version: string;
  contributor: string;
  description: string;
  repoName: string;
}) =>
  ReactDOMServer.renderToStaticMarkup(
    <Card
      version={data.version}
      contributor={data.contributor}
      description={data.description}
      repoName={data.repoName}
    />
  );
