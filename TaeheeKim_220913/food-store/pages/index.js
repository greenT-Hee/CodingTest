import About from "../components/About";
import Head from "next/head";

export default function Home({ bgImage, imageList }) {
  console.log(bgImage);
  return (
    <>
      <Head>
        <meta property="og:description" content="맛집 리스트 사이트" />
        <meta property="og:site_name" content="AWSOME FOOD STORE" />
        <title>AWSOME FOOD MARKET</title>
        <link rel="shortcut icon" href="/image/store.png" />
      </Head>
      <About bgImage={bgImage} imageList={imageList} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      bgImage: "/image/foodBg.jpg",
      imageList: [
        {
          url: "/image/food3.jpg",
          name: "디저트 사진",
          info: "DESSERT",
        },
        {
          url: "/image/food1.jpg",
          name: " 식사 사진",
          info: "FOOD",
        },
        {
          url: "/image/food5.jpg",
          name: "카페 사진",
          info: "CAFE",
        },
      ],
    },
  };
}
