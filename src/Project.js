import React from "react";
import "./Project.css";
import project from './img/project.png'
import project2 from './img/project2.png'
import project3 from './img/project3.jpg'
import project4 from './img/project4.png'
import project5 from './img/project5.jpg'
import project6 from './img/project6.png'

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          Full Projects cases on GitHub!
        </p>
      </div>
      <div className="container">
        <div className="row">

        <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={project} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Todo List</h5>
                     <h4 className="project__text2"> Add, remove or check a todo. <br/> Programmed in React.</h4>
                     <a href="https://github.com/InbalBu/todolist"
                     className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">ECommerce Website</h5>
                     <h4 className="project__text2"> ECommerce web shop app <br/> using React.js.</h4>
                     <a href="https://github.com/InbalBu/ecommerce" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Library Managment System</h5>
                     <h4 className="project__text2"> Library manager in program  C#, <br/> WPF, using MVVM Architecture.</h4>
                     <a href="https://github.com/InbalBu/Library-Management-System" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Animal Pet Shop</h5>
                     <h4 className="project__text2"> Pet Shop Programmed in ASP.Net, <br/> MVC.</h4>
                     <a href="https://github.com/InbalBu/AnimalPetShop" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={project5} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Recipe Blog</h5>
                     <h4 className="project__text2">programmed in EJS, Express and Mongodb.</h4>
                     <a href="https://github.com/InbalBu/recipeblog" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>

             <div className="col__2">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={project6} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Shoe Store</h5>
                     <h4 className="project__text2">Programmed in React, PayPal, sanity and MongoDB.</h4>
                     <a href="https://github.com/InbalBu/EcommerceApp" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
        
        </div>
      </div>
    </div>
  );
}

export default Project;
