import style from './article.module.scss';
import { LOCALDOMAIN } from 'utils';
function Article({ artInfo }) {
  const { attributes } = artInfo
  return (
    <>
      <div className={style.test}>
        <div>作者：{attributes.author}</div>
        <div>发表日期：{attributes.date}</div>
        <div>标题：{attributes.title}</div>
        <div>内容：{attributes.content}</div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const { articleId } = context.query;
  const res = await fetch(`${LOCALDOMAIN}/api/artinfo/?articleId=${articleId}`)
    .then(data => data.json());
  return {
    props: {
      artInfo: res.data
    }
  }
}
export default Article;