import produce from 'immer';

const STATE = {
  list_cards: [],
  favorite: [],
};

export default function Cards(state = STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cards/ADD_CARD_LIST': {
        draft.list_cards = action.payload.data;

        break;
      }
      case '@cards/ADD_TO_FOVORITE_LIST': {
        const { id } = action.payload;

        const card = draft.list_cards.find((c) => c.id === id);

        if (draft.favorite.length >= 40) {
          draft.favorite.slice(0, 39);
          break;
        }

        if (draft.favorite.find((c) => c.id === id)) {
          break;
        }

        if (card) {
          draft.favorite.push(card);
        }

        break;
      }

      case '@cards/REMOVE_FOVORITE_LIST': {
        const { id } = action.payload;
        const index = draft.favorite.findIndex((i) => i.id === id);
        console.tron.log(index);

        if (index >= 0) {
          draft.favorite.splice(index, 1);
        }
        break;
      }
      default:
    }
  });
}
