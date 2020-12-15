<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>LNTVHS | Entrance Exam Registration</title>
  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-primary">
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row align-items-center">
              <div class="col-lg-6 d-none d-lg-block"><img class="img-fluid" src="images/backgrounds/deped.jpg"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <img src="images/profile/user.png" class="rounded-cirle mb-2" style="width: 90px;">
                  </div>
                   <div class="text-center" id="msg">
                   </div>
                  <form id="login-form" method="POST">
                    <div class="form-group" id="log-emailDiv">
                      <input type="email" class="form-control form-control-user profi" id="log-email" name="Email" placeholder="Enter Email Address...">
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control form-control-user profi" id="log-pass" name="Password" placeholder="Password">
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck" id="log-showPass">Show Password</label>
                      </div>
                    </div>
                    <a href="#" class="btn btn-primary btn-user btn-block" 
                    id="btn-login">
                      Login
                    </a>
                    <!-- Login notification div -->
                    <div class="text-center pt-3" id="log-notif"></div>
                    <!-- End of Login notification div -->
                    <!-- loading bar div -->
                    <div class="col-md-12 pt-3 text-center" id="loader"><img src="images/backgrounds/loader.gif" style="width: 80px; display: none;"></div>
                    <!-- End of loading bar div -->
                    <hr>
                  </form>
                  <div class="row text-center">
                    <div class="col-sm-6">
                      <a class="small" href="examples/register.php">Register Now!</a>
                    </div>
                    <div class="float-right col-sm-6">
                      <a class="small" href="examples/forgot-password.php">Forgot Password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
 

  <!-- Footer -->
  <footer class="footer pb-3">
    <div class="row text-center">
      <div class="col-lg-6">
        <div class="copyright text-white">
          &copy; 2020 <a href="https://slsuonline.edu.ph" class="font-weight-bold ml-1 text-info" target="_blank">Southern Leyte State University</a>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="text-white">
          Developed by: <a href="#" class="font-weight-bold ml-1 text-info" target="_blank">Grace Ren Pacatang</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>
  <script src="js/functions/login.js"></script>
</body>
</html>
