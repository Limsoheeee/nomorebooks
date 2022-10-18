import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostItem = ({ id, name, title, body }) => {
  const navigate = useNavigate();
  return (
    <>
      <PI>
        <div onClick={() => navigate(`/detail/${id}`)}>
          <p>{`${title}`}</p>
          <p>{`${name}`}</p>
        </div>
      </PI>
    </>
  );
};

const PI = styled.div`
  width: 550px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export default PostItem;
