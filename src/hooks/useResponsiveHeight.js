/** Hook for getting document inner height and setting height of document.
 * Allows for the equivalent of "100vh" on mobile.
 */
function useInnerHeight() {
  function getInnerHeight() {
    console.log(document.styleSheets[0]);

    document.documentElement.style.setProperty(
      "--doc-height",
      `${window.innerHeight}px`
    );
  }

  window.addEventListener("resize", getInnerHeight);
}

export default useInnerHeight;
