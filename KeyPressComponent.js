import React from "react";
import listener from "./KeypressListener";
import ActiveKeysContext from "./ActiveKeysContext";

export default class KeyPress extends React.Component {
  constructor(props) {
    super(props);
    this.comboRef = React.createRef();
  }
  componentDidMount() {
    const shortcutToListen = this.props.shortcut;
    const shortcutDescription = this.props.desc;

    this.comboRef.current = listener.simple_combo(
      shortcutToListen,
      this.props.onShortcut
    );

    this.context.updateActiveShortcut({
      code: shortcutToListen,
      desc: shortcutDescription
    });
  }

  componentWillUnmount() {
    listener.unregister_combo(this.comboRef.current);
    this.context.removeActiveShortcut(this.comboRef.current.keys.join(" "));
  }

  render() {
    return null;
  }
}

KeyPress.contextType = ActiveKeysContext;
