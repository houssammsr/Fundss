import { useState, useCallback } from "react";
import ResudialBalancePopUp from "../components/ResudialBalancePopUp";
import PortalPopup from "../components/PortalPopup";
import NewBalancePopUp from "../components/NewBalancePopUp";
import { useNavigate } from "react-router-dom";
import "./Budget.css";
const Budget = () => {
  const [isResudialBalancePopUpOpen, setResudialBalancePopUpOpen] =
    useState(false);
  const [isNewBalancePopUpOpen, setNewBalancePopUpOpen] = useState(false);
  const navigate = useNavigate();

  const openResudialBalancePopUp = useCallback(() => {
    setResudialBalancePopUpOpen(true);
  }, []);

  const closeResudialBalancePopUp = useCallback(() => {
    setResudialBalancePopUpOpen(false);
  }, []);

  const openNewBalancePopUp = useCallback(() => {
    setNewBalancePopUpOpen(true);
  }, []);

  const closeNewBalancePopUp = useCallback(() => {
    setNewBalancePopUpOpen(false);
  }, []);

  const onGoBackButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="budget">
        <div className="budget-container">
          <div className="budget-details-container">
            <div className="total-budget-container1">
              <div className="total-budget">Total Budget</div>
              <div className="total-budget-amount-container1">
                <div className="amount-and-dzd-container12">
                  <div className="total-budget">5,400,000</div>
                  <div className="total-budget">DZD</div>
                </div>
              </div>
            </div>
            <div className="total-budget-container1">
              <div className="total-budget">Remaining Budget</div>
              <div className="total-budget-amount-container1">
                <div className="amount-and-dzd-container12">
                  <div className="total-budget">5,400,000</div>
                  <div className="total-budget">DZD</div>
                </div>
              </div>
            </div>
          </div>
          <div className="budget-buttons-container">
            <button
              className="resudial-exercise-button1"
              onClick={openResudialBalancePopUp}
            >
              <img className="plusicon2" alt="" src="/plusicon.svg" />
              <div className="resudial-exercise2">RESUDIAL EXERCISE</div>
            </button>
            <button
              className="add-balance-button1"
              onClick={openNewBalancePopUp}
            >
              <img className="plusicon2" alt="" src="/plusicon1.svg" />
              <div className="add-balance1">ADD BALANCE</div>
            </button>
          </div>
        </div>
        <button className="go-back-button" onClick={onGoBackButtonClick}>
          <img className="vector-icon20" alt="" src="/vector3.svg" />
        </button>
      </div>
      {isResudialBalancePopUpOpen && (
        <PortalPopup placement="Centered">
          <ResudialBalancePopUp onClose={closeResudialBalancePopUp} />
        </PortalPopup>
      )}
      {isNewBalancePopUpOpen && (
        <PortalPopup placement="Centered">
          <NewBalancePopUp onClose={closeNewBalancePopUp} />
        </PortalPopup>
      )}
    </>
  );
};

export default Budget;
