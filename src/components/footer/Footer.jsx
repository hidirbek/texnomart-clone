import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ImFacebook2, ImTelegram } from "react-icons/im";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";
import footerData from "../../JSON/footer-data.json";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-main">
            <div className="media-footer-items">
              {footerData.map((e,idx) => {
                return (
                  <Accordion key={idx}  className="footer-media-accorodion">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="`panel1a-header`"
                    >
                      <Typography>{e.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {e.subtitles.map((el,idx) => {
                        return <Typography key={idx}><Link to="/"   className="footer-item-link">{el}</Link></Typography>;
                      })}
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </div>
            <ul className="footer-list">
              <li className="footer-list-item">
                <p className="tel-text">Саволингиз борми? Қўнғироқ қилинг</p>
                <a className="tel-number" href="tel:+998712099944">
                  +998 71 209 99 44
                </a>
                <div className="social-media-icons">
                  <a rel="noreferrer" target="_blank" href="https://www.facebook.com/texnomart">
                    <ImFacebook2 className="icons fb-icon" />
                  </a>
                  <a rel="noreferrer" target="_blank" href="https://t.me/texnomart">
                    <ImTelegram className="icons tg-icon" />
                  </a>
                  <a rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/texnomart/"
                  >
                    <FaInstagramSquare className="icons insta-icon" />
                  </a>
                  <a rel="noreferrer" target="_blank" href="https://www.youtube.com/c/Texnomart">
                    <FaYoutube className="icons yt-icon" />
                  </a>
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.texnomart.app">
                  <img
                    className="g-play-img"
                    src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg"
                    alt="foot-g-play-img"
                  />
                </a>
                <Link to="/" className="store-info" >
                  Дўконлар манзиллари Тошкент
                </Link>
              </li>

              {footerData.map((el, idx) => {
                return (
                  <li key={idx} className="footer-list-item">
                    <p className="footer-item-title">{el.title}</p>
                    {el.subtitles.map((el, idx) => {
                      return (
                        <Link to="/" key={idx} className="footer-item-link">
                          {el}
                        </Link>
                      );
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="subfooter">
            <p className="subfooter-txt">
              2016-2022 © texnomart.uz. Барча ҳуқуқлар ҳимояланган. Товарларнинг
              кўрсатилган қиймати ва уларни сотиб олиш шартлари жорий санага
              амал қилади
            </p>
            <div className="payment-img-wrapper">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAcCAYAAAA9UNxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKXSURBVHgB7ZldSFNhGMf/5pxu6NiWS9FZXkSDUsqosQsF66JCYmAEFhFSSd0lBELdFV30cTm6qS5c3UTQbjJiRs1laR9i2lppa8XKbW3i3Kfbcl+9x2A0FtVFzxrbfvDCec77cOB/nvd5zvO+pyyVSjUDGGSjE4XNNBvdZUzwFLvYguLAyAlOoYhYhSKDB0K0unG8nrGn7TqZCKdP7MnwuXhVj5O9O4HhM0BiGTx5G/jKo6CCVLDh2SxGJ6xpWyatyRJ8z2BCp3IDWgIuxD8akfQ7SQXnxZK+wKLM67qE8tr1oCYvBHPLXn1Kh1fK60ipr4CSvClaFpsbvQNaHDs3BEpKVTrXHNi7HYFQNG3L6yWg5L8LFlTxEYsn07awkg9KiAWX/dFj8M4Y7C5f2lZtbsb+rq2ggjSHBVUVGfZyLJ7lE4nGMuxyXjkoIRXMNRo/4w9GYLY407bN7oHHt5Th01QvBSWkglsVjVn3zmqG8Nm5COe8H/3nb2fNb2tdB0pId0tc9W3vuZxRhX+HRCTEsLYfa1bXgArSCIuqq3BIrfxr/+MHO0jFcpDvh7nHa24YoLk5gkQi+UufSj4PfT3tGOjbBWpydgBgd3mh009hwmSDayGAeDyBtQ1StG1swuF9KtSKq5ELSice/xKrbR4O1lQsLIZw95EJSfZuX7AIc42GxxuCzeFBKPwND8dnWbeVwOOXH1bmRp6/BxWkgifffsGDsXcQs+obCEVW8tnyycVmUnhjceDarSfw+sO4bzTDHwgjwL7T+lEzdqgUoIJ0Sc999SLIIiivE+PppBW7OzbBNDOHRrZBCC5FUcG6KqGADzfLae7a4fahRdEAmYSuUpdyuNDhBBtRPExzgo/gx2+IQsfIRvd3aYsETCPHV5cAAAAASUVORK5CYII="
                alt=""
              />
              <img
                src="https://texnomart.uz/_nuxt/img/alif.6e1bcde.png"
                alt=""
              />
              <img
                src="https://texnomart.uz/_nuxt/img/intend.81957d2.png"
                alt=""
              />
              <img
                src="https://texnomart.uz/_nuxt/img/ofb.b3ef2cd.png"
                alt=""
              />
              <img
                src="https://texnomart.uz/_nuxt/img/payme.677630d.png"
                alt=""
              />
            </div>
            <div className="footer-list-item subfooter-media">
              <p className="tel-text">Саволингиз борми? Қўнғироқ қилинг</p>
              <a className="tel-number" href="tel:+998712099944">
                +998 71 209 99 44
              </a>
              <div className="social-media-icons">
                <a rel="noreferrer" target="_blank" href="https://www.facebook.com/texnomart">
                  <ImFacebook2 className="icons fb-icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://t.me/texnomart">
                  <ImTelegram className="icons tg-icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.instagram.com/texnomart/">
                  <FaInstagramSquare className="icons insta-icon" />
                </a>
                <a rel="noreferrer" target="_blank" href="https://www.youtube.com/c/Texnomart">
                  <FaYoutube className="icons yt-icon" />
                </a>
              </div>
              <a href="https://play.google.com/store/apps/details?id=com.texnomart.app">
                <img
                  className="g-play-img"
                  src="https://texnomart.uz/_nuxt/img/playmarket-logo-kr.24580f9.svg"
                  alt="foot-g-play-img"
                />
              </a>
              <Link to="/" className="store-info">
                Дўконлар манзиллари Тошкент
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
