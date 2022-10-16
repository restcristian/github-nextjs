import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { constants } from "@/utils/constant";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: constants.API_URL
});

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            Authorization: `Bearer ${constants.API_TOKEN}`
        }
    }
})
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;