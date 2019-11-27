import styled from "styled-components";

const Container = styled.div`
  display: inline-flex;
  height: 150px;
  width: calc(20% - 45px);
  margin-top: 16px;
  margin-bottom: 20px;
  margin-right: 15px;
  padding: 15px;
  background: white;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Text = styled.div`
  position: relative;
  margin-bottom: 15px;
  height: 3.6em;

  font-size: 16px;
  font-weight bold;
  color: #9D9FB0;

  overflow: hidden;

  ::after {
    content: "";
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;
export { Container, Content, Text };
