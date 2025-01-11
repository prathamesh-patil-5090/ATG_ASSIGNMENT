import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";
import atgLogo from "../atg_icons/whole.png";
import dropdownArrow from "../atg_icons/baseline-arrow_drop_down-24px.png";
import { useModal } from '../context/ModalContext';
import userImage from '../atg_icons/Rectangle3-3.png';

const Navbar = ({ isLoggedIn }) => {
  const { setIsLoginModalOpen } = useModal();
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={atgLogo} alt="ATG Logo" className="logo" />
        </Link>
        
        <div className="d-none d-md-block col-md-5 mx-auto">
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-pill search-input"
              placeholder="Search for your favorite groups in ATG"
            />
          </div>
        </div>

        {isLoggedIn ? (
          <div className="d-none d-md-block d-flex align-items-center">
            <img
              src={userImage}
              alt="User"
              style={{ width: '32px', height: '32px', borderRadius: '50%' }}
            />
            <span className="ms-2">Siddharth Goyal</span>
          </div>
        ) : (
          <div className="create-account-wrapper d-none d-md-block">
            <a onClick={() => setIsLoginModalOpen(true)} className="create-account text-decoration-none d-flex align-items-center" style={{cursor: 'pointer'}}>
              Create account. <span className="d-flex align-items-center">It's free! <img src={dropdownArrow} alt="" className="dropdown-icon ms-1" /></span>
            </a>
          </div>
        )}

        <button className="d-md-none btn btn-link text-dark">
          <i className="bi bi-three-dots-vertical"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
