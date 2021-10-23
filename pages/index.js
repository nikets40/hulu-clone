import Head from "next/head";
import Image from "next/image";
import Categories from "../components/Categories";
import Header from "../components/Header";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ categories, movieResults }) {

  return (
    <div className="">
      <Head>
        <title>Hulu clone</title>
        <meta
          name="description"
          content="This is a simple front end clone of hulu using react.js and next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories categories={categories.genres} />

      <Results results={movieResults.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const baseURL = "https://api.themoviedb.org/3/";
  const categories = await fetch(baseURL + requests.fetchGenres).then((res) =>
    res.json()
  );

  const genreId = context.query.genreId;
  let resultsUrl = "";
  if (genreId === undefined) resultsUrl = baseURL + requests.fetchTrending;
  else resultsUrl = baseURL + requests.fetchMovies + genreId;

  const movieResults = await fetch(resultsUrl).then((result) =>
    result.json()
  );

  return {
    props: {
      categories: categories,
      // url: resultsUrl,
      movieResults: movieResults,
    },
  };
}
