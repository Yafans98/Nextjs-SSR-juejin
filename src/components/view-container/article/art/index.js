import style from './art.module.scss'
import { CMSDOMAIN } from 'utils';
function Art({ info }) {
  const { cover } = info || {};
  console.log(cover);
  return (
    <>
      <div className={style['art-container']}>
        <div className={style.headBox}>
          <span className={style.author}>{info.author}</span>
          <span className={style.dividing}></span>
          <span className={style.date}>{info.date}</span>
          {info.label && <span className={style.dividing}></span>}
          {info.label && <span className={style.label}>{info.label}</span>}
        </div>
        <div className={style.infoBox}>
          <div className={style.text}>
            <h2>{info.title}</h2>
            <p>{info.content}</p>
            <ul>
              <li className={style.watch}>
                <span className={style.iconfont}>&#xe661;</span>
                {info.watch}
              </li>
              <li className={style.thumb}>
                <span className={style.iconfont}>&#xec7f;</span>
                {info.thumb}
              </li>
              <li className={style.comment}>
                <span className={style.iconfont}>&#xe609;</span>
                {info.comment}
              </li>
            </ul>
          </div>
          <div className={style.img}>
            <img src={`${CMSDOMAIN}${cover.data.url}`} alt="文章封面" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Art;