import styled from "styled-components";

const RootContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: inline-flex;
  background-color: #282c34;
  flex: 1;
`;

const ContentSection = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  color: white;
`;
const Logo = styled.div`
  height: 30vmin;
  background-image: url(${props => props.image && props.image});
  background-position: center center;
  background-repeat: no-repeat;
`;

const SearchBarSection = styled.div`
  align-self: center;
  background: white;
  width: 40vw;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
`;

const GridSection = styled.section`
  height: calc(100% - 88px);
  width: calc(100% - 28px);
  padding: 20px;
  overflow-y: scroll;
`;

export { RootContainer, ContentSection, Logo, SearchBarSection, GridSection };
