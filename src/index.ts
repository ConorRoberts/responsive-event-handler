const breakpoints = ["sm", "md", "lg", "xl", "2xl"] as const;
type Breakpoint = (typeof breakpoints)[number];
type BreakpointHandlers<E> = Partial<
  Record<Breakpoint, (e: E) => any> & {
    default: (e: E) => any;
  }
>;
const breakpointWidthValues: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const responsiveEventHandler =
  <E>(options: BreakpointHandlers<E>) =>
  (event: E) => {
    const width = window.innerWidth;

    if (options["2xl"] && width >= breakpointWidthValues["2xl"]) {
      return options["2xl"](event);
    } else if (options.xl && width >= breakpointWidthValues.xl) {
      return options.xl(event);
    } else if (options.lg && width >= breakpointWidthValues.lg) {
      return options.lg(event);
    } else if (options.md && width >= breakpointWidthValues.md) {
      return options.md(event);
    } else if (options.sm && width >= breakpointWidthValues.sm) {
      return options.sm(event);
    } else if (options.default) {
      return options.default(event);
    }
  };
