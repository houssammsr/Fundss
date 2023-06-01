import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Funds.css";
const Funds = () => {
  const navigate = useNavigate();

  const onViewArticlesButtonClick = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButtonClick = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton1Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton1Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton2Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton2Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton3Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton3Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onViewArticlesButton4Click = useCallback(() => {
    navigate("/articles");
  }, [navigate]);

  const onAllocateButton4Click = useCallback(() => {
    navigate("/allocate");
  }, [navigate]);

  const onBudjetDetailsContainerClick = useCallback(() => {
    navigate("/budget");
  }, [navigate]);

  const onMoveFundsButtonClick = useCallback(() => {
    navigate("/movefunds");
  }, [navigate]);

  return (
    <div className="funds">
      <div className="funds-container">
        <div className="section-and-amount-container">
          <div className="allocated-sections-amount-cont">
            <b className="allocated-sections-amount">
              Allocated Sections Amount
            </b>
            <div className="alocated-sections-amount">
              <div className="amount-and-dzd-container">
                <div className="section-allocated-amount">2,000,000</div>
                <div className="dzd">DZD</div>
              </div>
            </div>
          </div>
          <div className="sections-container">
            <div className="section">
              <div className="section-name">المساعدات الإجتماعية</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount">
                    <img className="vector-icon" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container">
                      <div className="section-allocated-amount">400,000</div>
                      <div className="section-allocated-amount">DZD</div>
                    </div>
                    <div className="allocated-amount">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button"
                  onClick={onViewArticlesButtonClick}
                >
                  <div className="icarticles">
                    <img className="vector-icon1" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button"
                  onClick={onAllocateButtonClick}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="section-name">الخدمـــــــات الصــــــحيـة</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount">
                    <img className="vector-icon" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container">
                      <div className="section-allocated-amount">400,000</div>
                      <div className="section-allocated-amount">DZD</div>
                    </div>
                    <div className="allocated-amount">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button1"
                  onClick={onViewArticlesButton1Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon1" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button1"
                  onClick={onAllocateButton1Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="section-name">التضامن</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount">
                    <img className="vector-icon" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container">
                      <div className="section-allocated-amount">400,000</div>
                      <div className="section-allocated-amount">DZD</div>
                    </div>
                    <div className="allocated-amount">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button2"
                  onClick={onViewArticlesButton2Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon1" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button2"
                  onClick={onAllocateButton2Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="section-name">السلف الإجتماعية</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount">
                    <img className="vector-icon" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container">
                      <div className="section-allocated-amount">400,000</div>
                      <div className="section-allocated-amount">DZD</div>
                    </div>
                    <div className="allocated-amount">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button3"
                  onClick={onViewArticlesButton3Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon1" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button3"
                  onClick={onAllocateButton3Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate">Allocate</div>
                </button>
              </div>
            </div>
            <div className="section">
              <div className="section-name">النشاطات الثقافية</div>
              <div className="section-details-container">
                <div className="section-allocated-amount-conta">
                  <div className="icamount">
                    <img className="vector-icon" alt="" src="/vector5.svg" />
                  </div>
                  <div className="second-section-allocated-amoun">
                    <div className="amount-and-dzd-container">
                      <div className="section-allocated-amount">400,000</div>
                      <div className="section-allocated-amount">DZD</div>
                    </div>
                    <div className="allocated-amount">Allocated Amount</div>
                  </div>
                </div>
                <button
                  className="view-articles-button4"
                  onClick={onViewArticlesButton4Click}
                >
                  <div className="icarticles">
                    <img className="vector-icon1" alt="" src="/vector6.svg" />
                  </div>
                  <div className="view-articles">View Articles</div>
                </button>
                <button
                  className="allocate-button4"
                  onClick={onAllocateButton4Click}
                >
                  <div className="icalocate">
                    <img
                      className="alocate-icon"
                      alt=""
                      src="/alocateicon.svg"
                    />
                  </div>
                  <div className="allocate">Allocate</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="budjet-and-button-container">
          <div
            className="budjet-details"
            onClick={onBudjetDetailsContainerClick}
          >
            <div className="total-budget-container">
              <div className="allocated-sections-amount">Total Budget</div>
              <div className="total-budget-amount-container">
                <div className="amount-and-dzd-container6">
                  <div className="section-name">5,400,000</div>
                  <div className="section-name">DZD</div>
                </div>
              </div>
            </div>
            <div className="remaining-budget-container">
              <div className="allocated-sections-amount">Remaining Budget</div>
              <div className="total-budget-amount-container">
                <div className="amount-and-dzd-container6">
                  <div className="section-name">3,400,000</div>
                  <div className="section-name">DZD</div>
                </div>
              </div>
            </div>
            <div className="icamount5">
              <img className="vector-icon10" alt="" src="/vector.svg" />
            </div>
            <button className="budget-icon">
              <img className="vector-icon11" alt="" src="/vector8.svg" />
            </button>
          </div>
          <button
            className="move-funds-button"
            onClick={onMoveFundsButtonClick}
          >
            <img className="vector-icon12" alt="" src="/vector9.svg" />
            <div className="move-funds-button1">MOVE FUNDS</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Funds;
