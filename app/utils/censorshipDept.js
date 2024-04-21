import BadWordsNext from "bad-words-next";
import en from "bad-words-next/data/en.json";
const bw = new BadWordsNext({ data: en });
export default function clean(text) {
  return bw.filter(text);
}
