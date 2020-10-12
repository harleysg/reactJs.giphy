import React, { createContext } from "react";

import { APP_CONTEXT } from "shared/index.js";

const Context = createContext(APP_CONTEXT);
const Provider = Context.Provider;

export function AppContextProvider({ children }) {
  return <Provider value={APP_CONTEXT}>{children}</Provider>;
}

export default Context;
