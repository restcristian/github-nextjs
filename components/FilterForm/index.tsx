import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface Props {
  showOpenIssuesInputProps: InputProps;
  closeOpenIssuesInputProps: InputProps;
}

export const FilterForm: React.FC<Props> = ({
  showOpenIssuesInputProps,
  closeOpenIssuesInputProps,
}) => {
  return (
    <form>
      <div>
        <label htmlFor="showOpenIssuesCheck">Show Open Issues Only</label>
        <input
          {...showOpenIssuesInputProps}
          type="checkbox"
          name="showOpenIssuesCheck"
        />
      </div>
      <div>
        <label htmlFor="showClosedIssuesCheck">Show Closed Issues Only</label>
        <input
          {...closeOpenIssuesInputProps}
          type="checkbox"
          name="showClosedIssuesCheck"
        />
      </div>
    </form>
  );
};

export default FilterForm;
