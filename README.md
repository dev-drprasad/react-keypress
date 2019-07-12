### react-keypress

#### API

##### Keypress

component

| prop       | description | type     |
| ---------- | ----------- | -------- |
| shortcut   |             | string   |
| desc       |             | string   |
| onShortcut |             | function |

###### example

```jsx
<KeyPress
  shortcut="shift a"
  desc="toggle color of A"
  onShortcut={this.toggleColor}
/>
```

##### withActiveShortcuts

high order component

###### example

```jsx
export default withActiveShortcuts(Help);
```

##### KeyPressProvider

component

```jsx
<KeyPressProvider>
  <div className="App"></div>
</KeyPressProvider>
```
