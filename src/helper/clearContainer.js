export default function clearContainer(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild);
  }
}
