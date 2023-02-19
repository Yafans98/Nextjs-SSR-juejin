
import style from './navlist.module.scss'

function NavList() {
  return (
    <>
      <div className={style['navlist-container']}>
        <ul className={style.list}>
          <li>
            <a href='#'>
              <input type="radio" name="nav-list" id={`navList1`} className={style.navListCheck} defaultChecked />
              <label htmlFor="navList1">
                综合
              </label>
            </a>
          </li>
          <li>
            <a href='#'>
              <input type="radio" name="nav-list" id={`navList2`} className={style.navListCheck} />
              <label htmlFor={`navList2`}>
                关注
              </label>
            </a>
          </li>
          <li >
            <a href='#'>
              <input type="radio" name="nav-list" id={`navList3`} className={style.navListCheck} />
              <label htmlFor={'navList3'}>
                后端
              </label>
            </a>
          </li>
          <li>
            <a href='#'>标签管理</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default NavList;