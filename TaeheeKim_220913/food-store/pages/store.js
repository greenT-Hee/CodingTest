import ListItems from "../components/ListItems";
import Head from "next/head";
import axios from "axios";

export default function store({ list }) {
  return (
    <>
      <Head>
        <meta property="og:description" content="맛집 리스트 사이트" />
        <meta property="og:site_name" content="AWSOME FOOD STORE" />
        <title>AWSOME FOOD MARKET</title>
        <link rel="shortcut icon" href="/image/store.png" />
      </Head>
      <ListItems list={list} />
    </>
  );
}

export async function getStaticProps() {
  const baseURL = "http://localhost:9000/stores";
  const response = await axios.get(baseURL);
  const data = response.data;

  return {
    props: {
      list: data,
    },
  };
}
