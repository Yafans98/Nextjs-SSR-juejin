import style from './article.module.scss'
import Art from './art';
import Link from 'next/link';
import { CMSDOMAIN, LOCALDOMAIN } from 'utils';
import { useEffect, useState } from 'react';
function ArticleContainer({ artList }) {
  // console.log(artList);
  const [artArr, setArtArr] = useState([]);
  useEffect(() => {
    let arr = [];
    for (let k in artList) {
      arr[+k] = artList[k];

    }
    setArtArr(arr);
  }, [])
  console.log(artArr);
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