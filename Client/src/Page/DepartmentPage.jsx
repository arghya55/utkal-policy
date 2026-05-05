import React, { useEffect, useState } from "react";
import { api } from "../api";
import "./DepartmentPage.css";

const DepartmentPage = ({ deptId }) => {
  const [department, setDepartment] = useState(null);
  const [policies, setPolicies] = useState([]);

  // 🔥 MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(null);

  const user = JSON.parse(sessionStorage.getItem("user"));

  // ================= FETCH =================
  useEffect(() => {
    if (!deptId) return;

    fetchDepartment();
    fetchPolicies();
      const handler = () => fetchPolicies();

  window.addEventListener("policy-added", handler);

  return () => window.removeEventListener("policy-added", handler);
  }, [deptId]);

  const fetchDepartment = async () => {
    try {
      const res = await api.get("/departments");
      const found = res.data.find((d) => d._id === deptId);
      setDepartment(found);
    } catch (err) {
      console.log("Department error:", err);
    }
  };

  const fetchPolicies = async () => {
    try {
      const res = await api.get(`/policies?departmentId=${deptId}`);
      setPolicies(res.data);
    } catch (err) {
      console.log("Policy error:", err.response?.data || err.message);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this policy?")) return;
    console.log("DELETE TOKEN:", sessionStorage.getItem("token"));

    try {
      await api.delete(`/policies/${id}`);

      // 🔥 UI update without reload
      setPolicies((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("❌ Delete failed");
    }
  };

  // ================= OPEN MODAL =================
  const handleEdit = (policy) => {
    setEditData(policy);
    setShowModal(true);
  };

  // ================= UPDATE =================
  const handleUpdate = async () => {
    console.log("UPDATE TOKEN:", sessionStorage.getItem("token"));
    try {
      const res = await api.put(`/policies/${editData._id}`, {
        title: editData.title,
        description: editData.description,
      });

      // 🔥 update UI instantly
      setPolicies((prev) =>
        prev.map((p) =>
          p._id === editData._id ? res.data : p
        )
      );

      setShowModal(false);
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("❌ Update failed");
    }
  };

  // ================= PERMISSION =================
  const canManage =
    user &&
    user.canAddPolicy &&
    String(user.department) === String(department?._id);

  return (
    <div className="dept-container">

      {/* HEADER */}
      <div className="dept-header">
        <button
          className="back-btn"
          onClick={() => (window.location.hash = "#/policy")}
        >
          ← Back
        </button>

        <h1>{department?.name}</h1>

        {canManage && (
          <button
            className="add-btn"
            onClick={() => (window.location.hash = "#/page/addpolicy")}
          >
           +
          </button>
        )}
      </div>

      {/* POLICY LIST */}
      <div className="policy-grid">
        {policies.map((p) => (
          <div key={p._id} className="policy-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>

            {canManage && (
              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(p)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(p._id)}
                >
                  🗑 Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">

            <h2>Edit Policy</h2>

            <input
              value={editData.title}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
            />

            <textarea
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            />

            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button onClick={handleUpdate}>
                Update
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default DepartmentPage;