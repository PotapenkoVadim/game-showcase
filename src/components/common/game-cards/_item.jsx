import styled from 'styled-components';
import { configuration } from '../../../configuration';
import { transformToLocalDate } from '../../../utils';
import Rating from '../../ui-kit/rating/rating';
import Title from '../../ui-kit/title/title';

const CardDesriptionWrapper = styled.div`
  padding: 15px;
`;

const CardPoster = styled.img`
  width: 100%;
  height: 255px;
  object-fit: cover;
  transition: all 0.6s ease-out;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const PosterWrapper = styled.div`
  overflow: hidden;
`;

const CardWrapper = styled.div`
  background: #202020;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 3px 3px 15px black;

  &:hover ${CardPoster} {
    transform: scale(1.2);
  }
`;

export default function GameCardsItem({ game, handleClick }) {
  const onClick = () => handleClick(game.id);

  return (
    <CardWrapper onClick={onClick}>
      <PosterWrapper>
        <CardPoster
          loading='lazy'
          src={game.background_image || configuration.mockImage.src}
          alt={game.name}
        />
      </PosterWrapper>

      <CardDesriptionWrapper>
        <MetaInfo>
          <Rating>{game.rating}</Rating>
          <span>{transformToLocalDate(game.released)}</span>
        </MetaInfo>

        <Title size='22'>{game.name}</Title>
      </CardDesriptionWrapper>
    </CardWrapper>
  );
}
