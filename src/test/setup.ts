import "@testing-library/jest-dom/vitest";

Object.defineProperty(window, "scrollTo", { value: () => undefined, writable: true });
Object.defineProperty(window, "requestAnimationFrame", {
  value: (callback: FrameRequestCallback) => {
    callback(0);
    return 0;
  },
  writable: true,
});
