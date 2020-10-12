import React, { Suspense } from "react";

import Routes from "pages/index.js";

import "./App.css";
import { GifsContextProvider } from "context/gifs.context.js";
import { AppContextProvider } from "context/app.context.js";
import { UserContextProvider } from "context/user.context";

export default function App() {
  return (
    <UserContextProvider>
      <AppContextProvider>
        <div className={"App"}>
          <GifsContextProvider>
            <Suspense fallback={null}>
              <Routes />
            </Suspense>
          </GifsContextProvider>
        </div>
      </AppContextProvider>
    </UserContextProvider>
  );
}
