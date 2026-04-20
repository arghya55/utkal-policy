import React, { useState } from 'react';
import axios from "axios";
import './AddPolicy.css';

const AddPolicy = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    category: 'IT'
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = (e) => {
//   e.preventDefault();

//   setError('');
//   setSuccess('');

//   try {
//     // get old policies
//     const existingPolicies =
//       JSON.parse(localStorage.getItem("policies")) || [];

//     // new policy
//     const newPolicy = {
//       id: Date.now(),
//       title: formData.title,
//       description: formData.description,
//       date: formData.date,
//       category: formData.category,
//     };

//     // add new policy
//     const updatedPolicies = [...existingPolicies, newPolicy];

//     // save to localStorage
//     localStorage.setItem("policies", JSON.stringify(updatedPolicies));

//     setSuccess("✅ Policy added successfully!");

//     // clear form
//     setFormData({
//       title: "",
//       description: "",
//       date: "",
//       category: "IT",
//     });

//     // redirect
//     setTimeout(() => {
//       window.location.hash = "/page/itpolicypage";
//     }, 1000);

//   } catch (err) {
//     setError("❌ Failed to save policy");
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post("http://127.0.0.1:5000/api/policies", formData);

    setSuccess("Policy Added!");

    setTimeout(() => {
      window.location.hash = "/page/itpolicypage";
    }, 1000);

  } catch (err) {
    setError("Failed to add policy");
  }
};


const handleBack = () => {
  window.location.hash = "/page/itpolicypage";
}

  return (
    <div className="add-policy-container">
      <div className="add-policy-header">
        <button className="back-btn" onClick={handleBack}>
          ← Back to IT Policies
        </button>
        <h1>Add New Policy</h1>
      </div>

      <div className="add-policy-form-container">
        <form onSubmit={handleSubmit} className="add-policy-form">

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <div className="form-group">
            <label>Policy Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Enter policy title"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="IT">IT</option>
            </select>
          </div>

          <div className="form-group">
            <label>Effective Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Enter policy description"
            />
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={handleBack}>
              Cancel
            </button>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Adding Policy...' : 'Add Policy'}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default AddPolicy;
