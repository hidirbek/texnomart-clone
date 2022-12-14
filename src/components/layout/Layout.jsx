import {useEffect, useState} from 'react'
import {Header, Footer} from "../index"
import Sidebar from '../sidebar/Sidebar';
import { Overlay } from '../overlay/Overlay';
import Login from '../login-modal/Login';
import Cart from "../cart/Cart"

const Layout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen === true || loginOpen === true) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, loginOpen, cartOpen])

  return (
    <>
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setLoginOpen={setLoginOpen}/>
      {loginOpen ? <Login setLoginOpen={setLoginOpen} />: null}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} loginOpen={loginOpen} setLoginOpen={setLoginOpen}/>
      {isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen} />}
      {cartOpen ? <Cart setCartOpen={setCartOpen} /> : null}

      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout