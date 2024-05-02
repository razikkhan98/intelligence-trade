import React from "react";

const RoadMap = () => {

    return (
    <>
      {/* <!-- roadmap --> */}
      <section class="section">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="roadmap">
                <h2 class="roadmap__title">Roadmap</h2>
                {/* start carousel */}
                <div
                  id="carouselExampleIndicators"
                  class="roadmap__carousel carousel slide"
                  data-bs-ride="carousel"
                >
                
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="Card-wrapper d-flex">
                        {/* <!-- step --> */}
                        <div class="roadmap__block roadmap__block--active">
                          <h3 class="roadmap__block-title">2023 Q4</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Develop the website's backend infrastructure and
                              set up secure trading APIs.
                            </li>
                            <li>
                              Design the user interface, ensuring ease of use
                              and seamless navigation.
                            </li>
                            <li>
                              Create educational content about cryptocurrency
                              arbitrage trading for the website's Knowledge
                              Center.
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end step --> */}
                        {/* <!-- step --> */}
                        <div class="roadmap__block roadmap__block--active">
                          <h3 class="roadmap__block-title">2024 Q1</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Launch the beta version of the website for a
                              limited user group to gather feedback.
                            </li>
                            <li>
                              Test and optimize the trading algorithms to ensure
                              accuracy and efficiency.
                            </li>
                            <li>
                              Implement robust security measures, including
                              encryption and two-factor authentication.
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end step --> */}
                        {/* <!-- step --> */}
                        <div class="roadmap__block">
                          <h3 class="roadmap__block-title">2024 Q2</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Launch the full version of the website to the
                              public.
                            </li>
                            <li>
                              Implement a comprehensive reporting and analytics
                              system for users to track their trading
                              performance.
                            </li>
                            <li>
                              Collaborate with industry experts to provide
                              regular insights and trading tips.
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end step --> */}
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div className="card-wrapper d-flex">
                        {/* <!-- step --> */}
                        <div class="roadmap__block">
                          <h3 class="roadmap__block-title">2024 Q3</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Develop advanced trading features, such as
                              arbitrage alerts and strategies.
                            </li>
                            <li>
                              Introduce a subscription-based model for premium
                              users, offering exclusive features and resources.
                            </li>
                            <li>
                              Expand educational resources with webinars and
                              tutorials.
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end step --> */}
                        {/* <!-- step --> */}
                        <div class="roadmap__block">
                          <h3 class="roadmap__block-title">2024 Q4</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Launch mobile apps for iOS and Android platforms
                              to facilitate trading on the go.
                            </li>
                            <li>
                              Continuously update trading algorithms based on
                              market trends and user feedback.
                            </li>
                            <li>
                              Collaborate with regulatory experts to ensure
                              compliance with evolving cryptocurrency
                              regulations.
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end step --> */}
                        {/* <!-- step --> */}
                        <div class="roadmap__block roadmap__block--active">
                          <h3 class="roadmap__block-title">2023 Q4</h3>
                          <ul class="roadmap__block-list">
                            <li>
                              Develop the website's backend infrastructure and
                              set up secure trading APIs.
                            </li>
                            <li>
                              Design the user interface, ensuring ease of use
                              and seamless navigation.
                            </li>
                            <li>
                              Create educational content about cryptocurrency
                              arbitrage trading for the website's Knowledge
                              Center.
                            </li>
                          </ul>
                        </div>
                        {/* <!-- end step --> */}
                      </div>
                    </div>
                  </div>
                 
                </div>
                {/* end carousel */}

                {/* <!-- design elements --> */}
                <span class="block-icon block-icon--blue">
                  <i class="ti ti-north-star"></i>
                </span>
                <span class="screw screw--lines-bl"></span>
                <span class="screw screw--lines-br"></span>
                <span class="screw screw--lines-tr"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end roadmap --> */}
    </>
  );
};
export default RoadMap;
