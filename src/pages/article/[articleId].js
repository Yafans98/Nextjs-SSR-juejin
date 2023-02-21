import style from './article.module.scss';
import { LOCALDOMAIN } from 'utils';
import Showdown from 'showdown';
function Article({ artInfo }) {
  const { attributes } = artInfo
  const { Content, author, comment, thumb, title, watch } = attributes;
  const converter = new Showdown.Converter();
  return (
    <>
      <main className={style['article-container']}>
        <aside className={style['article-info']}>
          <ul>
            <li className={style.iconfont}>&#xec7f;<span className={style['article-thumb']}>{thumb}</span></li>
            <li className={style.iconfont}>&#xe609;<span className={style['article-comment']}>{comment}</span></li>
            <li className={style.iconfont}>&#xe666;</li>
            <li className={style.iconfont}>&#xe63d;</li>
            <li className={style.iconfont}>&#xe600;</li>
            <li className={style.iconfont}>&#xec13;</li>
          </ul>
        </aside>
        <article className={style['article-main']}>
          <h1 className={style['article-title']}>{title}</h1>
          <div className={style['article-author']}>
            <div className={style['article-author-avatar']}>
              <div className={style.img}></div>
            </div>
            <div className={style['article-author-info']}>
              <span className={style['article-author-name']}>{author}</span>
              <span>访问量:{watch}</span>
            </div>
          </div>
          {/* 支持markdown语法 */}
          <div className={style['article-content']} dangerouslySetInnerHTML={{ __html: converter.makeHtml(Content) }}></div>
        </article>
        <aside className={style['article-sidebar']}></aside>
      </main>
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