import {useEffect, useState} from 'react'
import {Header, Footer} from "../index"
import Sidebar from '../sidebar/Sidebar';
import { Overlay } from '../overlay/Overlay';


const Layout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen === true) {
      document.body.style.overflow = "hidden";
    }
    else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen])

  return (
    <>
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      {isSidebarOpen && <Overlay setIsSidebarOpen={setIsSidebarOpen} />}
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout