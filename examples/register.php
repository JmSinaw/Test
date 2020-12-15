<?php 
  header ("Access-Control-Allow-Origin: *");
  header ("Access-Control-Expose-Headers: Content-Length, X-JSON");
  header ("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
  header ("Access-Control-Allow-Headers: *");
 ?>

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
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="../css/sb-admin-2.min.css" rel="stylesheet">
</head>
<body class="bg-gradient-primary">
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row align-items-center">
          <div class="col-lg-5 d-none d-lg-block text-center"><img class="img-fluid" src="../images/backgrounds/logo.jpg"></div>
          <div class="col-lg-7">
            <div class="pl-4 pr-4 pb-5 pt-2">
              <div class="text-center">
                <img class="img-fluid" src="../images/backgrounds/deped.jpg" style="width: 200px;">
                <h1 class="h4 text-gray-900 mb-2">Entrance Exam Registration Form</h1>
              </div>
              <!-- Register notification div -->
              <div class="text-center py-1" id="reg-notif"></div>
              <!-- End of Register notification div -->
              <form method="POST" id="form-reg">
                <!-- Form 1 -->
                <div class="form-group row" id="form-one">
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-firstname" name="Firstname" placeholder="First Name">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-middlename" name="Middle Name" placeholder="Middle Name">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-lastname" name="Last Name" placeholder="Last Name">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn-next">
                      Next
                    </a>
                  </div>
                </div>
                <!-- End Form 1 -->
                <!-- Form 2 -->
                <div class="form-group row" id="form-two" style="display: none;">
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-birthdate" name="Birth Date" placeholder="Birth Date">
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <select class="form-control form-control-md" id="reg-birthmonth">
                      <option selected>Birth Month</option>
                      <option >January</option>
                      <option >February</option>
                      <option >March</option>
                      <option >April</option>
                      <option >May</option>
                      <option >June</option>
                      <option >July</option>
                      <option >August</option>
                      <option >September</option>
                      <option >October</option>
                      <option >November</option>
                      <option >December</option>
                    </select>
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-birthyear" name="Birth Year" placeholder="Birth Year">
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-age" name="Age" placeholder="Age (Generated)">
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <select class="form-control form-control-md" id="reg-gender">
                      <option selected>Gender</option>
                      <option >Male</option>
                      <option >Female</option>
                    </select>
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <select class="form-control form-control-md" id="reg-status">
                      <option selected>Civil Status</option>
                      <option >Single</option>
                      <option >Married</option>
                    </select>
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-address" name="Address" placeholder="Address">
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn1-back">
                      Back
                    </a>
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn2-next">
                      Next
                    </a>
                  </div>
                </div>
                <!-- End Form 2 -->
                <!-- Form 3 -->
                <div class="form-group row"  id="form-three" style="display: none;">
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-school" name="School Graduated" placeholder="School Graduated">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-schooladd" name="School Address" placeholder="School Address">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-gradyear" name="Year Graduated" placeholder="Year Graduated">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-lrn" name="LRN" placeholder="LRN No.">
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn2-back">
                      Back
                    </a>
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn3-next">
                      Next
                    </a>
                  </div>
                </div>
                <!-- End Form 3 -->
                <!-- Form 4 -->
                <div class="form-group row" id="form-four" style="display: none;">
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="text" class="form-control form-control-user profile" id="reg-con" name="Contact No." placeholder="Contact No.">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="email" class="form-control form-control-user profile" id="reg-email" name="Email" placeholder="Email">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user profile" id="reg-pass" name="password" placeholder="Create Password">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <input type="password" class="form-control form-control-user profile" id="reg-retPass" name="Retype Password" placeholder="Retype Password">
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0">
                    <div class="custom-control custom-checkbox small">
                      <input type="checkbox" class="custom-control-input" id="customCheck">
                      <label class="custom-control-label" for="customCheck" id="log-showPass">Show Password</label>
                    </div>
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn3-back">
                      Back
                    </a>
                  </div>
                  <div class="col-sm-6 pb-3 mb-sm-0">
                    <a href="#" class="btn btn-primary btn-user btn-block" id="btn-reg">
                      Register Account
                    </a>
                  </div>
                  <div class="col-sm-12 pb-3 mb-sm-0" id="btn-ok" style="display: none;">
                    <a href="../index.php" class="btn btn-primary btn-user btn-block">
                      OK
                    </a>
                  </div>
                  <!-- loading bar div -->
                  <div class="col-md-12 pt-3 text-center" id="loader"><img src="../images/backgrounds/loader.gif" style="width: 80px; display: none;"></div>
                      <!-- End of loading bar div -->
                  </div>
                <!-- End of Form 4 -->
              </form>
              <hr>
              <div class="text-center">
                <a class="small" href="../index.php">Already have an account? Login!</a>
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
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Core plugin JavaScript-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>
  <!-- Custom scripts for all pages-->
  <script src="../js/sb-admin-2.min.js"></script>
  <script src="../js/functions/register.js"></script>
</body>
</html>

