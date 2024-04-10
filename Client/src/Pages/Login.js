import React from 'react';

function Navbar() {
  return (

    <div>
      
      <section class="vh-100" id='vh-10'>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-black">

              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                <form id="alijdoi">

                  <h3 class="fw-normal mb-3 pb-3" id="ionsjq">Log in</h3>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example18" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example18">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example28" class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example28">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <a href='/home'><button class="btn btn-info btn-lg btn-block" type="button">Login</button></a>
                  </div>

                  <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="/Register" class="link-info">Register here</a></p>

                </form>

              </div>

            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://i.pinimg.com/564x/1f/a1/78/1fa178e2b6da31fe427bc755fedb7dcf.jpg"
                alt="Login image" class="w-100 vh-100" id="imagrieuhf"></img>
            </div>
          </div>
        </div>
      </section>
    </div>



  )
}

export default Navbar;
