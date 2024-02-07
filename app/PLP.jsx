"use client";

import algoliasearch from "algoliasearch/lite";
import { Configure, Hits } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

export const ATTRIBUTES_TO_RETRIEVE = Object.freeze([
  "productNumber",
  "name",
  "category",
]);

const ATTRIBUTES_TO_HIGHLIGHT = [];

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_ID
);

export function PLP({ categoryId = "5810" }) {
  return (
    <InstantSearchNext
      indexName="mammut_products_de_de"
      searchClient={searchClient}
    >
      <Configure
        filters={`eshopListed:true AND hasSellableSeason:true AND storeType:main AND (hasCurrentSeason:true OR hasPreviousSeason:true) AND (inStock:true OR hasCurrentSeason:true) AND categories.id:${categoryId}`}
        attributesToRetrieve={ATTRIBUTES_TO_RETRIEVE}
        attributesToHighlight={ATTRIBUTES_TO_HIGHLIGHT}
      />

      <Hits />
    </InstantSearchNext>
  );
}
