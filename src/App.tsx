import React, { useEffect, useState } from "react";
import { EntryCollection } from "contentful";
import { IHomePageBannerFields } from "./schema/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { client } from "./contentful-client";
import "./App.css";
function App() {
  const [results, setResults] = useState<null | EntryCollection<
    IHomePageBannerFields
  >>(null);

  useEffect(() => {
    client
      .getEntries<IHomePageBannerFields>()
      .then((results) => {
        setResults(results);
      })
      .catch((error) => console.error(error));
  }, []);

  if (results && results.items.length > 0) {
    const { fields } = results.items[0];
    const { bannerRichText } = fields;
    if (bannerRichText)
      return (
        <>
          <div
            style={{
              background: "#c9653e",
              color: "#fff",
              padding: "60px 0px",
            }}
          >
            <div
              style={{
                maxWidth: "800px",
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: "0 auto",
              }}
            >
              <div style={{ flex: 1 }}>
                <h1>{fields.bannerTitle}</h1>
                <p>{fields.bannerShortText}</p>
                <p>The banner theme is: {fields.bannerTheme}</p>
              </div>

              <div style={{ flex: 1 }}>
                <img
                  src={fields.bannerImage?.fields.file.url}
                  style={{ width: "100%", height: "auto", borderRadius: "4px" }}
                  alt="dog staring at you"
                />
              </div>
            </div>
          </div>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {documentToReactComponents(bannerRichText)}
          </div>
        </>
      );
  }

  return <div>Page is loading...</div>;
}

export default App;
