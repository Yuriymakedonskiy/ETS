import React from 'react'
// import $ from 'jquery';
// import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import ErrorPage from '../src/components/ErrorPage';
// import Vacancies from './components/Vacancies';
// import Contacts from './components/contacts';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  // $(document).on('click', function (e) {
  //   $('<div class="cursor">')
  //     .css({
  //       top: e.clientY,
  //       left: e.clientX
  //     })
  //     .appendTo($(document.body))
  //     .on('animationend webkitAnimationEnd', function (e) {
  //       $(this).remove();
  //     });
  // });


  return (
    <>
      {/* <div className="app"> */}
        <Header/>
        {/* <Link to="/">Home</Link>
         <Link to="/contacts">contacts</Link>
         <Link to="/vacancies">vacancies</Link> */}

        {/* <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contacts" element={ <Contacts/> } />
          <Route path="/vacancies" element={ <Vacancies /> } />
          <Route path="/404" element={<ErrorPage />} />
        </Routes> */}

        <Footer/>
      {/* </div> */}
    </>
  )
}

export default App


// import { Routes, Route, Link } from 'react-router-dom';
// // import Header from './components/Header';
// import Contacts from './components/contacts';
// import Vacancies from './components/Vacancies';
// import ErrorPage from './components/ErrorPage';


// function App() {
//   return (
//     <>
//   {/* <Header/> */}
//   {/* <Header/> */}
//   <Link to="/">Home</Link>
//         <Link to="/contacts">contacts</Link>
//         <Link to="/vacancies">vacancies</Link>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/vacancies" element={<Vacancies />} />
//         <Route path="*" element={<ErrorPage />} />
//       </Routes>
//     </>
//   );
// }
// export default App;
