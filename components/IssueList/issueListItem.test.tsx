import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { getIssuesMock } from "@/__test__/pages/__mocks__/getIssuesMock";
import IssueListItem, {Props as IssueListItemProps} from "./IssueListItem";
import { IssueState } from "@/__generated__/globalTypes";

describe("IssueListItem", () => {
  const props: IssueListItemProps = {
      node: {
        title: 'title',
        author: {
            avatarUrl: 'https://avatars.githubusercontent.com/u/9398934?v=4',
            login: 'login_user',
            __typename:"User"
        },
        closedAt: 'closed_date',
        createdAt: '2022-10-03T08:57:06Z',
        state: IssueState.OPEN,
        __typename: "Issue"
      }
  }
  let component: any; 
  beforeEach(() => {
    component = render(
      <MockedProvider mocks={getIssuesMock} addTypename={false}>
        <IssueListItem {...props} />
      </MockedProvider>
    );
  })
  it('should render an issue list item with needed props', async () => {
    expect(await screen.findByText(props?.node?.title as string)).toBeInTheDocument()
    expect(await screen.findByTestId(`avatar-${props?.node?.author?.avatarUrl}` as string)).toBeInTheDocument()
    expect(await screen.findByText(props?.node?.author?.login as string)).toBeInTheDocument()
    expect(await screen.findByText(props?.node?.createdAt as string)).toBeInTheDocument()

    expect(component).toMatchSnapshot();
  });
});
