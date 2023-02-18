import Navbar from './navbar';
function Layout({ children, categories }) {
  return (
    <>
      <div >
        <Navbar categories={categories.data} />
        <div >{children}</div>
      </div>
    </>
  )
}

export default Layout;