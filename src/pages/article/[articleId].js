import style from './article.module.scss';

function Article({ articleId }) {
  return (
    <>
      <div className={style.test}>
        文章{articleId}
      </div>
    </>
  )
}

Article.getInitialProps = (context) => {
  const { articleId } = context.query;
  return {
    articleId: Number(articleId)
  }
}
export default Article;