import { CMSDOMAIN } from "utils";
//修改strapi后，此页面无用，但先保留
export default async function getArticleData(req, res) {
  const fetchData = await fetch(`${CMSDOMAIN}/api/artlists`);
  const data = await fetchData.json();
  res.status(200).json(data);
}