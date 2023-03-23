import { gql } from "graphql-request";
import sortNewsByImage from "./sourceNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  //GraphQL query

  const URL_WITH_CATEGORY = `https://newsapi.org/v2/everything?q=${category && category}&apiKey=662a6724c276465e8e487964206f7915`
  const URL= `https://newsapi.org/v2/everything?q=all&apiKey=662a6724c276465e8e487964206f7915`


  const query = gql`
    query MyQuery(
      $access_key: String!
      $categories: String!
      $keywords: String
    ) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "gb"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          country
          description
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  // Fetch function with nextjs 13 caching...
  const res = await fetch(category ? URL_WITH_CATEGORY : URL, {
    method: "GET",
  });
  
  const newsResponse = await res.json();
  return newsResponse;
};

export default fetchNews;
