import types from './types.js';

const perPage = 20;

export const fetchSportingGoods = (keyword = '', page = 0, location = null, distance = 5000) => async (dispatch, getState, { api, algoliaClient }) => {

  const index = algoliaClient.initIndex(`SportingGood_${ process.env.NODE_ENV }`);
  const { id } = getState().session;

  const params = {
    query: keyword,
    filters: `user_id != ${id}`
  };

  // // Set pagination if no search
  if (!keyword.length && !location) {
    params.hitsPerPage = perPage;
    params.page = page;
  }

  // Set location if location
  if (location && location.lat && location.lng) {
    params.aroundLatLng =  `${ location.lat }, ${ location.lng }`;
    params.aroundRadius = distance;
  }

  try {

    const {
      hits,
      nbHits,
      nbPages,
      hitsPerPage
    } = await index.search(params);

    dispatch({
      type: types.SET_SPORTING_GOODS,
      payload: {
        results: hits,
        totalResults: nbHits,
        totalPerPage: hitsPerPage,
        page
      }
    });

  } catch(err) {

    dispatch({
      type: types.OPEN_NOTIFICATION,
      payload: { err }
    });

  }

}
