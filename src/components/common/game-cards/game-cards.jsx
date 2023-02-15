import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import GameCardsItem from './_item';
import { useEffect } from 'react';

const GameCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 25px;
  gap: 25px;

  @media ${(props) => props.theme.media.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function GameCard({ games, onScroll }) {
  const router = useRouter();

  const { ref, inView } = useInView({
    threshold: 1
  });

  useEffect(() => {
    const nextPage = games.currentPage + 1;

    if (inView && !games.loading && nextPage < games.totalPages) {
      onScroll(games.currentPage + 1);
    }
  }, [inView, games]);

  const moveToGame = (gameID) => {
    router.push(`/game/${gameID}`);
  };

  return (
    <GameCardsWrapper>
      {games.items.length > 0 &&
        games.items.map((item) => (
          <GameCardsItem
            key={item.id}
            game={item}
            handleClick={moveToGame} />
        ))}

      <div ref={ref} />
    </GameCardsWrapper>
  );
}
