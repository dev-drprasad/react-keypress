import React from "react";
import ActiveKeysContext from "./ActiveKeysContext";

export default function withActiveShortcuts(Component) {
  return class extends React.Component {
    static contextType = ActiveKeysContext;

    render() {
      return (
        <Component
          activeShortcuts={this.context.activeShortcuts}
          {...this.props}
        />
      );
    }
  };
}
