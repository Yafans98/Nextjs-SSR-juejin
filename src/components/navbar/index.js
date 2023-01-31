import styles from './nav.module.scss';
import logo from '@/common/images/logo.svg'
import Image from 'next/image'

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        {/* Todo：全部做完将这里导航到首页 */}
        <a href="#" >
          <Image src={logo} alt='掘金Logo' className={styles.logo} />
        </a>
        <ul className={styles.nav}>
          <li className={styles.selected}><a href='#'>首页</a></li>
          <li><a href='#'>沸点</a></li>
          <li><a href='#'>课程</a></li>
          <li><a href='#'>直播</a></li>
          <li><a href='#'>活动</a></li>
          <li><a href='#'>竞赛</a></li>
          <li><a href='#'>商城</a></li>
        </ul>
      </div>

    </>
  )
}

export default Navbar;