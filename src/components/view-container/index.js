//主视野页面
import styles from './view-container.module.scss';
import SidebarContainer from './sidebar';
import ArticleContainer from './article';
import { LOCALDOMAIN } from 'utils';
function Container({ artList }) {
  return (
    <>
      <div className={styles['view-container']}>
        <ArticleContainer artList={artList} />
        <SidebarContainer />
      </div>
    </>
  )
}

export default Container;