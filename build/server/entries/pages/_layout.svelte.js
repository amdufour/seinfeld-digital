import { Q as pop, O as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!----> export const prerender = true;`;
  pop();
}
export {
  _layout as default
};
