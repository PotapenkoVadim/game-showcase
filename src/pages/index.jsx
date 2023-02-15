import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import GameCards from '../components/common/game-cards/game-cards';
import { wrapper } from '../store';
import { apiClient } from '../services/api/api-client';
import { loadGamesSuccess, loadGamesFailure, loadGames } from '../store/games';
import Spinner from '../components/ui-kit/spinner/spinner';
import SearchField from '../components/ui-kit/search-field/search-field';
import { debounce } from '../utils';
import Filter from '../components/ui-kit/filter/filter';
import { loadPlatformsSuccess } from '../store/platforms';
import { useLabels } from '../hooks/use-labels';
import { configuration } from '../configuration';
import Note from '../components/ui-kit/note/note';

const HomeWrapper = styled.div`
  margin: 25px 0;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;

  @media ${(props) => props.theme.media.tablet} {
    flex-direction: row;
  }
`;

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { games, platforms } = useSelector((state) => state);
  const platformLabels = useLabels(platforms.items);

  const search = (query) => {
    if (!query.search) delete query.search;
    if (!query.platforms) delete query.platforms;
    if (!query.ordering) delete query.ordering;

    router.push({ query });
  };

  const handleSearchField = debounce((searchText) => {
    search({
      search: searchText,
      platforms: router.query.platforms,
      ordering: router.query.ordering
    });
  });

  const handlePlatformFilter = (platformID) => {
    search({
      search: router.query.search,
      platforms: platformID,
      ordering: router.query.ordering
    });
  };

  const handleSortFilter = (type) => {
    search({
      search: router.query.search,
      platforms: router.query.platforms,
      ordering: type
    });
  };

  const loadExtraGames = (page) => {
    dispatch(loadGames());

    apiClient
      .get('/games', { ...router.query, page })
      .then((response) => dispatch(loadGamesSuccess({ games: response, page })))
      .catch((error) => dispatch(loadGamesFailure(error)));
  };

  return (
    <HomeWrapper>
      <FilterWrapper>
        <SearchField
          initialValue={router.query.search}
          handleChange={handleSearchField}
        />

        <Filter
          defaultOption='All'
          placeholder='Platforms'
          handleChange={handlePlatformFilter}
          initialValue={router.query.platforms}
          labels={platformLabels}
        />

        <Filter
          defaultOption='None'
          placeholder='Sort by'
          handleChange={handleSortFilter}
          initialValue={router.query.ordering}
          labels={configuration.sortFilterLabels}
        />
      </FilterWrapper>

      <GameCards
        games={games}
        onScroll={loadExtraGames} />

      {games.loading && <Spinner />}

      {!games.loading && games.items.length === 0 && (
        <Note>No games for your request</Note>
      )}
    </HomeWrapper>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({ query }) => {
    const page = query.page ? query.page : 1;
    const requestQuery = { ...query, page };

    try {
      const gamesResponse = await apiClient.get('/games', requestQuery);
      const platformsResponse = await apiClient.get('/platforms', {
        page_size: 'all'
      });

      store.dispatch(loadGamesSuccess({ games: gamesResponse, page: 1 }));
      store.dispatch(loadPlatformsSuccess({ platforms: platformsResponse }));
    } catch (error) {
      store.dispatch(loadGamesFailure(error));
    }

    return {
      props: {}
    };
  }
);
