import { render, screen } from "@testing-library/react";
import Heading from ".";

describe('Heading', () => {
    let component: any = null;

    const props = {
        title: "Hello",
        testId: "title"
    }
    beforeEach(() => {
        component = render(<Heading {...props} />)
    });

    it("should render a title component", async () => {
        expect(await screen.findByTestId(props.testId)).toBeInTheDocument();
    });

    it("should render the provided value", async () => {
        expect(await screen.findByText(props.title)).toBeInTheDocument();
    });

});