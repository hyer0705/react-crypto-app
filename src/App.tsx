import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 5rem 0;
`;

function App() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}

export default App;
