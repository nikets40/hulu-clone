import Head from "next/head";
import Image from "next/image";
import Categories from "../components/Categories";
import Header from "../components/Header";
import requests from "../utils/requests";

export default function Home({ categories }) {
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
    </div>
  );
}

export async function getServerSideProps(context) {
  const baseURL = "https://api.themoviedb.org/3/";
  const categories = await fetch(baseURL + requests.fetchGenres.url).then(
    (res) => res.json()
  );
  return {
    props: {
      categories: categories,
    },
  };
}
