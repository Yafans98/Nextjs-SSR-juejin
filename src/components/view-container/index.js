//主视野页面
import styles from './view-container.module.scss';
import SidebarContainer from './sidebar';
import ArticleContainer from './article';
import { LOCALDOMAIN } from 'utils';
function Container({ data }) {
  return (
    <>
      <div className={styles['view-container']}>
        <ArticleContainer data={data} />
        <SidebarContainer />
      </div>
    </>
  )
}
export async function getServerSideProps(context) {
  const res = await fetch(`${LOCALDOMAIN}/api/artlist`)
    .then(data => data.json());
  return {
    props: {
      data: res
    }
  }
}

export default Container;