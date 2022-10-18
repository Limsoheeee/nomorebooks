import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";
import styled from "styled-components";
import { __getPostList } from "../modules/bookSlice";
import { useEffect } from "react";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.bookslice.posts);

  useEffect(() => {
    dispatch(__getPostList());
  }, [dispatch]);
  //처음들어가는순간에만 db에 접근해서 state를 갱신!!

  return (
    <PL>
      <LT>오늘은 어떤 책을 읽어볼까요?</LT>
      <FR>
        {posts.map(post => {
          const { name, title, body, id } = post;
          return (
            <PostItem key={id} id={id} name={name} title={title} body={body} />
          );
        })}
      </FR>
    </PL>
  );
};

const PL = styled.div`
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 80px auto;
`;

const LT = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bold;
`;

const FR = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export default PostList;
