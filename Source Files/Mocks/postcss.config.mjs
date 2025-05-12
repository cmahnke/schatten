import postCSSInlineSvg from "postcss-inline-svg";
import postCSSDiscardDuplicates from "postcss-discard-duplicates";
import postCSSNormalize from "postcss-normalize";
import postCSSCombineDuplicatedSelectors from "postcss-combine-duplicated-selectors";

export const config = {
  plugins: [postCSSInlineSvg, postCSSDiscardDuplicates]
};
