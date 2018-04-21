import * as React from "react";

export interface IButtonProps {
  label: string;
  type: string;
}

export default class Button extends React.Component<IButtonProps, any> {
  public static defaultProps: Partial<IButtonProps> = {
    type: "primary"
  };

  render() {
    return (
      <div>
        <button className={`btn btn-${this.props.type}`}>{this.props.label}</button>
      </div>
    );
  }
}
