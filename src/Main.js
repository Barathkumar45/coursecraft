import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import StudentsList from './StudentsList';
import AddCourseeng from './AddCourseeng';
import AddCoursearts from './AddCoursearts';
import AddCourseagri from './AddCourseagri';
import AddCoursemed from './AddCoursemed';
import AgriDetailsForm from './AgriDetailsForm';
import EngDetailsForm from './EngDetailsForm';
import ArtsDetailsForm from './ArtsDetailsForm';
import MedDetailsForm from './MedDetailsForm';
import AdminContact from './AdminContact';
import Login from './Login';




const Main = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="admin/dash" element={<Dashboard />} />
        <Route path="admin/add-courseeng" element={<AddCourseeng />} /> 
        <Route path="admin/add-coursearts" element={<AddCoursearts/>} /> 
        <Route path="admin/add-courseagri" element={<AddCourseagri />} /> 
        <Route path="admin/add-coursemed" element={<AddCoursemed />} /> 
        <Route path="admin/students-list" element={<StudentsList />} />
        <Route path="admin/add-course-details-agri" element={<AgriDetailsForm/>} />
        <Route path="admin/add-course-details-eng" element={<EngDetailsForm/>} />
        <Route path="admin/add-course-details-arts" element={<ArtsDetailsForm/>} />
        <Route path="admin/add-course-details-med" element={<MedDetailsForm/>} />
        <Route path="/" element={<Login/>} />
        <Route path="admin/contact" element={<AdminContact/>} />
      </Routes>
    </>
  );
};

export default Main;
