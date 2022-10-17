import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { getIssuesMock } from "@/__test__/pages/__mocks__/getIssuesMock";
import IssueList from ".";

describe("IssueList", () => {
  const props = {
      testId: "issue-list",
      repositoryName: "reactjs.org",
      repositoryOwner: "reactjs"
  }
  let component: any; 
  beforeEach(() => {
    component = render(
      <MockedProvider mocks={getIssuesMock} addTypename={false}>
        <IssueList {...props} />
      </MockedProvider>
    );
  })
  it('should render an issue-list', async () => {
    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByTestId(props.testId)).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
