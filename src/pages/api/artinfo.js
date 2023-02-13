import { CMSDOMAIN } from "utils";

export default async function getArticleInfo(req, res) {
  let { articleId } = req.query;
  let data = await fetch(`${CMSDOMAIN}/api/artinfos/${articleId}`)
    .then(data => data.json());
  res.status(200).json(data);
}