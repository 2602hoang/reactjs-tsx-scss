import Layout from "../../layout/Layout";
import bgsection1 from "../../images/panner.png";
import mobile from "../../images/mobile.png";
import icon from "../../images/Icon.png";
import info from "../../images/info.png";
import info1 from "../../images/info1.png";
import info2 from "../../images/info2.png";
import section4 from "../../images/Rectangle.png";
function Home() {
  return (
    <Layout>
      <div>
        <section
          style={{ backgroundImage: `url(${bgsection1})` }}
          className="section1"
        >
          <div className="section1__text">
            <div className="section1__text-box">
              <h1 className="medium-50">
                Introduce Your Product Quickly & Effectively
              </h1>

              <p className="regular-18">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>

              <p className="regular-18__sub">
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>

            <div className="section1__buttons">
              <button className="section1__button section1__button--primary">
                Purchase UI Kit
              </button>
              <button className="section1__button section1__button--secondary">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* <!-- Section2 --> */}

        <section className="section2">
          <div className="section2__container">
            <div className="section2__content">
              <div className="section2__text-container">
                <h2 className="medium-36">Light, Fast & Powerful</h2>
                <p className="regular-16">
                  Lorem ipsum dolor sit amet,consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                  <p className="regular-16__sub">
                    mus. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nulla consequat massa quis enim.
                  </p>
                </p>
              </div>

              <div className="section2__cards">
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

            <div className="section2__image-container">
              <img
                src={mobile}
                alt="Mobile"
                className="section2__image"
                width={"100%"}
                height={"auto"}
              />
            </div>
          </div>
        </section>
        {/* <!-- Section3 --> */}

        <section className="section3-info">
          <div className="section3-info__item">
            <div className="section3-info__image-container">
              <img src={info} alt="Info" width="100%" height="auto" />
            </div>
            <div className="section3-info__text-container">
              <h2 className=" medium-36">Light, Fast & Powerful</h2>
              <p className="regular-16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>
              <p className="regular-16__sub">
                mus Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </section>

        <section className="section3-info1">
          <div className="section3-info__item1">
            <div className="section3-info__image-container1">
              <img src={info1} alt="Info" width="100%" height="auto" />
            </div>
            <div className="section3-info__text-container1">
              <h2 className="medium-36">Light, Fast & Powerful</h2>
              <p className="regular-16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>
              <p className="regular-16__sub">
                mus Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
        </section>

        <section className="section3-info2">
          <div className="section3-info__item2">
            <div className="section3-info__image-container2">
              <img src={info2} alt="Info" height="auto" width="100%" />
            </div>
            <div className="section3-info__text-container2">
              <h2 className=" medium-36">Light, Fast & Powerful</h2>
              <p className="regular-16">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
              </p>

              <p className="regular-16__sub">
                mus Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
              <button className="section3-info__button">Purchase Now</button>
            </div>
          </div>
        </section>

        {/* <!-- section4 --> */}
        <section
          style={{ backgroundImage: `url(${section4})` }}
          className="section4"
        >
          <div className="section4__content">
            <div className="section4__text-box">
              <h2 className="section4__title">A Price To Suit Everyone</h2>
              <p className="section4__description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus.
              </p>
            </div>
            <div className="section4__price-box">
              <strong className="section4__price">$40</strong>
              <h2 className="section4__subtitle">UI Design Kit</h2>
            </div>
            <div className="section4__purchase">
              <p className="section4__note">See, One price. Simple.</p>
              <button className="section4__button">
                <span className="section4__button-text">Purchase Now</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Home;
