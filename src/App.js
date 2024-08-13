// import React from 'react';
// import './App.css';
// import Login from './Login'
// import Navbar from './Navbar';
// import Footer from './Footer';
// import Homepage from './HomePage';
// import Signup from './up';
// import Agriculture from './Agriculture';
// import ArtsAndScience from './Artsandscience';

// import Medicine from './Medicine';
// import Engineering from './Engineering';
// import AdminDashboard from './AdminDashboard';
// function App() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//       {/* <Login/> */}
//       {/* <Homepage/> */}
//       {/* <Signup/> */}
//       {/* <Agriculture/> */}
//       {/* <ArtsAndScience/> */}
//       {/* <Engineering/> */}
//       {/* <Medicine/> */}
//       {/* <Footer/> */}
//       <AdminDashboard/>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Engineering from './Engineering';

// import EngineeringDetails from './EngineeringDetails';
// import Agriculture from './Agriculture';
// import AgricultureDetails from './AgricultureDetails';
// import ArtsAndScienceDetails from './ArtsandscienceDetails';
// import ArtsAndScience from './Artsandscience';
// import Medicine from './Medicine';
// import MedicineDetails from './MedicineDetails';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/" element={<Agriculture/>} />
//         <Route path="/agriculture/:id" element={<AgricultureDetails/>} /> */}
//         {/* <Route path="/" element={<ArtsAndScience/>} />
//         <Route path="/artsandscience/:id" element={<ArtsAndScienceDetails/>} /> */}
//         {/* <Route path="/" element={<Engineering/>} />
//         <Route path="/engineering/:id" element={<EngineeringDetails/>} /> */}
//         {/* <Route path="/" element={<Medicine/>} />
//         <Route path="/medicine/:id" element={<MedicineDetails/>} /> */}


//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './up'; 
import Homepage from './HomePage';
import Agriculture from './Agriculture';
import Footer from './Footer';
import Main from './Main';
import ArtsAndScience from './Artsandscience';
import ArtsAndScienceDetails from './ArtsandscienceDetails';
import EngineeringDetails from './EngineeringDetails';
import Engineering from './Engineering';
import Medicine from './Medicine';
import AgricultureDetails from './AgricultureDetails';
import MedicineDetails from './MedicineDetails';
import ContactUs from './ContactUs';

const App = () => {
  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith('/admin') && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Login />} />
        <Route path="/loginnav" element={<Login />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/loginlink" element={<Login />} />
        <Route path="/loginbtn" element={<Homepage />} />
        <Route path="/signuplink" element={<Signup />} />
        <Route path="/agriculture" element={<Agriculture/>} />
        <Route path="/agriculture/:id" element={<AgricultureDetails/>}/>
        <Route path="/arts" element={<ArtsAndScience/>} />
        <Route path="/artsandscience/:id" element={<ArtsAndScienceDetails/>}/>
        <Route path="/engineering" element={<Engineering/>} />
        <Route path="/engineering/:id" element={<EngineeringDetails/>} />
        <Route path="/medicine" element={<Medicine/>} />
        <Route path="/medicine/:id" element={<MedicineDetails/>} />
        <Route path="/logout" element={<Login/>} />
        

        <Route path="/admin/*" element={<Main />} />
      </Routes>
      {!location.pathname.startsWith('/admin') && <Footer />}
    </>
  );
};

const AppRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppRouter;













