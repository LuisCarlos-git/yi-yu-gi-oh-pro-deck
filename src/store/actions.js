export function addCardsList(data) {
  return { type: '@cards/ADD_CARD_LIST', payload: { data } };
}
export function addToFavoriteList(id) {
  return { type: '@cards/ADD_TO_FOVORITE_LIST', payload: { id } };
}

export function removeFavoriteList(id) {
  return { type: '@cards/REMOVE_FOVORITE_LIST', payload: { id } };
}
