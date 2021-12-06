import { NEWS_API_KEY } from '@env'

const url = "https://newsapi.org/v2/everything?q=microsoft&apiKey=" + NEWS_API_KEY;

export async function getNews(companyName) {
  console.log(companyName)
  let result = await fetch("https://newsapi.org/v2/everything?q="+companyName +"&apiKey=" + NEWS_API_KEY)
  .then(response => response.json());
  return result.articles;
}