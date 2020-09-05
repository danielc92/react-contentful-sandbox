import React, { useEffect, useState } from "react";
import { createClient, EntryCollection } from "contentful";
import {
  IHomePageBannerFields,
} from "./schema/generated/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN || "",
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID || "",
});

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
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1>{fields.bannerTitle}</h1>
          <img src={fields.bannerImage?.fields.file.url} alt="dog staring at you" />
          {documentToReactComponents(bannerRichText)}
        </div>
      );
  }

  return <div>loading</div>;
}

export default App;
