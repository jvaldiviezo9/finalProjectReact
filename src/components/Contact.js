import React from "react";

const Contact = () => {
  return (
    <>
    <p className="contact__bg"></p>
    <section className="contact">
      <div className="contact__container">
        <div className="contact__info">
          <h4 className="contact__title">Doggy</h4>
          <p className="contact__text">Cuida. Educa. Ama.</p>
        </div>
        <div className="contact__data">
          <div className="contact__data-container">
            <p className="contact__data-title">Contact</p>
            <p className="contact__data-address">Address</p>
            <p className="contact__data-phone">Phone</p>
          </div>
          <div className="contact__data-container">
            <p className="contact__data-title">E-mail</p>
            <p className="contact__data-email">aristh@yandex.com</p>
            <p className="contact__data-email">aristh_design@some.com</p>
          </div>
          <div className="contact__data-container">
            <img className="contact__data-linkedin" src="/images/contact__data-linkedin.svg"/>
            <img className="contact__data-facebook" src="/images/contact__data-facebook.svg"/>
            <img className="contact__data-twitter" src="/images/contact__data-twitter.svg"/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact;
