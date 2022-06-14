import { useRouter } from "next/router";
import styled from "styled-components";
import HeadTitle from "../../components/HeadTitle";

const Detail = ({ data: props }) => {
  const router = useRouter;
  //   const { id } = router.query();
  <HeadTitle />;
  console.log(props);
  return (
    <>
      <p>asd</p>
    </>
  );
};

export default Detail;
