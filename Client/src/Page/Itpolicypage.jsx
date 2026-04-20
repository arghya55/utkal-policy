import React, { useEffect, useState } from "react";
import axios from "axios";
import "./itpolicy.css";
import policyImg from "../assets/hero.png";

const ItPolicyPage = () => {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetchPolicies();
}, []);

useEffect(() => {
  window.addEventListener("focus", fetchPolicies);

  return () => {
    window.removeEventListener("focus", fetchPolicies);
  };
}, []);

// const fetchPolicies = () => {
//   try {
//     setLoading(true);

//     const allPolicies =
//       JSON.parse(localStorage.getItem("policies")) || [];

//     // filter only IT category
//     const itPolicies = allPolicies.filter(
//       (p) => p.category === "IT"
//     );

//     setPolicies(itPolicies);

//   } catch (err) {
//     setError("Failed to load policies");
//   } finally {
//     setLoading(false);
//   }
// };


const fetchPolicies = async () => {
  try {
    setLoading(true);

    const res = await axios.get(
      "https://utkal-tree-backend.onrender.com/api/policies/category/IT"
    );

    setPolicies(res.data);

  } catch (err) {
    console.log("FULL ERROR:", err);   // 👈 IMPORTANT
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="itpolicy-container">
      <h1 className="main-title">IT POLICIES</h1>

      {/* Section I */}
      <div className="section">
        {/* <h2 className="section-title">IT Policies</h2> */}
        <div className="highlight-box">
          <div className="highlight-left">
            <div className="image-card">
              <img
                src={policyImg}
                alt="IT Policy illustration"
                className="policy-image"
              />
            </div>
          </div>
          <div className="highlight-arrow">
            <span>→</span>
          </div>
          <div className="highlight-right">
            <div className="policy-list-card">
              <div className="policy-list-heading">Some Important IT Policies:</div>
              <ul className="policy-list">
                <h4><p>Information Security Policy & Password</p></h4>
                <h4><p>Internet Access Policy</p></h4>
                <h4><p>Email Security Policy</p></h4>
                <h4><p>End User Device Security Policy</p></h4>
                <h4><p>Data Backup Policy</p></h4>
                <h4><p>Physical & Environmental Policy</p></h4>
                <h4><p>Data Security Policy</p></h4>
                <h4><p>Data Privacy Policy</p></h4>
                <h4><p>Clear Screen & Clear Desk Policy</p></h4>
                <h4><p>New Creation of H/S / Email ID / Services</p></h4>
                <h4><p>Service Cancellation Policy</p></h4>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section II */}
      <div className="section">
        <h2 className="section-title">IT Policies</h2>
        {loading && <div className="loading">Loading policies...</div>}
        {error && <div className="error">Error: {error}</div>}
        <div className="policy-grid">
          {policies.map((policy) => (
            <div key={policy.id} className="policy-card">
              <h4>{policy.title}</h4>
              <p>{policy.description}</p>
              {policy.date && (
                <small className="policy-date">
                  Effective: {new Date(policy.date).toLocaleDateString()}
                </small>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Section III */}
      <div className="section">
        {/* Additional policies will be displayed here if needed */}
      </div>

      {/* Back Button */}
      <div className="back-btn-container">
        <a href="#/department/it" className="back-btn">
          ← Back to IT Department
        </a>
      </div>
      <button 
  className="policy-btn"
  onClick={() => window.location.hash = "/page/addpolicy"}
>
  Add Your Policy
</button>
    </div>
  );
};

export default ItPolicyPage;
