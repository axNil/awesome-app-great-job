import BadWordsNext from "bad-words-next";
import en from "bad-words-next/data/en.json";
const bw = new BadWordsNext({ data: en });
/**
 * Util for removing bad words from text.
 * @param {String} text unfiltered text
 * @returns clean text
 */
export default function clean(text) {
  return bw.filter(text);
}
