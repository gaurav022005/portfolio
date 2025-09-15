import { useState, useRef, useEffect } from 'react'
import './App.css'
import Typed from 'typed.js'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from "@emailjs/browser"
import { ToastContainer, toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import profile from "./assets/profile.jpg";

function App() {
  const el = React.useRef(null);
  const el2 = React.useRef(null);
  const [isLight, setIsLight] = useState(false)
  const form = useRef()
  const move = useRef()

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
  }, [isLight])


  useEffect(() => {
    Aos.init({ duration: 1000, once: false })
  }, [])


  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full Stack Developer', 'UI/UX Designer', 'Freelancer'],
      typeSpeed: 50,
      backDelay: 2000,
      startDelay: 1000,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  React.useEffect(() => {
    const typed = new Typed(el2.current, {
      strings: ['Gaurav Vaishnav'],
      typeSpeed: 25,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5u0c78u', 'template_u7ygxn9', form.current, {
        publicKey: 'OhsbpQQfoi-5o6lyu',
      })
      .then(
        () => {
          toast.success('Email Sent Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          })
          toast.success('We will reach you as soon as possible!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          })
          form.current.reset()
        },
        (error) => {
          toast.error('Email Sending Fail! Try after some time', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        },
      );
  };

  const moveLeft = () => {
    move.current.style.right = "0%"
    move.current.style.opacity = "1"
  }

  const moveRight = () => {
    move.current.style.right = "-100%"
    move.current.style.opacity = "0"
  }

  return (

    <>
      <div className='overflow-x-hidden'>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <div className='relative bg-bc1 transition-all duration-500'>

          {/* HEADER -------------------------------------------------------------------*/}

          <header className='fixed w-screen top-0 bg-bc1 transition-colors duration-500 flex items-center justify-between px-10 xl:px-30 h-[120px] text-bc2 z-50'>
            <h1 className='xl:text-3xl text-2xl font-bold'><span className='text-primary font-extrabold'>&lt;</span> Gaurav <span className='text-primary'>Vaishnav <span className='text-bc2 font-extrabold text-shadow-none'>/&gt;</span></span></h1>
            <nav className='xl:flex hidden justify-around items-center gap-15'>
              <ul className='flex justify-around items-center gap-10 font-bold text-bc2'>
                <li><Link onClick={moveRight} to="home" spy={true} className='navlink' offset={-150} >Home</Link></li>
                <li><Link onClick={moveRight} to="about" spy={true} className='navlink' offset={-100} >About</Link></li>
                <li><Link onClick={moveRight} to="skills" spy={true} className='navlink' offset={-35} >Skills</Link></li>
                <li><Link onClick={moveRight} to="projects" spy={true} className='navlink' offset={-35} >Projects</Link></li>
                <li><Link onClick={moveRight} to="services" spy={true} className='navlink' offset={-5} >Services</Link></li>
                <li><Link onClick={moveRight} to="contact" spy={true} className='navlink' offset={-50} >Contact</Link></li>
              </ul>
              <label className='relative inline-block w-16 h-8 cursor-pointer mb-2'>
                <input onClick={() => setIsLight(!isLight)} type="checkbox" className='opacity-0 w-0 h-0 peer' />
                <span className='absolute flex justify-center items-center left-[-3px] top-0.5 h-7 w-7 rounded-full transition border-2 border-bc2 bg-bc1 duration-500 translate-x-9.5 peer-checked:translate-x-1.5 z-30'>
                </span>
                <span className='absolute transition duration-500 inset-0 rounded-full bg-bc2 flex items-center justify-around'>
                  <i className="fa-solid fa-sun-bright text-black text-[12px] z-40 peer-checked:text-white"></i>
                  <i className="fa-solid fa-moon text-white peer-checked:text-black text-[12px] z-40"></i>
                </span>
              </label>
            </nav>
            <div className='xl:hidden block'>
              <div>
                <i onClick={moveLeft} className="relative fa-solid fa-bars scale-150"></i>
              </div>
              <div ref={move} className='absolute flex flex-col items-center justify-center h-screen w-screen top-0 bg-bc1 transition-all duration-1000 right-[-100%] z-100 opacity-0'>
                <ul className='relative flex flex-col h-full w-full justify-evenly items-center font-bold text-bc2'>
                  <i onClick={moveRight} className='absolute scale-150 fa-solid fa-xmark top-10 right-10'></i>
                  <li><Link onClick={moveRight} to="home" spy={true} offset={-150} >Home</Link></li>
                  <li><Link onClick={moveRight} to="about" spy={true} offset={-100} >About</Link></li>
                  <li><Link onClick={moveRight} to="skills" spy={true} offset={-35} >Skills</Link></li>
                  <li><Link onClick={moveRight} to="projects" spy={true} offset={-35} >Projects</Link></li>
                  <li><Link onClick={moveRight} to="services" spy={true} offset={-5} >Services</Link></li>
                  <li><Link onClick={moveRight} to="contact" spy={true} offset={-50} >Contact</Link></li>
                  <label className='relative inline-block w-16 h-8 cursor-pointer mb-2'>
                    <input onClick={() => setIsLight(!isLight)} type="checkbox" className='opacity-0 w-0 h-0 peer' />
                    <span className='absolute flex justify-center items-center left-[-3px] top-0.5 h-7 w-7 rounded-full transition border-2 border-bc2 bg-bc1 duration-500 translate-x-9.5 peer-checked:translate-x-1.5 z-30'>
                    </span>
                    <span className='absolute transition duration-500 inset-0 rounded-full bg-bc2 flex items-center justify-around'>
                      <i className="fa-solid fa-sun-bright text-black text-[12px] z-40 peer-checked:text-white"></i>
                      <i className="fa-solid fa-moon text-white peer-checked:text-black text-[12px] z-40"></i>
                    </span>
                  </label>
                </ul>
              </div>
            </div>
          </header>

          {/* MAIN ----------------------------------------------------------------------*/}

          <main className=''>

            {/* HOME --------------------------------------------------------------------*/}

            <section id='home' className='xl:mt-10 min-h-screen text-bc2 font-bold items-center flex xl:flex-row flex-col-reverse xl:justify-around justify-center xl:w-4/5 w-screen m-auto pt-40 xl:pt-20 xl:gap-0 gap-20 mt-0'>
              <div className='flex flex-col xl:items-start items-center gap-3 w-140'>
                <h1 className='text-2xl' data-aos="fade-right" data-aos-delay="100">Hi There , I Am</h1>
                <span className='text-5xl text-primary mt-2 ml-[-4px]' ref={el2} data-aos="fade-right" data-aos-delay="200"></span>
                <div data-aos="fade-right" data-aos-delay="300" >
                  <span className='text-4xl' ref={el}></span>
                </div>
                <div className='flex font-bold gap-8 mt-3' data-aos="fade-right" data-aos-delay="400">
                  <Link to="contact" spy={true} offset={-50} ><button className='cursor-pointer rounded-lg text-bc1 w-25 h-11 bg-primary border-2 border-primary hover:bg-bc1 hover:text-primary transition-all duration-200'>Hire Me</button></Link>
                  <a href="https://wa.me/917660966537?text=Hello%20Gaurav,%0AI%20would%20like%20to%20hire%20you%20for%20a%20website%20project.%20Can%20we%20talk%20about%20the%20requirements?" target="_blank" rel="noopener noreferrer"><button className='cursor-pointer border-2 border-primary rounded-lg w-25 h-11 text-primary hover:bg-primary hover:text-bc1 transition-all duration-200'>Let's Talk</button></a>
                </div>
                <div className='social-media flex mt-5 items-center gap-10' data-aos="fade-right" data-aos-delay="500">
                  <a href="https://github.com/gaurav022005" target='_blank'>
                    <lord-icon class={'cursor-pointer w-7'}
                      src="https://cdn.lordicon.com/lllcnxva.json"
                      trigger="hover"
                      colors="primary:#ffffff,secondary:#000000,tertiary:#ffffff">
                    </lord-icon>
                  </a>
                  <lord-icon class={'cursor-pointer w-7'}
                    src="https://cdn.lordicon.com/gnqwqcgx.json"
                    trigger="hover"
                    colors="primary:#ffffff,secondary:#ffffff,tertiary:#000000">
                  </lord-icon>
                  <a href="https://www.instagram.com/gaurav_vaishnav02/" target='_blank'>
                    <lord-icon class={'cursor-pointer w-7'}
                      src="https://cdn.lordicon.com/dbugezxr.json"
                      trigger="hover"
                      colors="primary:#ffffff,secondary:#ffffff,tertiary:#ffffff,quaternary:#ffffff,quinary:#ffffff">
                    </lord-icon>
                  </a>
                  <lord-icon class={'cursor-pointer w-7'}
                    src="https://cdn.lordicon.com/guvfanks.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#ffffff,tertiary:#000000">
                  </lord-icon>
                  <a href="https://www.linkedin.com/in/gaurav-vaishnav-722358357/" target='_blank'>
                    <lord-icon class={'cursor-pointer w-7'}
                      src="https://cdn.lordicon.com/qjbuypqy.json"
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#ffffff,secondary:#ffffff,tertiary:#000000">
                    </lord-icon>
                  </a>
                </div>
              </div>
              <div className='xl:w-100 lg:w-100 md:w-100 xl:h-100 lg:h-100 md:h-100 profile overflow-hidden rounded-full flex justify-center items-center h-80 w-80' data-aos="zoom-in" data-aos-delay="600">
                <img className='object-cover object-top h-full w-full' src={profile} alt="img" />
              </div>
            </section>

            {/* ABOUT -------------------------------------------------------------------*/}

            <section id='about' className='flex flex-col m-auto min-h-screen font-bold pt-20 gap-20'>
              <h1 className='xl:mb-0 text-bc2 text-4xl mx-auto ul mb-10'>About Me</h1>
              <div className='xl:flex-row xl:gap-0 flex flex-col gap-20 justify-around items-center'>
                <div className='relative'>
                  <div className='xl:w-100 lg:w-100 md:w-100 xl:h-100 lg:h-100 md:h-100 overflow-hidden flex justify-center items-center h-80 w-80 '>
                    <img className='object-cover object-top h-full w-full z-20 border-2 border-txt2' src={profile} alt="img" />
                    <div className='xl:w-100 lg:w-100 md:w-100 xl:h-100 lg:h-100 md:h-100 absolute w-80 h-80 border-2 border-txt2  translate-[-50px]  bg-[#151515] box'></div>
                  </div>
                </div>
                <div className='flex flex-col items-center gap-20 w-1/2'>
                  <div className='xl:w-5/6 text-txt1 flex flex-col gap-5 w-full items-center'>
                    <h1 className='text-bc2 text-3xl'>I'm <span className='text-primary'>Gaurav Vaishnav</span></h1>
                    <p className='xl:w-[100%] w-[150%] font-semibold'>A curious and creative B.Tech Computer Science student with a deep interest in web development, UI/UX design, and all things tech.I specialize in building responsive, user-friendly websites using modern technologies.I believe that great design and clean code go hand in hand. I'm always excited to explore new tools, frameworks, and creative ideas that enhance user experience and bring digital concepts to life.
                    </p>
                  </div>
                  <div className='xl:w-full text-bc2 flex flex-wrap gap-5 justify-around items-center w-[90vw]'>
                    <div className='bg-secondary rounded-4xl h-70 w-110 flex flex-col p-7 gap-7 px-15 items-center border-2 border-txt2'>
                      <h1 className='flex gap-5 items-center text-xl justify-center'><i className="fa-regular fa-user-graduate text-primary text-2xl"></i>Education</h1>
                      <p className='text-txt1 font-semibold'>Holy Mary Institute Of Technology And Science</p>
                    </div>
                    <div className='xl:p-7 lg:p-7 md:p-7 bg-secondary rounded-4xl h-70 w-110 flex flex-col p-1 pt-10 gap-10 items-center border-2 border-txt2'>
                      <h1 className='flex gap-5 items-center text-xl justify-center'><i className="fa-solid fa-code text-primary text-2xl"></i>Skills</h1>
                      <ul className='font-bold flex flex-wrap gap-2 text-bc1 text-[12px] justify-center items-center'>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>HTML</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>CSS</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>JavaScript</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>React.Js</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>Node.JS</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>Express.JS</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>Next.JS</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>MySQL</li>
                        <li className='bg-gradient-to-r from-primary to-gra rounded-full flex justify-center items-center p-2 w-24'>MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SKILLS ------------------------------------------------------------------*/}

            <section id='skills' className='flex flex-col m-auto min-h-screen font-bold pt-20 gap-20'>
              <h1 className='text-bc2 text-4xl mx-auto ul'>My Skills</h1>
              <div className='xl:gap-0 flex flex-wrap gap-40 items-center justify-around px-10'>
                <div className='flex flex-col gap-15'>
                  <h1 className='text-bc2 text-3xl'>Technical <span className='text-primary'>Skills</span></h1>
                  <ul className='text-bc2 flex flex-col gap-10'>
                    <div className=' flex flex-col gap-4'>
                      <li className='flex gap-7'><i className="fa-brands fa-html5 text-[#f16b31] text-3xl"></i>HTML</li>
                      <div className='xl:w-100 lg:w-100 md:w-100 text-bc2 relative h-1.5 w-75 bg-txt2 rounded-full progress-line'>
                        <span className='absolute text-sm h-full w-[95%] bg-primary rounded-full after:content-["95%"] after:absolute after:top-[-37px] after:right-[-20px]'></span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <li className='flex gap-7'><i className="fa-brands fa-css3-alt text-[#1572b6] text-3xl"></i>CSS</li>
                      <div className='xl:w-100 lg:w-100 md:w-100 text-bc2 relative h-1.5 w-75 bg-txt2 rounded-full progress-line'>
                        <span className='absolute text-sm h-full w-[75%] bg-primary rounded-full after:content-["75%"] after:absolute after:top-[-37px] after:right-[-20px]'></span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <li className='flex gap-7'><i className="fa-brands fa-square-js text-[#fdd942] text-3xl"></i>JavaScript</li>
                      <div className='xl:w-100 lg:w-100 md:w-100 text-bc2 relative h-1.5 w-75 bg-txt2 rounded-full progress-line'>
                        <span className='absolute text-sm h-full w-[85%] bg-primary rounded-full after:content-["85%"] after:absolute after:top-[-37px] after:right-[-20px]'></span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <li className='flex gap-7'><i className="fa-brands fa-react text-[#66dbfb] text-3xl"></i>React.Js</li>
                      <div className='xl:w-100 lg:w-100 md:w-100 text-bc2 relative h-1.5 w-75 bg-txt2 rounded-full progress-line'>
                        <span className='absolute text-sm h-full w-[65%] bg-primary rounded-full after:content-["65%"] after:absolute after:top-[-37px] after:right-[-20px]'></span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                      <li className='flex gap-7'><i className="fa-brands fa-node text-[#7aaf69] text-3xl"></i>Node.Js</li>
                      <div className='xl:w-100 lg:w-100 md:w-100 text-bc2 relative h-1.5 w-75 bg-txt2 rounded-full progress-line'>
                        <span className='absolute text-sm h-full w-[50%] bg-primary rounded-full after:content-["50%"] after:absolute after:top-[-37px] after:right-[-20px]'></span>
                      </div>
                    </div>
                  </ul>
                </div>
                <div className='flex flex-col gap-15 items-center w-150'>
                  <h1 className='text-bc2 text-3xl'>Professional <span className='text-primary'>Skills</span></h1>
                  <div className='xl:gap-20 flex flex-wrap gap-5 items-center justify-center'>
                    <div className='flex text-bc2'>
                      <div className="flex flex-col items-center gap-2">
                        <div className='relative'>
                          <svg className="fill-txt2 w-50 h-40" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-txt2 stroke-[10]" />
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-primary stroke-[10] [stroke-dasharray:502] [stroke-dashoffset:50] [stroke-linecap:round] rotate-[-90deg] origin-center" />
                          </svg>
                          <div className="text-bc2 text-xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">90 %</div>
                        </div>
                        <div className="text-bc2">Creativity</div>
                      </div>
                    </div>
                    <div className='flex flex-wrap text-bc2'>
                      <div className="flex flex-col items-center gap-2">
                        <div className='relative'>
                          <svg className="fill-txt2 w-50 h-40" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-txt2 stroke-[10]" />
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-primary stroke-[10] [stroke-dasharray:502] [stroke-dashoffset:175] [stroke-linecap:round] rotate-[-90deg] origin-center" />
                          </svg>
                          <div className="text-bc2 text-xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">65 %</div>
                        </div>
                        <div className="text-bc2">Communication</div>
                      </div>
                    </div>
                    <div className='flex flex-wrap text-bc2'>
                      <div className="flex flex-col items-center gap-2">
                        <div className='relative'>
                          <svg className="fill-txt2 w-50 h-40" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-txt2 stroke-[10]" />
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-primary stroke-[10] [stroke-dasharray:502] [stroke-dashoffset:125] [stroke-linecap:round] rotate-[-90deg] origin-center" />
                          </svg>
                          <div className="text-bc2 text-xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">75 %</div>
                        </div>
                        <div className="text-bc2">Problem Solving</div>
                      </div>
                    </div>
                    <div className='flex flex-wrap text-bc2'>
                      <div className="flex flex-col items-center gap-2">
                        <div className='relative'>
                          <svg className="fill-txt2 w-50 h-40" viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-txt2 stroke-[10]" />
                            <circle cx="100" cy="100" r="80" className="fill-transparent stroke-primary stroke-[10] [stroke-dasharray:502] [stroke-dashoffset:75] [stroke-linecap:round] rotate-[-90deg] origin-center" />
                          </svg>
                          <div className="text-bc2 text-xl font-semibold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">85 %</div>
                        </div>
                        <div className="text-bc2">Team Work</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* PROJECTS ---------------------------------------------------------------*/}

            <section id='projects' className='flex flex-col m-auto min-h-screen font-bold pt-20 gap-30 items-center justify-center'>
              <h1 className='text-bc2 text-4xl mx-auto ul'>My Projects</h1>
              <div className="flex flex-wrap gap-15 items-center justify-center">
                <div className='group flex flex-col gap-5 overflow-hidden rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.25)] w-[400px] h-[550px] cursor-pointer'>
                  <img className='w-full h-[250px] duration-300 group-hover:scale-105' src={one} alt="img" />
                  <h1 className='text-center text-xl text-bc2'>Password Manager</h1>
                  <p className='text-txt1 p-5'>A secure and user-friendly application to store and manage passwords. It features strong encryption, intuitive UI, and easy retrieval, ensuring data privacy while reducing the hassle of remembering multiple passwords.</p>
                </div>
                <div className='group flex flex-col gap-5 overflow-hidden rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.25)] w-[400px] h-[550px] cursor-pointer'>
                  <img className='w-full h-[250px] duration-300 group-hover:scale-105' src={two} alt="img" />
                  <h1 className='text-center text-xl text-bc2'>College Management System</h1>
                  <p className='text-txt1 p-5'>A web-based system designed to streamline academic operations such as student registration, attendance tracking, course management, and faculty handling. It provides an organized dashboard for students, teachers, and admins to improve efficiency and accessibility.</p>
                </div>
                <div className='group flex flex-col gap-5 overflow-hidden rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.25)] w-[400px] h-[550px] cursor-pointer'>
                  <img className='w-full h-[250px] duration-300 group-hover:scale-105' src={three} alt="img" />
                  <h1 className='text-center text-xl text-bc2'>Spotify Clone</h1>
                  <p className='text-txt1 p-5'>A music streaming web app inspired by Spotify, built with modern UI and dynamic playlist features. Users can explore songs, create playlists, and enjoy a smooth audio playback experience with responsive design and seamless navigation.</p>
                </div>
                <div className='group flex flex-col gap-5 overflow-hidden rounded-2xl shadow-[0_0_20px_0_rgba(0,0,0,0.25)] w-[400px] h-[550px] cursor-pointer'>
                  <img className='w-full h-[250px] duration-300 group-hover:scale-105' src={four} alt="img" />
                  <h1 className='text-center text-xl text-bc2'>Mood Tracker</h1>
                  <p className='text-txt1 p-5'>A simple yet impactful application that helps users monitor their daily moods and emotions. With visual charts and daily logs, it promotes self-awareness and mental well-being by identifying emotional patterns over time.
                  </p>
                </div>
              </div>
            </section>

            {/* SERVICES ---------------------------------------------------------------*/}

            <section id='services' className='flex flex-col mt-30 m-auto min-h-screen font-bold gap-50 items-center justify-center text-bc2'>
              <h1 className='text-4xl mx-auto ul'>My Services</h1>
              <div className='flex flex-wrap gap-20 items-center justify-around w-full'>
                <div className='bg-secondary rounded-4xl h-70 w-110 flex flex-col p-10 gap-10 px-14 border-2 border-txt2 cursor-pointer items-center hover:scale-[1.05] transition-all duration-300'>
                  <h1 className='flex gap-5 items-center text-xl justify-center'><i className="fa-solid fa-code text-primary text-4xl"></i>Web Development</h1>
                  <p className='font-semibold text-txt1'>I build fast, responsive, and SEO-friendly websites using modern tools like React, Tailwind CSS, and Next.js — turning ideas into clean, scalable code.</p>
                  {/* <button className='border-2 border-primary bg-primary text-bc1 rounded-lg p-2 self-end mt-3 mr-[-15px] text-sm hover:bg-secondary hover:text-primary cursor-pointer'>Read More</button> */}
                </div>
                <div className='bg-secondary rounded-4xl h-70 w-110 flex flex-col p-10 gap-10 px-14 border-2 border-txt2 cursor-pointer items-center hover:scale-[1.05] transition-all duration-300'>
                  <h1 className='flex gap-5 items-center text-xl justify-center'><i className="fa-solid fa-palette text-primary text-4xl"></i>UI/UX Designing</h1>
                  <p className='font-semibold text-txt1'>I craft user-friendly, visually appealing interfaces that blend creativity with usability — focusing on intuitive design that enhances user experience.</p>
                  {/* <button className='border-2 border-primary bg-primary text-bc1 rounded-lg p-2 self-end mt-3 mr-[-15px] text-sm hover:bg-secondary hover:text-primary cursor-pointer'>Read More</button> */}
                </div>
                <div className='bg-secondary rounded-4xl h-70 w-110 flex flex-col p-10 gap-10 px-14 border-2 border-txt2 cursor-pointer items-center hover:scale-[1.05] transition-all duration-300'>
                  <h1 className='flex gap-5 items-center text-xl justify-center'><i className="fa-brands fa-android text-primary text-4xl"></i>Android Development</h1>
                  <p className='font-semibold text-txt1'>I develop cross-platform mobile applications with sleek UI and smooth performance — delivering practical solutions powered by modern tech.</p>
                  {/* <button className='border-2 border-primary bg-primary text-bc1 rounded-lg p-2 self-end mt-3 mr-[-15px] text-sm hover:bg-secondary hover:text-primary cursor-pointer'>Read More</button> */}
                </div>
              </div>
            </section>

            {/* CONTACT ---------------------------------------------------------------*/}

            <section id='contact' className='flex flex-col m-auto min-h-screen font-bold pt-20 gap-20 items-center justify-center mt-20 text-bc2'>
              <h1 className='text-bc2 text-4xl mx-auto ul'>Contact Me</h1>
              <div className='flex flex-col items-center justify-around gap-30 w-full'>
                <div className='flex flex-col gap-25 items-center w-full'>
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-bc2 text-3xl'>Have You Any<span className='text-primary'> Question?</span></h1>
                    <h2 className='text-txt1 text-sm'>I'M AT YOUR SERVICE</h2>
                  </div>
                  <ul className='flex flex-wrap gap-20 justify-evenly w-full items-center'>
                    <li className='w-75 flex flex-col items-center justify-center gap-3'><i className="fa-solid fa-phone text-primary text-4xl"></i>Call Me On<a className='text-txt1 hover:underline' href="tel:+917660966537">7660966537</a></li>
                    <li className='w-75 flex flex-col items-center justify-center gap-3'><i className="fa-solid fa-location-dot text-primary text-4xl"></i>Location<span className='text-txt1'>Telangana, India</span></li>
                    <li className='w-75 flex flex-col items-center justify-center gap-3'><i className="fa-solid fa-envelope text-primary text-4xl"></i>Email<a className='text-txt1 hover:underline' href="mailto:gauravvaishnav022005@gmail.com">gauravvaishnav022005@gmail.com</a></li>
                    <li className='w-75 flex flex-col items-center justify-center gap-3'><i className="fa-solid fa-earth-americas text-primary text-4xl"></i>Website<span className='text-txt1'>xyz.com</span></li>
                  </ul>
                </div>
                <div className='flex flex-col justify-center items-center w-full gap-20'>
                  <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-bc2 text-3xl'>Send Me An<span className='text-primary'> Email</span></h1>
                    <h2 className='text-txt1 text-sm'>I'M VERY RESPONSIVE TO MESSAGES</h2>
                  </div>
                  <form ref={form} onSubmit={sendEmail} className='xl:w-3/4 xl:px-0 grid grid-cols-2 px-5 w-full gap-7 gap-y-5 font-semibold'>
                    <input autoComplete='off' name='name' required type="text" placeholder='Name' className='xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 bg-secondary rounded-lg h-15 p-5 border-2 border-txt2 focus:border-primary outline-none transition-all duration-500' />
                    <input autoComplete='off' name='email' required type="email" placeholder='Email' className='xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 bg-secondary rounded-lg h-15 p-5 border-2 border-txt2 focus:border-primary outline-none transition-all duration-500' />
                    <input autoComplete='off' name='subject' required type="text" placeholder='Subject' className='bg-secondary col-span-2 rounded-lg h-15 p-5 border-2 border-txt2 focus:border-primary outline-none transition-all duration-500' />
                    <textarea autoComplete='off' name='message' required placeholder='Message' className='bg-secondary col-span-2 rounded-lg max-h-50 min-h-50 p-5 border-2 border-txt2 focus:border-primary outline-none transition-all duration-500'></textarea>
                    <button type='submit' className='flex justify-around items-center cursor-pointer rounded-lg text-bc1 w-40 h-13 text-sm bg-primary border-2 duration-200 border-primary hover:bg-bc1 hover:text-primary transition-all font-bold' >Send Message<i className="fa-solid fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </section>
          </main>

          {/* FOOTER */}

          <footer className='bg-bc1 mt-[100px] pb-15 w-full p-10 m-auto shadow-[0_-10px_10px_-15px_var(--color-bc2)] flex flex-col justify-between font-semibold transition-all duration-500'>
            <div className='xl:flex-row lg:flex-row xl:items-start lg:items-start md:items-center flex flex-col justify-around items-center gap-25'>
              <div className='text-txt1 w-1/4 flex flex-col gap-7 items-center'>
                <h1 className='xl:w-full text-center w-[300%] text-3xl text-bc2'>Gaurav Vaishnav</h1>
                <p className='xl:w-full lg:w-[150%] md:w-[300%] w-[450%] p-5'>Passionate web developer and B.Tech student exploring front-end technologies. Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. Enjoys building responsive, user-friendly websites and interfaces. Also learning mobile development and backend technologies. Loves turning ideas into real, working digital products.</p>
              </div>
              <div className='flex items-center gap-20'>
                <div className='flex flex-col gap-5'>
                  <h1 className='text-bc2 text-2xl'>Quick Links</h1>
                  <div>
                    <ul className='text-txt1 flex flex-col gap-2 items-start ml-3'>
                      <li><Link onClick={moveRight} to="home" spy={true} className='hover:text-bc2 cursor-pointer' offset={-150}>Home</Link></li>
                      <li><Link onClick={moveRight} to="about" spy={true} className='hover:text-bc2 cursor-pointer' offset={-100}>About</Link></li>
                      <li><Link onClick={moveRight} to="skills" spy={true} className='hover:text-bc2 cursor-pointer' offset={-35}>Skills</Link></li>
                      <li><Link onClick={moveRight} to="projects" spy={true} className='hover:text-bc2 cursor-pointer' offset={-35}>Projects</Link></li>
                      <li><Link onClick={moveRight} to="services" spy={true} className='hover:text-bc2 cursor-pointer' offset={-5}>Services</Link></li>
                      <li><Link onClick={moveRight} to="contact" spy={true} className='hover:text-bc2 cursor-pointer' offset={-50}>Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <h1 className='text-bc2 text-2xl'>Social Media</h1>
                  <ul className='text-txt1 flex flex-col items-start justify-center gap-1.5'>
                    <li>
                      <a className='flex gap-5 hover:text-bc2 cursor-pointer items-center' href="https://github.com/gaurav022005" target='_blank'>
                        <lord-icon class={'social-media cursor-pointer w-7'}
                          src="https://cdn.lordicon.com/lllcnxva.json"
                          trigger="hover"
                          colors="primary:#8e8e8b,secondary:#000000,tertiary:#8e8e8b">
                        </lord-icon>Github
                      </a>
                    </li>
                    <li className='flex gap-5 hover:text-bc2 cursor-pointer items-center'>
                      <lord-icon class={'social-media cursor-pointer w-7'}
                        src="https://cdn.lordicon.com/gnqwqcgx.json"
                        trigger="hover"
                        colors="primary:#8e8e8b,secondary:#8e8e8b,tertiary:#8e8e8b">
                      </lord-icon>Facebook
                    </li>
                    <li>
                      <a className='flex gap-5 hover:text-bc2 cursor-pointer items-center' href="https://www.instagram.com/gaurav_vaishnav02/" target='_blank'>
                        <lord-icon class={'social-media cursor-pointer w-7'}
                          src="https://cdn.lordicon.com/dbugezxr.json"
                          trigger="hover"
                          colors="primary:#8e8e8b,secondary:#8e8e8b,tertiary:#8e8e8b,quaternary:#8e8e8b,quinary:#8e8e8b">
                        </lord-icon>Instagram
                      </a>
                    </li>
                    <li className='flex gap-5 hover:text-bc2 cursor-pointer items-center'>
                      <lord-icon class={'social-media cursor-pointer w-7'}
                        src="https://cdn.lordicon.com/guvfanks.json"
                        trigger="hover"
                        stroke="bold"
                        colors="primary:#8e8e8b,secondary:#8e8e8b,tertiary:#8e8e8b">
                      </lord-icon>Twitter
                    </li>
                    <li>
                      <a className='flex gap-5 hover:text-bc2 cursor-pointer items-center' href="https://www.linkedin.com/in/gaurav-vaishnav-722358357/" target='_blank'>
                        <lord-icon class={'social-media cursor-pointer w-7'}
                          src="https://cdn.lordicon.com/qjbuypqy.json"
                          trigger="hover"
                          stroke="bold"
                          colors="primary:#8e8e8b,secondary:#8e8e8b,tertiary:#8e8e8b">
                        </lord-icon>Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className='text-txt1 text-center mt-30'>Copyright &copy; 2025 By Gaurav Vaishnav | All Right are Reserved</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
