import types from './types.js';

export const fetchSportingGoods = ({
  keyword = '',
  location = null,
  page = 0,
  distance = 5000
} = {}) => async (dispatch, getState, { api, algoliaClient }) => {

  const index = algoliaClient.initIndex(`SportingGood_${ process.env.AGOLIA_ENV }`);
  const { id } = getState().session;

  const params = {
    query: keyword,
    filters: `user_id != ${id}`
  };

  // Set location if location
  if (location && location.lat && location.lng) {
    params.aroundLatLng =  `${ location.lat }, ${ location.lng }`;
    params.aroundRadius = distance;
  }

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

    // dispatch({
    //   type: types.OPEN_NOTIFICATION,
    //   payload: { err }
    // });

}
