import Head from "next/head";

const HeadTitle = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadTitle.defaultProps = {
  title: "JongHyun's Portfolio",
  keyword: "JongHyun's Portfolio 신입프론트엔드 ",
  contents: "JongHyun's Portfolio 신입프론트엔드 ",
};
export default HeadTitle;
