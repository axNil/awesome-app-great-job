const link = "https://api.kanye.rest";
/**
 * Util for fetching a quote from kanye.rest
 */
export default async function fetchMessage() {
  try {
    const response = await fetch(link);
    const res = await response.json();
    return res.quote;
  } catch (e) {
    console.log(e);
  }
  return "whatsup";
}
