import { GET_ISSUES_QUERY } from "@/graphql/queries";

export const getIssuesMock = [
  {
    request: {
      query: GET_ISSUES_QUERY,
      variables: {
        owner: "reactjs",
        name: "reactjs.org",
        status: null
      },
    },
    result: {
      data: {
        repository: {
          issues: {
            edges: [
              {
                node: {
                  title: "[Beta] Remove runtime CSS-in-JS",
                  author: {
                    login: "gaearon",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/810438?u=36b11d1db9c2380295b4371a98de87ab6b4c898f&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-25T20:52:44Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "[Beta] DocSearch Title Gets Escaped",
                  author: {
                    login: "Huxpro",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/5563315?u=eae979b4d6884dad781c03ab81e7a16108c7fae1&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-25T21:24:03Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "[Beta] Issue in the navigation of the React Docs Page",
                  author: {
                    login: "fahad0001",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/22472928?u=1d73aa50468118ac9dd2bbc5366eac1620cce0fe&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-27T22:17:07Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Redux and functional components missing in react js",
                  author: {
                    login: "503sayantan",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/79701602?u=0f2fe0968b80a96c425b8a47f053afb1a57c10ce&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-28T07:22:53Z",
                  state: "CLOSED",
                  closedAt: "2022-09-28T07:23:41Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "The issue is i have a component which is having search and select ",
                  author: {
                    login: "gdinesh029",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/3624443?v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-29T00:54:25Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Clock examples use impure `.toLocaleTimeString()`",
                  author: {
                    login: "jonaskuske",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/30421456?u=7dd09d7c52ee9562b6af6dd0174d551f43a50e4d&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-29T11:51:29Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Always exited to hear newer updates 🔥 React 🚀",
                  author: {
                    login: "prathameshbelurkar",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/76102350?u=bd250a5d33fe58dfa1351dc456fe4cbf23677735&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-30T06:39:22Z",
                  state: "CLOSED",
                  closedAt: "2022-10-02T17:46:31Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Switch CDN provider in documentation",
                  author: {
                    login: "ayuhito",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/38220115?u=2ecd63e5c0d379ed144b37a071a6e93cf817f572&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-09-30T14:32:30Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "dependencies",
                  author: {
                    login: "Yunush1",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/105458936?v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-03T08:57:06Z",
                  state: "CLOSED",
                  closedAt: "2022-10-03T08:59:19Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Add popular open source community: PrimeReact ",
                  author: {
                    login: "dcyaner",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/74204161?u=add1c9f122b903e72abad70ff6b1ab2d3b33ab0f&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-03T12:34:45Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Update react testing doc section for react 18",
                  author: {
                    login: "edmundsj",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/11085127?u=c736087a4e4aa261813dbf2d8ffddb7413044f4a&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-04T01:08:38Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "React+Vite",
                  author: {
                    login: "ramiljs",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/89657343?u=e2f2fc309ff392c75bcbe27e301549e2c442998b&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-04T07:55:55Z",
                  state: "CLOSED",
                  closedAt: "2022-10-04T07:57:35Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "Strict mode making newbie like me get confused on debugging.",
                  author: {
                    login: "Misheelajil",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/55972822?v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-05T07:28:41Z",
                  state: "CLOSED",
                  closedAt: "2022-10-06T04:04:17Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "How to avoid re-renders on history.push?",
                  author: {
                    login: "ShrutiJaiswal1494",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/79670853?v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-07T18:34:39Z",
                  state: "CLOSED",
                  closedAt: "2022-10-08T08:52:44Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title: "Update `AUTHORS` file",
                  author: {
                    login: "akulsr0",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/43666833?u=f0bb33f3c5a0eef95542103fdef7bd78282b1f4c&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-08T15:27:09Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "[Beta] Bug: Gutter text overlaps with sandpack code on mobile",
                  author: {
                    login: "shanpriyan",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/42532987?u=e9bb00533d458b0a6740301f5687472be1325887&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-09T13:53:12Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "Beta reactjs 404 & 500 Custom Error pages similarities",
                  author: {
                    login: "vigneshshiv",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/10242660?u=187491df153fc7d6726297d230bbf874fd1daea6&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-09T18:36:16Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    'Clarification about multiple contexts on "Scaling Up with Reducer and Context" documentation page',
                  author: {
                    login: "samanpwbb",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/108094?u=f38ea53150b7855f77de960bde5d8f2cb09aa6ed&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-11T17:56:42Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "pass the set state function to a non-descendent component ",
                  author: {
                    login: "cdhit",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/1721125?u=dfe9da22f98152f9201d022e82c2a8ad98385b68&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-12T01:35:29Z",
                  state: "CLOSED",
                  closedAt: "2022-10-14T06:02:27Z",
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
              {
                node: {
                  title:
                    "Content issue on `reactjs.org/tutorial/tutorial.html`",
                  author: {
                    login: "RitikJaiswal75",
                    avatarUrl:
                      "https://avatars.githubusercontent.com/u/57758447?u=570d8084eb6a5605098c294aa7600602abc7997a&v=4",
                    __typename: "User",
                  },
                  createdAt: "2022-10-15T05:01:09Z",
                  state: "OPEN",
                  closedAt: null,
                  __typename: "Issue",
                },
                __typename: "IssueEdge",
              },
            ],
            __typename: "IssueConnection",
          },
          __typename: "Repository",
        },
      },
    },
  },
];
