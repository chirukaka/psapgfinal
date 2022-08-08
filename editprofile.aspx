<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="editprofile.aspx.vb" Inherits="regform.editprofile" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.min.css">
    <!-- Icon -->
    <link rel="stylesheet" type="text/css" href="assets/fonts/line-icons.css">
    <!-- Nivo Lightbox -->
    <link rel="stylesheet" type="text/css" href="assets/css/nivo-lightbox.css">
    <!-- Animate -->
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
    <!-- Main Style -->
    <link rel="stylesheet" type="text/css" href="assets/css/main.css">
    <!-- Responsive Style -->
    <link rel="stylesheet" type="text/css" href="assets/css/responsive.css">
    <!-- This link for reg page only  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" type="text/css" href="assets/css/reg.css">

</head>
<body>
    <header id="header-wrap">
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                <a  class="navbar-brand"><img src="assets/img/PSA PG logo.png" alt="" style=" width: 19%;"></a>
                <!--   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="lni-menu"></i>
                  </button> -->
                
            </div>
        </nav>
        <!-- Navbar End -->
        <!-- Hero Area Start -->
        <div id="hero-area" class="hero-area-bg3">
            <div class="overlay"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-9 col-sm-12">
                        <div class="contents text-center">
                            <!-- <div class="icon">
                              <i class="lni-mic"></i>
                            </div> -->
                            <!--   <p class="banner-info">15, Oct 2020 - Maria Hall, NY, United states</p> -->
                            <h2 class="head-title">Edit Profile</h2>
                            <p class="banner-desc" style="font-size:39px;">2023 PSA Photo Gathering</p>

                            <div class="banner-btn">
                                <!--  <a href="#" class="btn btn-common">Get Ticket</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero Area End -->
    <form id="form1" runat="server">
        <div class="main">
            <div class="container">
            <div class="signup-content">
                <div class="signup-img">
                    <img src="assets/img/c2.jpg" alt="" id="reg_img">
                </div>
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                        <%--<h2 class="reg"> Register For Photo Gathering</h2>--%>
                        <%--<div class="form-group">
                            <label for="address">Registration No :</label>
                            <input type="number" name="regno" id="regno"  required />
                            
                        </div>--%>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">First Name :</label>
                                <input type="text" name="name" id="name" required />
                            </div>
                            <div class="form-group">
                                <label for="father_name">Last Name :</label>
                                <input type="text" name="father_name" id="father_name" required />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="email">Email ID :</label>
                            <input type="email" name="email" id="email" onkeyup='emailcheck();'/>
                            
                        </div>

                                              
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="father_name">Hotel :</label>
                           
                                <div class="form-select">
                                <select name="country" id="hotel">
                                    <option value="">Choose Hotel</option>
                                    <option value="Neelam">Neelam</option>
                                    <option value="Mrigaya">Mrigaya</option>
                                    <option value="Ruby">Ruby</option>
                                </select>
                                <span class="select-icon"><i class="fa fa-sort-desc"></i></span>
                            </div>
                            </div>
                            <div class="form-group">
                                <label for="father_name">Room No :</label>
                                <input type="text" name="address" id="rno" required />
                            </div>
                            
                        </div>

                        
                        <div class="form-group">
                            <label for="pincode">Indian Phone No :</label>
                            <input type="text" name="phoneno" id="phoneno">
                            
                        </div>
                        <div class="form-group">
                            <label for="pincode">Mode of Transport :</label>
                            <input type="text" name="transport" id="transport">
                            
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="father_name">Date of Arrival</label>
                                <input type="date" name="date" id="date" required />
                            </div>
                            <div class="form-group">
                                <label for="father_name">Time of Arrival :</label>
                                <input type="time" name="time" id="time" required />
                            </div>
                            
                        </div>
                         <div class="form-group">
                            <label for="pincode">Any health conditions you want organisers to be aware of:</label>
                            <textarea type="text" name="health" id="health"></textarea>
                            <span id="message"></span>
                        </div>                      
                        <div class="form-submit">
                            <input type="submit" value="Cancel" class="submit " name="reset" id="reset" onclick="redirect()"/>
                            <input type="button" value="Update" class="submit saverecord" name="submit" id="submit"/>
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </form>
    <footer>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 col-md-12 col-xs-12">
                    <div class="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
                        <h2 class="subscribe-title">Photographic Society of America</h2>
                        <!--  <form class="text-center form-inline">
                           <input class="mb-20 form-control" name="email" placeholder="Enter Your Email Here">
                           <button type="submit" class="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit" id="submit">
                             <span class="ladda-label"><i class="lni-check-box"></i> Subscribe</span>
                           </button>
                         </form> -->
                    </div>
                    <div class="footer-logo">
                        <!-- <img src="assets/img/logo.png" alt=""> -->
                        <p>Photo Trip</p>
                    </div>
                    <div class="social-icons-footer">
                        <ul>
                            <li class="facebook"><a target="_blank" href="3"><i class="lni-facebook-filled"></i></a></li>
                            <li class="twitter"><a target="_blank" href="3"><i class="lni-twitter-filled"></i></a></li>
                            <li class="pinterest"><a target="_blank" href="3"><i class="lni-pinterest"></i></a></li>
                        </ul>
                    </div>
                    <div class="site-info">
                        <p>Designed and Developed by <a href="https://fotosalons.in/" rel="nofollow">FotoSalons</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Go to Top Link -->
    <a href="#" class="back-to-top">
        <i class="lni-chevron-up"></i>
    </a>

    <div id="preloader">
        <div class="sk-circle">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>
    </div>


    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="assets/js/jquery-min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/jquery.countdown.min.js"></script>
    <script src="assets/js/waypoints.min.js"></script>
    <script src="assets/js/jquery.counterup.min.js"></script>
    <script src="assets/js/jquery.nav.js"></script>
    <script src="assets/js/jquery.easing.min.js"></script>
    <script src="assets/js/wow.js"></script>
    <script src="assets/js/nivo-lightbox.js"></script>

    <script src="assets/js/main.js"></script>
        <script src="editprofile.js"></script>
</body>
</html>

