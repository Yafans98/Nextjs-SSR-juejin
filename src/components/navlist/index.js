
import style from './navlist.module.scss'

function NavList() {
  return (
    <>
      <div className={style['navlist-container']}>
        <ul className={style.list}>
          <a href='#' className={style.selected}><li>综合</li></a>
          <a href='#'><li>关注</li></a>
          <a href='#'><li>后端</li></a>
          <a href='#'><li>标签管理</li></a>
        </ul>
      </div>
    </>
  )
}

export default NavList;