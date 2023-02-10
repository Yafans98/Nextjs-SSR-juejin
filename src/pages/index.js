import Container from '@/components/view-container'
import NavList from '@/components/navlist'
import { LOCALDOMAIN } from "utils"
function Index({ data }) {
  return (
    <>
      <NavList />
      <Container data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`${LOCALDOMAIN}/api/artlist`)
    .then(data => data.json());
  return {
    props: {
      data: res.artinfos.data
    }
  }
}

export default Index
