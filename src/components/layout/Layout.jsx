import {useEffect, useState} from 'react'
import {Header, Footer} from "../index"
import Sidebar from '../sidebar/Sidebar';
import { Overlay } from '../overlay/Overlay';
import Login from '../login-modal/Login';

const Layout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen === true || loginOpen === true) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen, loginOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} setLoginOpen={setLoginOpen}/>
      {loginOpen ? <Login setLoginOpen={setLoginOpen} /> : null}
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen} />}
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout