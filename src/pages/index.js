import Container from '@/components/view-container'
import NavList from '@/components/navlist'
import { LOCALDOMAIN } from "utils"
function Index({ artList }) {
  return (
    <>
      <NavList />
      <Container artList={artList} />
    </>
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
