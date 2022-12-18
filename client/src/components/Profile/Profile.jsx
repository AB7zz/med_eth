import React from 'react'
import './fontawesome-all.min.css'
import './Profile.css'
import './noscript.css'

const Profile = () => {
  return (
    <>
    <div id="page-wrapper">

     
                <header id="header">
                    <h1 id="logo"><a href="index.html">Med_ETH</a></h1>
                    <nav id="nav">
                        <ul>
                            <li className="current"><a href="index.html">Home</a></li>
                            <li className="submenu">
                                <a href="#">Login</a>
                                <a href="left-sidebar.html">User</a>
                                <a href="right-sidebar.html">Medical proffessional</a>
                                <a>About</a>
                                <a href="">How it works?</a>
                            </li>
                            
                        </ul>
                    </nav>
                </header>

            
                <article id="main">

                    
                        <section className="wrapper style4 container">

                            <div className="row gtr-150">

                                <section style={{marginRight: '400px'}} className="col-md-6">
                                    <header>
                                    </header>
                                    <footer>
                                        <ul className="buttons">
                                            <li><a href="#" className="button small">Upload</a></li>
                                        </ul>
                                    </footer>
                                </section>

                                <section className="col-md-6">
                                    <header>
                                    </header>
                                    <footer>
                                        <ul className="buttons">
                                            <li><a href="#" className="button small">View</a></li>
                                        </ul>
                                    </footer>
                                </section>
                            </div>
                        </section>

                    

                </article>

            
                <footer id="footer">

                    <ul className="icons">
                        <li><a href="#" className="icon brands circle fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="#" className="icon brands circle fa-facebook-f"><span className="label">Facebook</span></a></li>
                        <li><a href="#" className="icon brands circle fa-google-plus-g"><span className="label">Google+</span></a></li>
                        <li><a href="#" className="icon brands circle fa-github"><span className="label">Github</span></a></li>
                        <li><a href="#" className="icon brands circle fa-dribbble"><span className="label">Dribbble</span></a></li>
                    </ul>

                    <ul className="copyright"> <a href="http://html5up.net"></a>
                    </ul>

                </footer>

        </div>

       
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/jquery.dropotron.min.js"></script>
            <script src="assets/js/jquery.scrolly.min.js"></script>
            <script src="assets/js/jquery.scrollgress.min.js"></script>
            <script src="assets/js/jquery.scrollex.min.js"></script>
            <script src="assets/js/browser.min.js"></script>
            <script src="assets/js/breakpoints.min.js"></script>
            <script src="assets/js/util.js"></script>
            <script src="assets/js/main.js"></script>
            </>
  )
}


export default Profile