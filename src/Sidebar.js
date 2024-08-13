import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 
import imglogo from './logo.png';
import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaEdit, FaTrashAlt, FaCommentAlt, FaPlusCircle, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isDetailsSubmenuOpen, setIsDetailsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const toggleDetailsSubmenu = () => {
    setIsDetailsSubmenuOpen(!isDetailsSubmenuOpen);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo-container">
        <img src={imglogo} alt="Company Logo" className="sidebar-logo" />
        <h1 className="sidebar-company-name">CourseCraft</h1>
      </div>
      <ul className="sidebar-nav-links">
        <li>
          <div onClick={toggleSubmenu} className="sidebar-main-link">
            <FaPlusCircle className="sidebar-icon" /> Add Course
          </div>
          {isSubmenuOpen && (
            <ul className="sidebar-sub-links">
              <li><Link to="admin/add-courseeng" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Engineering</Link></li>
              <li><Link to="admin/add-coursearts" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Arts and Science</Link></li>
              <li><Link to="admin/add-courseagri" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Agriculture</Link></li>
              <li><Link to="admin/add-coursemed" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Medicine</Link></li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={toggleDetailsSubmenu} className="sidebar-main-link">
            <FaInfoCircle className="sidebar-icon" /> Add Course Details
          </div>
          {isDetailsSubmenuOpen && (
            <ul className="sidebar-sub-links">
              <li><Link to="admin/add-course-details-eng" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Engineering</Link></li>
              <li><Link to="admin/add-course-details-arts" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Arts and Science</Link></li>
              <li><Link to="admin/add-course-details-agri" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Agriculture</Link></li>
              <li><Link to="admin/add-course-details-med" className="sidebar-sub-link"><FaBook className="sidebar-sub-icon" /> Medicine</Link></li>
            </ul>
          )}
        </li>
        {/* <li><Link to="admin/students-list" className="sidebar-main-link"><FaUserGraduate className="sidebar-icon" /> Students List</Link></li>
        <li><Link to="admin/courses-list" className="sidebar-main-link"><FaChalkboardTeacher className="sidebar-icon" /> Courses List</Link></li>
        <li><Link to="admin/edit-course" className="sidebar-main-link"><FaEdit className="sidebar-icon" /> Edit Course</Link></li>
        <li><Link to="admin/remove-course" className="sidebar-main-link"><FaTrashAlt className="sidebar-icon" /> Remove Course</Link></li> */}
        <li><Link to="admin/contact" className="sidebar-main-link"><FaCommentAlt className="sidebar-icon" /> User Support</Link></li>
        <li><Link to="/" className="sidebar-main-link"><FaSignOutAlt className="sidebar-icon" /> Logout</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
