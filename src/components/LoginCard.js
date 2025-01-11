import React from "react";
import "./css/LoginCard.css";
import illustration from "../atg_icons/atg_illustration.png";
import facebookIcon from "../atg_icons/f_logo_RGB-Blue_1024.png";
import googleIcon from "../atg_icons/search.png";
import { useModal } from '../context/ModalContext';

const LoginCard = ({ isLoggedIn, setIsLoggedIn }) => {
  const { isLoginModalOpen, setIsLoginModalOpen } = useModal();

  const handleFakeAuth = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  if (!isLoginModalOpen) return null;

  return (
    <div className="modal-backdrop show" onClick={() => setIsLoginModalOpen(false)}>
      <div className="modal d-block" onClick={e => e.stopPropagation()}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <button 
              type="button" 
              className="btn-close position-absolute" 
              onClick={() => setIsLoginModalOpen(false)}
              style={{
                right: '10px',
                top: '10px',
                zIndex: 1050,
                background: 'none',
                border: 'none',
                padding: '8px'
              }}
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="alert alert-success border-0 rounded-0 mb-0">
              <p className="mb-0">
                Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘
              </p>
            </div>
            
            <div className="modal-body p-0">
              <div className="row g-0">
                <div className="col-md-6 p-4">
                  <h2 className="mb-4">Create Account</h2>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleFakeAuth();
                  }}>
                    <div className="row g-2 mb-3">
                      <div className="col-6">
                        <input type="text" className="form-control" placeholder="First Name" />
                      </div>
                      <div className="col-6">
                        <input type="text" className="form-control" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                  </form>

                  <div className="mt-3">
                    <button className="btn btn-outline-secondary w-100 mb-2" onClick={handleFakeAuth}>
                      <img src={facebookIcon} alt="Facebook" className="me-2" style={{width: "20px"}} />
                      Sign up with Facebook
                    </button>
                    <button className="btn btn-outline-secondary w-100" onClick={handleFakeAuth}>
                      <img src={googleIcon} alt="Google" className="me-2" style={{width: "20px"}} />
                      Sign up with Google
                    </button>
                  </div>
                </div>
                
                <div className="col-md-6 p-4">
                  <img src={illustration} alt="ATG Illustration" className="img-fluid" />
                  <p className="small text-muted mt-3">
                    By signing up, you agree to our Terms & conditions, Privacy policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
