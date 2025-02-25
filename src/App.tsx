import React2 from "react";
import * as React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// The `"createContext" in React` guard is used by Apollo to make sure that the context is available see https://github.com/apollographql/apollo-client/blob/356fcc9414286988d884e26dffafaf4d317d1b2d/src/react/context/ApolloContext.ts#L22
// Apollo imports react with a wildcard import "import * as React from "react";" https://github.com/apollographql/apollo-client/blob/356fcc9414286988d884e26dffafaf4d317d1b2d/src/react/context/ApolloContext.ts#L1
//
//  The ""createContext" in React" guard returns false when Apollo client is used in Playwright CT tests because the internal Rollup config has treeshaking turned off
//  see https://github.com/microsoft/playwright/blob/a9bbf4b56d4bc4fdbee37a6e39109eea36b63f08/packages/playwright-ct-core/src/viteUtils.ts#L132
//
// After manually turning on treeshaking in the Rollup config used by Playwright CT, the guard returns true and the test passes.
console.log(React, "createContext" in React);

// When imported directly from the package (import React2 from "react";), the guard returns true
console.log(React, "createContext" in React2);

const client = new ApolloClient({
  uri: "https://flyby-router-demo.herokuapp.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <p>Learn React</p>;
    </ApolloProvider>
  );
}

export default App;
