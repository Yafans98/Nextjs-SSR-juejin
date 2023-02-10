import { CMSDOMAIN } from "utils";

export default async function getArticleData(req, res) {
  const fetchData = await fetch(`${CMSDOMAIN}/api/artlists`);
  const data = await fetchData.json();
  res.status(200).json(data);
}