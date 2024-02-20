import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigations/navigation";

import { Provider } from "react-redux";
import store from "./src/redux";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql/",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
};

export default App;