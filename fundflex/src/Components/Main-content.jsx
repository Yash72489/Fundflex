import { GoArrowRight } from "react-icons/go";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { SlArrowDown } from "react-icons/sl";

function MainContent() {
  const featureCards = [
    {
      src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e269705968fdd3a0a8e1ce_wallet-check.svg",
      tittle: "Expense Tracking",
      desc: "Easily track your expenses in real-time, categorize transactions, and set budget limits for different spending.",
    },
    {
      src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e26bf72d0e07bad1f6a533_chart.svg",
      tittle: "Advanced Analytics",
      desc: "Gain valuable insights into your data with our advanced analytics tools. Track key metrics and visualize trends.",
    },
    {
      src: "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e26c3983fe01c1f864309d_moneys.svg",
      tittle: "Payment Reminders",
      desc: "Never miss a bill payment again with automatic reminders and ensure all bills are paid on time avoiding penalties.",
    },
  ];
  const financialDesc = [
    {
      title: "Gain a deep insights into your financial health",
      desc: "Gain deep insights into your financial health with our advanced analytics tools. Track your spending patterns, identify trends, and visualize your financial data through interactive.",
      pt1: "Monitor investment performance",
      pt2: "Visualize your financial data",
      pt3: "Spending patterns and identify trends",
    },
  ];
  const wrapperCard = [
    {
      text: `I love how easy it is to track my spending with this app! It's helped me stick to my budget`,
      dealerimg:
        "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e29c3d33e6153d58f82cf8_Frame%20838.svg",
      dealername: "Sarah",
      passion: "GlOBALNOMADS",
    },
    {
      text: `“Transaction management has never been easier! This app has saved me so much!”`,
      dealerimg:
        "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d79adbe89fc253b16_Frame%201000000839.svg",
      dealername: "Emily",
      passion: "GlOBALNOMADS",
    },
    {
      text: `“The advanced analytics feature is a game-changer! It's helped me identify areas!”`,
      dealerimg:
        "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d480fcf4762d10b8d_Frame%20836.svg",
      dealername: "John",
      passion: "CYBERLEAPS",
    },
    {
      text: `I couldn’t be happier with the outcome.The skill involved was truly impressive.`,
      dealerimg:
        "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58df94d5b39d67311c4_Frame%20950.svg",
      dealername: "Michael",
      passion: "CYBERLEAPS",
    },
    {
      text: `“I can't imagine managing my finances without this app. It's become an essential part!”.`,
      dealerimg:
        "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d34354537cbecb4a3_Frame%20950%20(1).svg",
      dealername: "Leonel",
      passion: "FLOCLIPS",
    },
    {
      text: `“I couldn't be happier with the outcome. Prowess and creativity helped me a lot.”`,
      dealerimg:
        "https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e2c58d85dabd9a8e98ac69_Frame%20837.svg",
      dealername: "Melanie",
      passion: "CYBERLEAPS",
    },
  ];

  const Faq = [
    {
      question: " How is secured my financial data?",
      answer:
        "Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time",
    },
    {
      question: " Can I access my financial data from multiple device?",
      answer:
        "Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
    },
    {
      question: " Is customer support available if I need assistance?",
      answer:
        "Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
    },
    {
      question: " Is there a free trail available?",
      answer:
        "Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
    },
    {
      question: "Can I customizes the catogories for my transaction?",
      answer:
        "Yes, you can access your financial data from any device with an internet connection. Simply log in to your account to view your information from anywhere, at any time.",
    },
  ];

  return (
    <main>
      <div className="main-content">
        <div className="financial-text">
          <span>Empowering Your Financial Journey.</span>
          <p>
            Effortlessly Track, Manage, and Optimize Your Personal and Business
            Finances. Your Comprehensive Companion.
          </p>
          <div className="financial-btn">
            <button>Get started</button>
            <a href="#">
              Learn more <GoArrowRight className="icon-arrow" />
            </a>
          </div>
        </div>
        <div className="img-content">
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e165d3e1d035b154d56cb6_Hero%20Image.png"
            alt="graph"
          />
        </div>
      </div>
      <div className="company-sponsor">
        <div className="company-text">
          <p>Trusted by thousands of companies worldwide</p>
        </div>
        <div className="logo-company">
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e181a8b01605aaefe2c2a1_Fictional%20company%20logo%20(8).svg"
            alt="company-logo"
          />
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e181daa9c061e5c4481210_Fictional%20company%20logo%20(9).svg"
            alt="company-logo"
          />
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e181f25149360dd24e144b_Fictional%20company%20logo%20(10).svg"
            alt="company-logo"
          />
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e1822d82da51f0e4497936_Fictional%20company%20logo%20(11).svg"
            alt="company-logo"
          />
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e1820f8d842227d5780879_Fictional%20company%20logo%20(12).svg"
            alt="company-logo"
          />
        </div>
      </div>
      <div className="Feature-container">
        <div className="feature-text">
          <span>Our Cutting-Edge Features</span>
          <p>
            Effortlessly Track, Manage, and Optimize Your Personal and Business
            Finances. Your Comprehensive Companion.
          </p>
        </div>
        <div className="feature-cards">
          {featureCards.map((feature) => (
            <div key={feature.tittle} className="feature-card">
              <div className="feature-flex">
                <img src={feature.src} alt={feature.tittle} />
                <span>{feature.tittle}</span>
              </div>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="financial-container">
        <div className="finance-img">
          <div className="cycle">
            <img
              src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e272e7164b8e39c24b5562_Untitled-1%202.svg"
              alt="cycle"
            />
          </div>
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e272a6c3dc81b4d30180a7_Feature%20Image-p-800.png"
            alt="financehealth"
          />
        </div>
        <div className="finance-health">
          {financialDesc.map((finance, index) => (
            <div className="finance-card" key={financialDesc}>
              <span>{finance.title}</span>
              <p>{finance.desc}</p>
              <ul>
                <li>
                  <IoCheckmarkCircleSharp className="tick-icon" />
                  &nbsp;
                  {finance.pt1}
                </li>
                <li>
                  <IoCheckmarkCircleSharp className="tick-icon" />
                  &nbsp; {finance.pt2}
                </li>
                <li>
                  <IoCheckmarkCircleSharp className="tick-icon" />
                  &nbsp;
                  {finance.pt3}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="transaction-manage">
        <div className="transaction-text">
          <span>Take control of your transaction management</span>
          <p>
            Easily categorize, tag, and organize your transactions to gain a
            clear overview of your financial activity. Set custom rules to
            automatically categorize recurring transactions, saving you time and
            effort.
          </p>
          <div className="transaction-btn">
            <button>Get started</button>
            <a href="#">
              Learn more <GoArrowRight className="icon-arrow" />
            </a>
          </div>
        </div>

        <div className="transaction-content">
          <img
            src="https://cdn.prod.website-files.com/66de7a3f320019f11fc74881/66e297bbfe98f777d6198d77_Group%2034469-p-800.png"
            alt="trans-views"
          />
        </div>
      </div>
      <div className="text-card-wrap">
        <div className="wrap-text">
          <span>See Why People Love Us</span>
          <p>
            Effortlessly Track, Manage, and Optimize Your Personal and Business
            Finances. Your Comprehensive Companion.
          </p>
        </div>
        <div className="card-wrapper">
          {wrapperCard.map((cards) => (
            <div className="card-text" key={cards.text}>
              {cards.text}
              <div className="card-detail">
                <img src={cards.dealerimg} alt="dealers" />
                <div className="card-name">
                  <span>{cards.dealername}</span>
                  <p>{cards.passion}</p>
                </div>
                <div className="line"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="faq">
        <div className="faq-text">
          <span>Got Questions? We've Got Answers!</span>
          <p>
            Effortlessly Track, Manage, and Optimize Your Personal and Business
            Finances. Your Comprehensive Companion.
          </p>
        </div>
        <div className="faq-main">
          {Faq.map((ask, index) => (
            <div className="faq-box" key={index}>
              <div className="faq-question">
                <div className="faq-ques">
                  {index + 1}.{ask.question}
                </div>
                <div className="icon-faq">
               <SlArrowDown className="icon-drop-faq" />
                </div>
              </div>
              <div className="faq-answer">
                <p>{ask.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default MainContent;
