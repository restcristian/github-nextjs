import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Home from "@/pages";
import { getIssuesMock } from "./__mocks__/getIssuesMock";
describe("Home", () => {
  
  let component: any  = null;
  beforeEach(() => {
   component = render(
        <MockedProvider mocks={getIssuesMock} addTypename={false}>
          <Home />
        </MockedProvider>
      );
  })
  it("should render a title", async () => {
    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByTestId("title")).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it('should render an issue-list', async () => {
    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByTestId("issue-list")).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  })
});
