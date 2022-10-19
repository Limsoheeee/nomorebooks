import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../modules/bookSlice";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { __createReview } from "../modules/bookSlice";
import { Button } from "../elements/index";

const PostForm = () => {
  const [review, setReview] = useState({});
  const dispatch = useDispatch();
  // const refs = useRef();

  // useEffect(() => {}, [review])

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (review.name && review.title && review.body !== "") {
      dispatch(__createReview(review));
      setReview("");
    } else {
      alert("내용을 입력해주세요.");
    }
  };

  return (
    <>
      <PF onSubmit={onSubmitHandler}>
        <p>오늘의 책 등록하기</p>
        <Inputwrapper>
          <input
            value={review.title || ""}
            name={"title"}
            maxLength="20"
            placeholder="책 이름"
            onChange={onChangeHandler}
          ></input>
          {/* childern 안들어가면 지움 */}
          <input
            value={review.name || ""}
            name={"name"}
            maxLength="10"
            placeholder="작성자"
            onChange={onChangeHandler}
          ></input>
        </Inputwrapper>
        <textarea
          value={review.body || ""}
          name={"body"}
          maxLength="1000"
          placeholder="감상평을 적어주세요"
          onChange={onChangeHandler}
        ></textarea>
        <Button
          backColor={"black"}
          border={"true"}
          shadow={"true"}
          size={"big"}
          color={"white"}
          type="submit"
        >
          추가하기
        </Button>
      </PF>
    </>
  );
};

const PF = styled.form`
  display: flex;
  width: 500px;
  height: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  flex-direction: column;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 100px auto 0 auto;
`;

const Inputwrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PostForm;
