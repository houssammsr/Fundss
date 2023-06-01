import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Allocate.css";
const Allocate = () => {
  const navigate = useNavigate();

  const onValidateButtonClick = useCallback(() => {
    //TODO: Validate balances added
  }, []);

  const onGoBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="allocate5">
      <div className="allocate-and-button-container">
        <div className="allocate-container1">
          <div className="section-details5">
            <div className="section-name-container1">
              <div className="section-name-title1">Section name</div>
              <div className="section-name6">المساعدات الإجتماعية</div>
            </div>
            <div className="section-amount-details1">
              <div className="section-name-title1">Allocated Amount</div>
              <div className="section-amount-container1">
                <div className="amount-and-dzd-container15">
                  <div className="section-name-title1">2,000,000</div>
                  <div className="dzd15">DZD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-container1">
            <div className="articles-details-titles1">
              <div className="articlestitle2">Articles</div>
              <div className="allocated-amounttitle2">Allocated Amount</div>
              <div className="remaining-allocated-amounttit2">
                Remaining Allocated Amount
              </div>
              <div className="add-new-balancetitle">Add New Balance</div>
            </div>
            <div className="articles-details1">
              <div className="article-and-input">
                <div className="article-name-container2">
                  <div className="icsection2">
                    <img className="vector-icon22" alt="" src="/vector1.svg" />
                  </div>
                  <div className="div">منحة التقاعد</div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="ic-amount-grey2">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="icamount7">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container2">
                  <div className="icsection2">
                    <img className="vector-icon22" alt="" src="/vector1.svg" />
                  </div>
                  <div className="div">منحة الوفاة</div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="ic-amount-grey2">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="icamount7">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container2">
                  <div className="icsection2">
                    <img className="vector-icon22" alt="" src="/vector1.svg" />
                  </div>
                  <div className="div">منحة الزواج</div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="ic-amount-grey2">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="icamount7">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container2">
                  <div className="icsection2">
                    <img className="vector-icon22" alt="" src="/vector1.svg" />
                  </div>
                  <div className="div">منحة المولود الجديد</div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="ic-amount-grey2">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="icamount7">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
              <div className="article-and-input">
                <div className="article-name-container2">
                  <div className="icsection2">
                    <img className="vector-icon22" alt="" src="/vector1.svg" />
                  </div>
                  <div className="div">منحة ختان المولود الجديد</div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="ic-amount-grey2">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">80,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <div className="article-allocated-amount-conta2">
                  <div className="icamount7">
                    <img className="vector-icon23" alt="" src="/vector2.svg" />
                  </div>
                  <div className="amount-and-dzd-container16">
                    <div className="section-name-title1">20,000</div>
                    <div className="section-name-title1">DZD</div>
                  </div>
                </div>
                <input className="article-new-balance-input" type="text" />
              </div>
            </div>
          </div>
        </div>
        <button className="validate-button" onClick={onValidateButtonClick}>
          <img className="vector-icon37" alt="" src="/vector31.svg" />
          <div className="validate">VALIDATE</div>
        </button>
      </div>
      <button className="go-back-button2" onClick={onGoBackButtonClick}>
        <img className="vector-icon38" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default Allocate;
