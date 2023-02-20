import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Slider from '../../components/common/slider/slider';
import Note from '../../components/ui-kit/note/note';
import Rating from '../../components/ui-kit/rating/rating';
import Title from '../../components/ui-kit/title/title';
import { apiClient } from '../../services/api/api-client';
import { wrapper } from '../../store';
import { loadGameFailure, loadGameSuccess } from '../../store/game';
import { transformToLocalDate } from '../../utils';

const Wrapper = styled.div`
  margin: 15px 0 25px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
`;

const Poster = styled.img`
  width: 100%;
  margin: 15px 0;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Description = styled.div`
  margin: 10px 0;
`;

const Link = styled.a`
  color: tomato;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Game() {
  const game = useSelector((state) => state.game);

  return (
    <Wrapper>
      {game.item && (
        <>
          <TitleWrapper>
            <Title size='36'>{game.item.name}</Title>
          </TitleWrapper>

          {game.item.background_image && (
            <Poster
              src={game.item.background_image}
              loading='lazy'
              alt={game.item.name}
            />
          )}

          <MetaInfo>
            <Rating>{game.item.rating}</Rating>
            <span>{transformToLocalDate(game.item.released)}</span>
          </MetaInfo>

          <Title size='18'>About game:</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: game.item.description }}
          />
          <Link
            target='_blank'
            href={game.item.website}>
            Visit WebSite
          </Link>

          <Slider images={game.item.screenshots.results} />
        </>
      )}

      {!game.item && <Note>Sorry game not found</Note>}
    </Wrapper>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ query }) => {
    try {
      const gameResponse = await apiClient.get(`/games/${query.slug}`);
      const gameScreenshotsResponse = await apiClient.get(
        `/games/${query.slug}/screenshots`
      );
      const game = { ...gameResponse, screenshots: gameScreenshotsResponse };

      if (gameResponse.detail === 'Not found.') {
        throw new Error('Game not found');
      }

      store.dispatch(loadGameSuccess(game));
    } catch (error) {
      store.dispatch(loadGameFailure(error));
    }

    return {
      props: {}
    };
  }
);
