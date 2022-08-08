<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="admin.aspx.vb" Inherits="regform.admin" %>

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
   <link rel="stylesheet" type="text/css" id="bstable" href="assets/css/fresh-bootstrap-table.css" />
   
</head>
<body>
    <header id="header-wrap">
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
            <div class="container">
               
                <a  class="navbar-brand"><img src="assets/img/PSA PG logo.png" alt="" style=" width: 19%;"></a>
               
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
                            
                            <h2 class="head-title">Admin</h2>
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
            <%--<div class="signup-content">--%>
                <%--<div class="signup-img">
                    <img src="assets/img/bank.jpg" alt="" id="login_img">
                </div>--%>
               <%-- <div class="signup-form">--%>
                    <%--<form method="POST" class="register-form" id="register-form">
                        <h2 class="reg"> Payment Method For Photo Gathering</h2>--%>
                        
                       
                       <%-- <div class="form-group">
                            <div class="table-responsive">
                           <table id="example" class="display" style="width:100%">
                            <thead>
                                <tr>
                                 
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                   
                                </tr>
                            </thead>
                           </table>
                           
                        </div>--%>
                        <table id="fresh-table" class="table" data-show-extended-pagination="true" data-total-not-filtered-field="totalNotFiltered" data-unique-id="ID">
           
                        </table>
                       <span id="msg"></span>
                       
                    <%--</form>--%>
               <%-- </div>--%>
            <%--</div>--%>
        </div>
        </div>
        
    </form>
   

  <!-- Alert Modal content not to delete user -->
        <div id="myModal1" class="modal1">
  <div class="modal-content1">
    <span class="close202" onclick="dnone()">&times;</span>
    <p><b style="color:white">Paid participent cannot be deleted</b></p>
  </div>

</div>

        <!-- The Modal -->
  <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <%--<h5 class="modal-title" id="exampleModalLabel">New message</h5>--%>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <%--<textarea name="editor1" id="ckbody" class="form-control"></textarea>--%>
              <textarea name="ck" id="ckbody" class="form-control"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
         <span id="mailmsg"></span>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="smail">Send message</button>
      </div>
    </div>
  </div>
</div>
  

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
        <script src="admin.js"></script>
      
      <script src="https://cdn.jsdelivr.net/npm/tableexport.jquery.plugin@1.10.21/tableExport.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table/dist/bootstrap-table.min.js"></script>
    <script src="https://unpkg.com/bootstrap-table@1.18.3/dist/extensions/export/bootstrap-table-export.min.js"></script>
   <script src="https://cdn.ckeditor.com/4.19.1/full/ckeditor.js"></script>
   <script type="text/javascript">
       CKEDITOR.replace('editor1');
           
   </script>
</body>

</html>