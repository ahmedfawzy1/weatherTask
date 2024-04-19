import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="bg-main pt-4 position-absolute bottom-0 w-100">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="info">
              <h3 className="text-main mb-4">Sky Cast</h3>
              <p className="fw-medium">Funding freemium long tail hypotheses first mover advantage assets ownership</p>
              <ul className={`${style.links} pt-4`}>
                <li className="mb-2">
                  <a href="mailto:SkyCast@mail.com">
                    <i className="fa-regular fa-envelope pe-3"></i>
                    SkyCast@mail.com
                  </a>
                </li>
                <li>
                  <a href="tel:123456789">
                    <i className="fa-solid fa-phone pe-3"></i>+ 12 3456 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="info d-flex justify-content-between">
              <div className="services">
                <h3 className={`${style.heading} h5 mb-4`}>Services</h3>
                <ul className={`${style.links}`}>
                  <li className="mb-3">
                    <a href="/">Web Hosting</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Domains</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Premium Hosting</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Private Server</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">E-mail Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="support">
                <h3 className={`${style.heading} h5 mb-4`}>Support</h3>
                <ul className={`${style.links}`}>
                  <li className="mb-3">
                    <a href="/">Pricing Plan</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Documentation</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Guide</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Tutorial</a>
                  </li>
                </ul>
              </div>
              <div className="company">
                <h3 className={`${style.heading} h5 mb-4`}>Company</h3>
                <ul className={`${style.links}`}>
                  <li className="mb-3">
                    <a href="/">About</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Blog</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Join Us</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Press</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Partners</a>
                  </li>
                </ul>
              </div>
              <div className="legal">
                <h3 className={`${style.heading} h5 mb-4`}>Legal</h3>
                <ul className={`${style.links}`}>
                  <li className="mb-3">
                    <a href="/">Claim</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Privacy</a>
                  </li>
                  <li className="mb-3">
                    <a href="/">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
