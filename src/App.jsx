import { Navbar } from "./components/navbar";
import { Routes, Route } from "react-router-dom"

//method-2
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Skills from "./components/pages/skills";
import Contact from "./components/pages/contact";
import Notfound from "./components/notfound"
import Form1 from "./components/pages/form1";
import Form2 from "./components/pages/form2";
import Userlist from "./components/pages/userlist";
import Userdetails from "./components/pages/userdetails";
import Register from "./components/pages/register";


export default function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="userlist" element={<Userlist />} />
          <Route path="userlist/:id" element={<Userdetails />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>

      {/*  <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>

         // to display child with parent(index prop) 
          <Route index element={<Form1 />} /> 

          <Route path="details" element={<Form1 />} />
          <Route path="address" element={<Form2 />} />
        </Route>
        <Route path="/skills" element={<Skills />} />
      </Routes> */}

    </>
  );
}



//   {
//     path: '/',
//     element: <Router />,
//     errorElement: <Notfound />
//   },

//   {
//     path: '/login',
//     element: <Dhinesh />
//   },

//   {
//     path: '/api',
//     element: <FetchUser />
//   }
// ])

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default 

