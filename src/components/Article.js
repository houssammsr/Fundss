import "./Article.css";
const Article = ({
  articleName,
  articleAllocatedAmount,
  articleRemainigAmount,
}) => {
  return (
    <div className="article">
      <div className="article-name-container7">
        <div className="icsection7">
          <img className="vector-icon39" alt="" src="/vector1.svg" />
        </div>
        <div className="article-name3">{articleName}</div>
      </div>
      <div className="article-allocated-amount-conta7">
        <div className="ic-amount-grey7">
          <img className="vector-icon40" alt="" src="/vector2.svg" />
        </div>
        <div className="amount-and-dzd-container26">
          <div className="article-allocated-amount3">
            {articleAllocatedAmount}
          </div>
          <div className="article-allocated-amount3">DZD</div>
        </div>
      </div>
      <div className="article-allocated-amount-conta7">
        <div className="icamount12">
          <img className="vector-icon40" alt="" src="/vector2.svg" />
        </div>
        <div className="amount-and-dzd-container26">
          <div className="article-allocated-amount3">
            {articleRemainigAmount}
          </div>
          <div className="article-allocated-amount3">DZD</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
