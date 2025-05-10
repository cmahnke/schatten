import postCSSInlineSvg from "postcss-inline-svg";
import postCSSDiscardDuplicates from 'postcss-discard-duplicates';

export const config = {
  plugins: [postCSSInlineSvg, postCSSDiscardDuplicates]
};
