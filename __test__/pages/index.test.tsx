import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Home from "@/pages";
import { GET_ISSUES_QUERY } from "@/utils/queries";
describe("Home", () => {
  const mocks = [
    {
      request: {
        query: GET_ISSUES_QUERY,
        variables: {
          owner: "reactjs",
          name: "reactjs.org",
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
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "[Beta] DocSearch Title Gets Escaped",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "[Beta] Issue in the navigation of the React Docs Page",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "Redux and functional components missing in react js",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "The issue is i have a component which is having search and select ",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "Clock examples use impure `.toLocaleTimeString()`",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "Always exited to hear newer updates 🔥 React 🚀",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "Switch CDN provider in documentation",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "dependencies",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "Add popular open source community: PrimeReact ",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "Update react testing doc section for react 18",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "React+Vite",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "Strict mode making newbie like me get confused on debugging.",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "How to avoid re-renders on history.push?",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title: "Update `AUTHORS` file",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "[Beta] Bug: Gutter text overlaps with sandpack code on mobile",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "Beta reactjs 404 & 500 Custom Error pages similarities",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      'Clarification about multiple contexts on "Scaling Up with Reducer and Context" documentation page',
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "pass the set state function to a non-descendent component ",
                    __typename: "Issue",
                  },
                  __typename: "IssueEdge",
                },
                {
                  node: {
                    title:
                      "Content issue on `reactjs.org/tutorial/tutorial.html`",
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
  it("renders loading then hello world", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(await screen.findByText("loading")).toBeInTheDocument();
    expect(await screen.findByText("Hello World")).toBeInTheDocument();
  });
});
