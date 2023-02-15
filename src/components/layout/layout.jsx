import styled from 'styled-components';
import Title from '../ui-kit/title/title';

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 12px;
`;

const Header = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.white};
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header>
        <Title size='42'>Game Showcase.</Title>
      </Header>

      <div>{children}</div>
    </Container>
  );
}
