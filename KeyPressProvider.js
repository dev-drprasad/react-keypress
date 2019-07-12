import React from "react";
import ActiveKeysContext from "./ActiveKeysContext";

export default class KeyPressProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeShortcuts: []
    };

    this.updateActiveShortcut = this.updateActiveShortcut.bind(this);
    this.removeActiveShortcut = this.removeActiveShortcut.bind(this);
  }

  updateActiveShortcut(shortcut) {
    this.setState(({ activeShortcuts }) => ({
      activeShortcuts: [...activeShortcuts, shortcut]
    }));
  }

  removeActiveShortcut(shortcutCode) {
    const newActiveShortcuts = this.state.activeShortcuts.filter(
      ({ code }) => code !== shortcutCode
    );
    this.setState({ activeShortcuts: newActiveShortcuts });
  }
  render() {
    const activeShortcuts = this.state.activeShortcuts;
    const contextValue = {
      activeShortcuts,
      updateActiveShortcut: this.updateActiveShortcut,
      removeActiveShortcut: this.removeActiveShortcut
    };
    return (
      <ActiveKeysContext.Provider value={contextValue}>
        {this.props.children}
      </ActiveKeysContext.Provider>
    );
  }
}
