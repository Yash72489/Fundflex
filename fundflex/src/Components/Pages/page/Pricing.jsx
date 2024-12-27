import React, { Component } from "react";
import Navbar from "./Navbar";
import { SlArrowDown } from "react-icons/sl";
import { GoArrowRight } from "react-icons/go";
import { imgRound } from "../../../assets/jpg";
import { img } from "../../../assets/jpg";
import Footer from "./Footer";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

class Pricing extends Component {
  constructor() {
    super();
    this.state = {
      plan: "Choose your Plan",
      text: "Effortlessly Track, Manage, and Optimize Your Personal and Business Finances. Your Comprehensive Companion.",
      faqs: [
        {
          question: "How is secured my financial data?",
          answer:
            "Your financial data is highly secured using advanced encryption methods to ensure its safety.",
        },
        {
          question: "Can I access my financial data from multiple devices?",
          answer:
            "Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
        },
        {
          question: "Is customer support available if I need assistance?",
          answer:
            "Yes, customer support is available 24/7 to assist you with any queries or issues you may encounter.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes, we offer a free trial period so you can explore all features before subscribing.",
        },
        {
          question: "Can I customize the categories for my transactions?",
          answer:
            "Yes, you can fully customize categories to better organize and track your financial data.",
        },
      ],
      transform: [
        {
          ques: "Ready to Transform Your Experience?",
          ans: "Get Started Now and Explore New Possibilities with Our Comprehensive Resources.",
          btn: "Get Started now",
        },
      ],
      PricingCard: [
        {
          plan: "Starter Plan",
          for: "For small companies.",
          price: "49 USD",
          voucher: "per person, per month",
          item1: "Access to basic features",
          item2: "Attend events",
          item3: "Basic reporting + analytics",
          item4: "Automatic updates",
          item5: "Up to 10 individual users",
          className: "purple",
        },
        {
          plan: "Standard Plan",
          for: "For small companies.",
          price: "99 USD",
          voucher: "per person, per month",
          item1: "Access to basic features",
          item2: "Attend events",
          item3: "Basic reporting + analytics",
          item4: "Automatic updates",
          item5: "Up to 10 individual users",
          className: "orange",
        },
        {
          plan: "Premium Plan",
          for: "For small companies.",
          price: "179 USD",
          voucher: "per person, per month",
          item1: "Access to basic features",
          item2: "Attend events",
          item3: "Basic reporting + analytics",
          item4: "Automatic updates",
          item5: "Up to 10 individual users",
          className: "blue",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="Pricing-card">
          <span>{this.state.plan}</span>
          <p>{this.state.text}</p>
          <div className="toggle-btn">
            <p>Monthly</p>
            <button>
              <div className="circle">.</div>
            </button>
            <p>Yearly</p>
          </div>
          <div className="container-outer">
            {this.state.PricingCard.map((price, index) => (
              <div className={`pricing-item ${price.className}`} key={index}>
                <div className="plan">{price.plan}</div>
                <div className="for">{price.for}</div>
                <div className="inner-container">
                  <div className="price">
                    <TbCurrencyDollar />
                    {price.price}
                  </div>
                  <div className="per-time">{price.voucher}</div>
                  <div className="line-in"></div>
                  <ul>
                    <li>
                      <IoCheckmarkCircleSharp className="tick-icon-black" />
                      {price.item1}
                    </li>
                    <li>
                      <IoCheckmarkCircleSharp className="tick-icon-black" />
                      {price.item2}
                    </li>
                    <li>
                      <IoCheckmarkCircleSharp className="tick-icon-black" />
                      {price.item3}
                    </li>
                    <li>
                      <IoCheckmarkCircleSharp className="tick-icon-black" />
                      {price.item4}
                    </li>
                    <li>
                      <IoCheckmarkCircleSharp className="tick-icon-black" />
                      {price.item5}
                    </li>
                  </ul>
                  <button>Buy Plan</button>
                </div>
              </div>
            ))}
           
          </div>
          
        </div>
        <div className="faq">
          <div className="faq-text">
            <span>Got Questions? We've Got Answers!</span>
            <p>
              Effortlessly Track, Manage, and Optimize Your Personal and
              Business Finances. Your Comprehensive Companion.
            </p>
          </div>
          <div className="faq-main">
            {this.state.faqs.map((faq, index) => (
              <div className="faq-box" key={index}>
                <div className="faq-question">
                  <div className="faq-ques">
                    {index + 1}. {faq.question}
                  </div>
                  <div className="icon-faq">
                    <SlArrowDown className="icon-drop-faq" />
                  </div>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tranform-experience">
          <div className="transform-container">
            <div className="tranform-1">
              {this.state.transform.map((experience, index) => (
                <div key={index}>
                  <span>{experience.ques}</span>
                  <p>{experience.ans}</p>
                  <button>
                    {experience.btn}
                    <GoArrowRight className="icon-arrow" />
                  </button>
                </div>
              ))}
            </div>
            <div className="tranform-2">
              <>
                <div className="img-round">
                  <img src={imgRound} alt="rotation-img" />
                </div>
                <img src={img} alt="experience" />
              </>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Pricing;
