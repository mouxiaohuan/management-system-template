import { currentUser } from '@/services/user';

interface PinitState {
  userInfo: Record<string, unknown> | null;
  config?: {
    menu: [];
  };
}

const initState: PinitState = {
  userInfo: {
    operatorName: '',
  },
};
export default {
  state: initState, // initial state
  effects: (dispatch: any) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync() {
      const userData = await currentUser();
      dispatch.user.increment(userData);
    },
  }),
  reducers: {
    // handle state changes with pure functions
    increment(state: PinitState, payload: Record<string, unknown>) {
      return Object.assign({}, state, { userInfo: payload });
    },
  },
};
