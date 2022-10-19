import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPost, __delPost, __updatePost } from "../modules/bookSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  const review = useSelector(state => state.bookslice.post);
  const [editReview, setEditReview] = useState(review);

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch, id]);

  const deleteHandler = () => {
    dispatch(__delPost(id));
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setEditReview({ ...editReview, [name]: value, id: id });
  };

  const submitHandler = () => {
    dispatch(__updatePost(editReview));
    setEdit(false);
  };

  return (
    <DIV>
      {edit ? (
        <form>
          <input
            name={"title"}
            value={editReview.title || review.title}
            onChange={onChangeHandler}
          />
          <input
            name={"name"}
            value={editReview.name || review.name}
            onChange={onChangeHandler}
          />
          <input
            name={"body"}
            value={editReview.body || review.body}
            onChange={onChangeHandler}
          />
        </form>
      ) : (
        <div>
          <p>{review.title}</p>
          <p>{review.name}</p>
          <p>{review.body}</p>
        </div>
      )}
      {edit ? (
        <button onClick={submitHandler}>완료</button>
      ) : (
        <button
          onClick={() => {
            setEdit(true);
          }}
        >
          수정
        </button>
      )}
      <button
        onClick={() => {
          deleteHandler(id);
          navigate("/");
        }}
      >
        삭제
      </button>
    </DIV>
  );
};

const DIV = styled.div`
  margin-top: 200px;
`;

export default Detail;
