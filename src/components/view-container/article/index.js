import style from './article.module.scss'
import Art from './art';
import data from './art/data';
function ArticleContainer() {
  return (
    <>
      <div className={style['article-container']}>
        <nav>
          <ul>
            <a href="#" ><li className={style.active}>推荐</li></a>
            <a href="#"><li>最新</li></a>
            <a href="#"><li>热榜</li></a>
          </ul>
        </nav>
        <article>
          {data.map(info => {
            return <Art info={info} />
          })}
        </article>
      </div>
    </>
  )
}

export default ArticleContainer;