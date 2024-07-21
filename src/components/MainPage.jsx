import "./MainPage.css";
import { Outlet, Link } from "react-router-dom";

const MainPage = () => {


  return (
    <>
    <div className="container">
      <div className="section"><Link style={{textDecoration:"none"}} to="/siparisler"><li>Siparişler</li></Link></div>
      <div className="section"><Link style={{textDecoration:"none"}} to="/gecmissiparisler"><li>Geçmiş Siparişler</li></Link></div>
      <Outlet />
    </div>
    </>
  );
}

export default MainPage;
