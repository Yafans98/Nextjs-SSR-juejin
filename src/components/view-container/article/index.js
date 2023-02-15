import style from './article.module.scss'
import Art from './art';
import Link from 'next/link';
import { LOCALDOMAIN } from 'utils';
import { useEffect, useState, useContext } from 'react';
import ArticleContext from 'utils/context';
function ArticleContainer() {
  // console.log(artList);
  //获取文章列表对象
  const { artList } = useContext(ArticleContext);
  const [artArr, setArtArr] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let k in artList) {
      arr[+k] = artList[k];

    }
    setArtArr(arr);
  }, [])
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
          {artArr.map((info, index) => {
            return (
              <Link href={`${LOCALDOMAIN}/article/${artList[index].id}`} key={index}>
                <Art info={info.attributes} artDet={artList[index]} />
              </Link>
            )
          })}
        </article>
      </div>
    </>
  )
}



export default ArticleContainer;