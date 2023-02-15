import styled from 'styled-components';
import Title from '../../ui-kit/title/title';

const CardWrapper = styled.div`
  background: #202020;
  cursor: pointer;
  overflow: hidden;
  border-radius: 6px;
`;

const CardDesriptionWrapper = styled.div`
  padding: 15px;
`;

const CardPoster = styled.img`
  width: 100%;
  height: 255px;
  object-fit: cover;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const Rating = styled.span`
  color: gold;
`;

const Released = styled.span``;

export default function GameCardsItem({ game, handleClick }) {
  const onClick = () => handleClick(game.id);

  return (
    <CardWrapper onClick={onClick}>
      <CardPoster
        loading='lazy'
        src={game.background_image}
        alt={game.name} />

      <CardDesriptionWrapper>
        <MetaInfo>
          <Rating>{game.rating}</Rating>
          <Released>{new Date(game.released)
            .toLocaleDateString()}</Released>
        </MetaInfo>

        <Title size='22'>{game.name}</Title>
      </CardDesriptionWrapper>
    </CardWrapper>
  );
}
