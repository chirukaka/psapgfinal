<%@ Page Language="vb" AutoEventWireup="false" CodeBehind="iframe.aspx.vb" Inherits="regform.iframe" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
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
    <form id="form1" runat="server">
        <div class="row">
            <div class="col-md-12">
            <iframe id="frame" frameborder="0" src="https://expertsfotosalons.wixsite.com/psapg/post-login"  title="">
            </iframe>
                <%--<input type="button" value="Edit Profile" class="log_check submit" style="float:right;" name="submit" id="submit" />--%>
            </div>
        </div>
        <div class="row">
             <input type="button" value="Edit Profile" class="edit_check submit" style="float:right;" name="submit" id="submit" onclick="redirect()" />
        </div>
    </form>
        <script src="assets/js/jquery-min.js"></script>
           <script type="text/javascript">

               $(document).ready(function () {
                   var r = document.cookie;
                   try {
                       if (r === " " || r.length === 0) {

                           window.location.href = "login.aspx";
                           throw new Error('Can not login');
                       }
                        //user-defined throw statement.  
                   }
                   catch (e) {
                       document.write(e.message);
                       window.location.href = "login.aspx";
                   }
                   
               });
          
               function redirect() {
                   window.location.href = "editprofile.aspx";
               }
                  
           </script>
</body>
</html>
