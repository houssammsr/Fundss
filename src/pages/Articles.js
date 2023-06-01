import { useCallback } from "react";
import Article from "../components/Article";
import { useNavigate } from "react-router-dom";
import "./Articles.css";
const Articles = () => {
  const navigate = useNavigate();

  const onGoBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="articles">
      <div className="allocate-container">
        <div className="section-details4">
          <div className="section-name-container">
            <div className="section-name-title">Section name</div>
            <div className="section-name5">المساعدات الإجتماعية</div>
          </div>
          <div className="section-amount-details">
            <div className="section-name-title">Allocated Amount</div>
            <div className="section-amount-container">
              <div className="amount-and-dzd-container14">
                <div className="section-name-title">2,000,000</div>
                <div className="dzd14">DZD</div>
              </div>
            </div>
          </div>
        </div>
        <div className="articles-container">
          <div className="articles-details-titles">
            <div className="allocated-amount5">Allocated Amount</div>
            <div className="remaining-allocated-amount">
              Remaining Allocated Amount
            </div>
            <div className="articles1">Articles</div>
          </div>
          <div className="articles-details">
            <Article
              articleName="منحة التقاعد"
              articleAllocatedAmount="80,000"
              articleRemainigAmount="20,000"
            />
            <Article
              articleName="منحة الوفاة"
              articleAllocatedAmount="80,000"
              articleRemainigAmount="20,000"
            />
            <Article
              articleName="منحة الزواج"
              articleAllocatedAmount="80,000"
              articleRemainigAmount="20,000"
            />
            <Article
              articleName="منحة المولود الجديد"
              articleAllocatedAmount="80,000"
              articleRemainigAmount="20,000"
            />
            <Article
              articleName="منحة ختان المولود الجديد"
              articleAllocatedAmount="80,000"
              articleRemainigAmount="20,000"
            />
          </div>
        </div>
      </div>
      <button className="go-back-button1" onClick={onGoBackButtonClick}>
        <img className="vector-icon21" alt="" src="/vector3.svg" />
      </button>
    </div>
  );
};

export default Articles;
