//主视野页面
import styles from './view-container.module.scss';
import SidebarContainer from './sidebar';
function Container() {
  return (
    <>
      <div className={styles['view-container']}>
        <SidebarContainer />
      </div>
    </>
  )
}
export default Container;