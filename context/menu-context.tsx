import React, { createContext, useReducer, useContext } from "react";
//======================================================

const initialState = { isMenuOpen: false, categories: [{}] };

type catState = typeof initialState;

type Action =
  | { type: "toggleMenu" }
  | { type: "closeMenu" }
  | { type: "updateMenu"; payload: category[] };

interface category {
  id: number;
  image: string;
  name: string;
}

function catReducer(state: catState, action: Action): catState {
  switch (action.type) {
    case "toggleMenu":
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case "closeMenu":
      return {
        ...state,
        isMenuOpen: false,
      };
    case "updateMenu":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      throw new Error();
  }
}

export function createCtx<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState;

  const ctx = createContext({
    state: initialState,
    dispatch: defaultDispatch,
  });

  function MenuProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
      reducer,
      initialState
    );
    return <ctx.Provider value={{ state, dispatch }}>{children}</ctx.Provider>;
  }

  return [ctx, MenuProvider] as const;
}

const [ctx, MenuProvider] = createCtx(catReducer, initialState);

export const useMenuContext = () => useContext(ctx);

export default MenuProvider;
