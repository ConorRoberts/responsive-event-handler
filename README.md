# responsive-event-handler

Uses `window.innerWidth` to determine which event handler to run, based on [TailwindCSS breakpoints](https://tailwindcss.com/docs/responsive-design).

```jsx
import { responsiveEventHandler } from "@conorroberts/responsive-event-handler";

const ReactComponent = () => {
  return (
    <button onClick={responsiveEventHandler({
      default: () => console.log("No other breakpoints match!"),
      sm: () => console.log("sm"),
      lg: () => console.log("lg"),
      // Type of event is inferred!
      xl: (event) => console.log(event.target),
    })}>
      Click me!
    </button>
  );
}
```

Works with any frontend framework, or vanilla JS!
