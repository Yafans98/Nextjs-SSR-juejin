import Container from '@/components/view-container'
import NavList from '@/components/navlist'
import { LOCALDOMAIN } from "utils"
import ArticleContext from 'utils/context'

function Index({ artList }) {
  return (
    <ArticleContext.Provider value={{ artList }}>
      <NavList />
      <Container />
    </ArticleContext.Provider>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${LOCALDOMAIN}/api/article`)
    .then(data => data.json());
  return {
    props: {
      artList: res
    }
  }
}

export default Index
