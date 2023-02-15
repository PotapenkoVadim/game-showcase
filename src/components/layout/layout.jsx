import { useRouter } from 'next/router';
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

const TitleWrapper = styled.div`
  cursor: pointer;
`;

export default function Layout({ children }) {
  const router = useRouter();

  const visitHomePage = () => {
    router.push('/');
  };

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title onClick={visitHomePage} size='42'>Game Showcase.</Title>
        </TitleWrapper>
      </Header>

      <div>{children}</div>
    </Container>
  );
}
