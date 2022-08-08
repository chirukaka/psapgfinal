<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="indian.aspx.vb" Inherits="regform.indian" %>

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
               
                <a class="navbar-brand"><img src="assets/img/PSA PG logo.png" alt="" style=" width: 19%;"></a>
               
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
                            
                            <h2 class="head-title">Payment</h2>
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
                    <img src="assets/img/rupee.jpg" alt="" id="login_img">
                </div>
                <div class="signup-form">
                    <form method="POST" class="register-form" id="register-form">
                        <%--<h2 class="reg">Payment To Be Made Through</h2>--%>
                        
                       
                        <div class="form-group">
                            <label>&nbsp</label>
                            
                                                </div>

                       
                        <div class="form-group">
                            <%--<label for="pincode">PassWord :</label>
                            <input type="text" name="password" id="password">--%>
                            <h6 id="fillname">Hello [FName] [LName]</h6><h6> 
                                Now that you have done the registration for the PSA Photo Gathering 2023 being organized at Jaisalmer, India, you will have to click the payment button. You will then be redirected to the Payment Gateway. Follow the onscreen instructions and make your payment. 
                                As and when your payment is received you will receive a payment confirmation email.</h6>
                        </div>
                       
                        <div class="form-submit">
                            <%--<input type="submit" value="Forget Password" class="submit" name="reset" id="reset" />--%>
                            <input type="submit" value="Razorpay" class="submit" name="submit" id="submit" />
                           
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
    <script src="changename.js"></script>
</body>

</html>
