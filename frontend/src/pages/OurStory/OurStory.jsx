import "./OurStory.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function OurStory() {
    return (
        <>
            <Header />
            <div className="our-story">
                <div className="story-content">
                    <h1 className="story-title">Our Story</h1>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h2 className="section-title">The Beginning</h2>
                                <p className="section-text">
                                    Founded in 2020, ShopVault emerged from a
                                    simple idea: to create a sanctuary of style
                                    in the digital world. Our founders, driven
                                    by a passion for curated elegance,
                                    envisioned a platform where quality meets
                                    innovation.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h2 className="section-title">Our Mission</h2>
                                <p className="section-text">
                                    At ShopVault, we believe in the power of
                                    thoughtful design and lasting quality. Our
                                    mission is to provide a curated collection
                                    of products that elevate everyday living,
                                    blending functionality with timeless
                                    aesthetics.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h2 className="section-title">The Journey</h2>
                                <p className="section-text">
                                    From our humble beginnings to becoming a
                                    beacon of refined taste, our journey has
                                    been one of constant evolution. We've grown,
                                    learned, and refined our vision, always
                                    staying true to our core values of
                                    authenticity, sustainability, and
                                    customer-centric service.
                                </p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-content">
                                <h2 className="section-title">
                                    Looking Forward
                                </h2>
                                <p className="section-text">
                                    As we continue to grow, our commitment to
                                    you remains unwavering. We're excited about
                                    the future, about bringing you more
                                    exquisite finds, and about continuing to be
                                    your trusted destination for elevated
                                    living.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default OurStory;
