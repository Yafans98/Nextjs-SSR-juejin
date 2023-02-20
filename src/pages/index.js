import Container from '@/components/view-container'
import NavList from '@/components/navlist'
import { LOCALDOMAIN } from "utils"
import ArticleContext from 'utils/context'

function Index({ artList, sidebar, labels }) {
  return (
    <ArticleContext.Provider value={{ artList, sidebar, labels }}>
      <NavList />
      <Container />
    </ArticleContext.Provider>
  )
}

export async function getServerSideProps(context) {
  const articleProps = await fetch(`${LOCALDOMAIN}/api/article`)
    .then(data => data.json());
  const sidebarProps = await fetch(`${LOCALDOMAIN}/api/sidebar`)
    .then(data => data.json());
  const labelProps = await fetch(`${LOCALDOMAIN}/api/label`)
    .then(data => data.json());
  return {
    props: {
      artList: articleProps,
      sidebar: sidebarProps,
      labels: labelProps
    }
  }
}

export default Index
