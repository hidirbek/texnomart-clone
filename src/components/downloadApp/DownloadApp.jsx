import "./Downloadapp.css";

const DownloadApp = () => {
  return (
    <div className="download-app-wrapper">
      <div className="container">
        <div className="download-app-section">
          <div className="app-img-wrapper">
            <img
              src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png"
              alt="app-img"
            />
          </div>
          <div className="app-info">
            <h2 className="app-title">Иловани юкланг</h2>
            <p className="app-txt">
              Ҳаридларни уйдан чиқмаган ҳолда мобил илова орқали амалга оширинг!
            </p>
            <div className="scanner-img-wrapper">
              <img
                className="qr-img"
                src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png"
                alt="qr-code-img"
              />
              <p className="qr-txt">
                Камерани йўналтиринг ва Texnomart иловасини бепул юкланг
              </p>
            </div>
            <img
              className="g-play-img"
              src="https://texnomart.uz/_nuxt/img/play-market-kr.a90fe79.png"
              alt="g-play-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
