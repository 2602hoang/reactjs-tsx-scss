/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import Layout from "../../layout/Layout";
import Image from "../../images/Image.png";
import icon from "../../images/Icon.png";
function Contact() {
  return (
    <Layout>
      <section className="contact">
        <div className="contact__container">
          <div className="contact__image-container">
            <img src={Image} alt="Image" height="auto" width="100%" />
          </div>

          <div className="contact__content">
            <div className="contact__text-container">
              <h2 className="medium-36">Light, Fast & Powerful</h2>
              <p className="regular-16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                <br />
                <br />
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="contact__cards">
              <div className="contact__card-container">
                <a href="#" className="card">
                  <img src={icon} alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
                <a href="#" className="card">
                  <img src={icon} alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
              </div>
              <div className="contact__card-container">
                <a href="#" className="card">
                  <img src={icon} alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
                <a href="#" className="card">
                  <img src={icon} alt="Icon" className="card__icon" />
                  <h2 className="card__title">Title Goes Here</h2>
                  <p className="card__text">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Contact;
