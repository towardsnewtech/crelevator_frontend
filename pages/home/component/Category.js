import React, { Fragment } from "react";
import Slider from "react-slick";
import { Slider4 } from "../../../services/script";
import { Media, Container, Col, Row } from "reactstrap";
import category1 from "../../../public/assets/images/tools/category/1.jpg";
import category2 from "../../../public/assets/images/tools/category/2.jpg";
import category3 from "../../../public/assets/images/tools/category/3.jpg";
import category4 from "../../../public/assets/images/tools/category/4.jpg";

const Data = [
  {
    img: category1,
    title: "shaft components",
    features: [
      { title: "elevator guide rail", link: "#" },
      { title: "fishplates", link: "#" },
      { title: "rail clip", link: "#" },
      { title: "anchor bolts & fasteners", link: "#" },
    ],
    link: "#",
  },
  {
    img: category2,
    title: "cabin & cw components",
    features: [
      { title: "guide shoes", link: "#" },
      { title: "oil can & oil collector", link: "#" },
      { title: "car frame", link: "#" },
      { title: "cabin hardware", link: "#" },
    ],
    link: "#",
  },
  {
    img: category3,
    title: "safety components",
    features: [
      { title: "safety gear", link: "#" },
      { title: "tension device", link: "#" },
      { title: "steel wire rope", link: "#" },
      { title: "rope attachement", link: "#" },
    ],
    link: "#",
  },
  {
    img: category4,
    title: "electric components",
    features: [
      { title: "cop lop hop", link: "#" },
      { title: "control cabinet", link: "#" },
      { title: "controlling system", link: "#" },
      { title: "gate oppener", link: "#" },
    ],
    link: "#",
  },
];

const MasterCategory = ({ img, title, features, link }) => {
  return (
    <div>
      <div className="category-wrapper pt-0">
        <div>
          <div>
            <Media
              src={img}
              className="img-fluid blur-up lazyload bg-img"
              alt=""
            />
          </div>
          <h4>{title}</h4>
          <ul className="category-link">
            {features.map((data, i) => {
              return (
                <li key={i}>
                  <a href={data.link}>{data.title}</a>
                </li>
              );
            })}
          </ul>
          <a href={link} className="btn btn-classic btn-outline">
            view more
          </a>
        </div>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <section className="pt-0 category-tools ratio3_2">
        <Container>
          <Row>
            <Col>
              <Slider {...Slider4} className="slide-4 category-m no-arrow">
                {/* <div>
                  <div className="category-wrapper pt-0">
                    <div>
                      <div>
                        <Media
                          src={category1}
                          className="img-fluid blur-up lazyload bg-img"
                          alt=""
                        />
                      </div>
                      <h4>auto parts</h4>
                      <ul className="category-link">
                        <li>
                          <a href="#">d1 milano</a>
                        </li>
                        <li>
                          <a href="#">damaskeening</a>
                        </li>
                        <li>
                          <a href="#">diving watch</a>
                        </li>
                        <li>
                          <a href="#">dollar watch</a>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-classic btn-outline">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="category-wrapper pt-0">
                    <div>
                      <div>
                        <Media
                          src={category2}
                          className="img-fluid blur-up lazyload bg-img"
                          alt=""
                        />
                      </div>
                      <h4>brakes & steering</h4>
                      <ul className="category-link">
                        <li>
                          <a href="#">Shock-resistant watch</a>
                        </li>
                        <li>
                          <a href="#">Skeleton watch</a>
                        </li>
                        <li>
                          <a href="#">Slow watch</a>
                        </li>
                        <li>
                          <a href="#">Solar-powered watch</a>
                        </li>
                      </ul>
                      <a href="#" className="btn btn-outline btn-classic">
                        view more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="category-wrapper pt-0">
                  <div>
                    <div>
                      <Media
                        src={category3}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </div>
                    <h4>engine & drivetrain</h4>
                    <ul className="category-link">
                      <li>
                        <a href="#">Watchmaking conglomerates</a>
                      </li>
                      <li>
                        <a href="#">Breitling SA</a>
                      </li>
                      <li>
                        <a href="#">Casio watches</a>
                      </li>
                      <li>
                        <a href="#">Citizen Watch</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-outline btn-classic">
                      view more
                    </a>
                  </div>
                </div>
                <div className="category-wrapper pt-0">
                  <div>
                    <div>
                      <Media
                        src={category4}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </div>
                    <h4>exterior accesories</h4>
                    <ul className="category-link">
                      <li>
                        <a href="#">Manufacture d'horlogerie</a>
                      </li>
                      <li>
                        <a href="#">Mechanical watch</a>
                      </li>
                      <li>
                        <a href="#">Microbrand watches</a>
                      </li>
                      <li>
                        <a href="#">MIL-W-46374</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-outline btn-classic">
                      view more
                    </a>
                  </div>
                </div>
                <div className="category-wrapper pt-0">
                  <div>
                    <div>
                      <Media
                        src={category5}
                        className="img-fluid blur-up lazyload bg-img"
                        alt=""
                      />
                    </div>
                    <h4>other parts</h4>
                    <ul className="category-link">
                      <li>
                        <a href="#">d1 milano</a>
                      </li>
                      <li>
                        <a href="#">damaskeening</a>
                      </li>
                      <li>
                        <a href="#">diving watch</a>
                      </li>
                      <li>
                        <a href="#">dollar watch</a>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-outline btn-classic">
                      view more
                    </a>
                  </div>
                </div> */}
                {Data.map((data, i) => {
                  return (
                    <MasterCategory
                      key={i}
                      img={data.img.src}
                      link={data.link}
                      title={data.title}
                      features={data.features}
                    />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Category;
