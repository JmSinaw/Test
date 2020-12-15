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
  <script type="text/javascript">
      window.history.forward();
  </script>
</head>

<body class="bg-gradient-primary">
  
  <nav class="navbar navbar-light bg-gradient-primary">
    <img class="py-2" src="../images/profile/banner.png" width="150">
  </nav>
 
  
  <div class="container">
    <div class="main-body py-3 mt-3">
      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../images/backgrounds/logo.jpg" alt="User" class="rounded-circle" width="150">
                </a>
                <div class="row mt-3">
                  <h4 id="prof-nick"></h4>
                  <h4 id="prof-age"></h4>
                </div>
                <a href="#" class="btn btn-primary btn-user btn-block" id="">
                  Take Entrance Exam
                </a>
                <div class="dropdown-menu  dropdown-menu-right">
                  <a href="#" class="dropdown-item" id="link-updateAcc">
                    <i class="fa fa-edit text-success"></i>
                    <span>Update Account</span>
                  </a>
                  <a href="#" class="dropdown-item" id="changepass-link">
                    <i class="fa fa-lock text-info"></i>
                    <span>Change Password</span>
                  </a>
                  <a class="dropdown-item" href="../index.php">
                    <i class="fas fa-sign-out-alt text-primary"></i>
                    <span>Logout</span>
                  </a>
                  <hr>
                  <a href="#" class="dropdown-item" id="removeaccount-link">
                    <i class="fa fa-trash text-danger"></i>
                    <span>Remove account</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
           <div class="card mt-3 text-center">
            <ul class="list-group list-group-flush pt-3 pb-1">
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3" style="display: none;">
                  <h6 class="mb-0" id="prof-id"></h6>
                </div>
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary" id="prof-name"></div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary" id="prof-email"></div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Mobile</h6>
                </div>
                <div class="col-sm-9 text-secondary" id="prof-contact"></div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary" id="prof-address"></div>
              </div>
            </div>
          </div>
          <div class="row gutters-sm">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body pt-3 pb-3">
                  <h6 class="d-flex align-items-center"><i class="material-icons text-info mr-2">Announcements</i></h6>
                  <div class="py-0">
                    <ol>
                      <li>
                        <p>Your entrance exam schedule will be sent to your gmail account. Changes will be posted. Stay updated.</p>
                      </li>
                      <li>
                        <p>The exams will take place online, and you can access both the Exam Information System and the Online Exam System with the same username and password you used to access this system.</p>
                      </li>
                      <li>
                        <p>Online End of Module Exams/Midterms for Module I of the School of Foreign Languages English Preparatory Class will take place on 23-24 November 2020.</p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Update user data modal --> <!-- Update user data modal --> 
    <div class="modal fade" id="updateAccount-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Account</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="updateAcc-close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pb-0">
            <form method="POST" id="update-form">
              <div class="form-group row" id="form-one">
                <div class="col-sm-12 pb-3 mb-sm-0" style="display: none">
                  <input type="text" class="form-control form-control-user profile" id="up-id">
                </div>
                <div class="col-sm-12 pb-3 mb-sm-0">
                  <input type="text" class="form-control form-control-user profile" id="up-firstname" name="Firstname" placeholder="First Name">
                </div>
                <div class="col-sm-12 pb-3 mb-sm-0">
                  <input type="text" class="form-control form-control-user profile" id="up-middlename" name="Middle Name" placeholder="Middle Name">
                </div>
                <div class="col-sm-12 pb-3 mb-sm-0">
                  <input type="text" class="form-control form-control-user profile" id="up-lastname" name="Last Name" placeholder="Last Name">
                </div>
                <div class="col-sm-12 pb-3 mb-sm-0">
                  <input type="text" class="form-control form-control-user profile" id="up-contact" name="Contact No." placeholder="Contact No.">
                </div>
                <div class="col-sm-12 pb-3 mb-sm-0">
                  <input type="email" class="form-control form-control-user profile" id="up-email" name="Email" placeholder="Email">
                </div>
                <div class="col-sm-12 mb-sm-0">
                  <!-- Update notification div -->
                  <div class="text-center py-1" id="up-accountnotif"></div>
                  <!-- End of Update notification div -->
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <a href="#" class="btn btn-primary btn-user btn-block" id="btn-updateAccount">Update</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Update user data modal --> <!-- Update user data modal --> 
    <div class="modal fade" id="updatePassword-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Change Password</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="updatePass-close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pb-3">
            <form method="POST" class="user" id="uppass-form">
              <div class="form-group" id="upoldpass-con">
                <input type="password" class="form-control form-control-user" id="up-oldpass" placeholder="Enter Old Password">
              </div>
              <div style="display: none;" id="newpass-inputsdiv">
                <div class="form-group">
                  <input type="password" class="form-control form-control-user" id="up-newpass" placeholder="Enter New Password">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-user" id="up-retnewpass" placeholder="Retype New Password">
                </div>
              </div>
              <div class="form-group">
                <div class="custom-control custom-checkbox small">
                  <input type="checkbox" class="custom-control-input" id="customCheck">
                  <label class="custom-control-label" for="customCheck">Show Password</label>
                </div>
              </div>
               <!-- Update-password notification div -->
              <div class="form-group text-center" id="uppass-notif"></div>
              <!-- End of Forgot-password notification div -->
              <div class="form-group" id="btnupnext-div">
                <a href="#" class="btn btn-primary btn-user btn-block" id="btn-upnext">Next</a>
              </div>
              <div class="form-group" id="btnupnewpass-div" style="display: none;">
                <a href="#" class="btn btn-primary btn-user btn-block" id="btn-updatePassword">Update Password</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Delete user data modal --> <!-- Delete user data modal --> 
    <div class="modal fade" id="deleteuser-modal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Are you sure you want to remove your account?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="updatePass-close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body pb-3">
            <form method="POST" class="user">
              <div class="form-group">
               <p>Click remove to confirm.</p>
              </div>
              <div class="form-group" id="btnupnewpass-div">
                <a href="#" class="btn btn-danger btn-user btn-block" id="btn-removeaccount">Remove</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  <!-- Footer -->
  <footer class="footer py-3">
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
  <script src="../js/functions/profile.js"></script>
</body>
</html>