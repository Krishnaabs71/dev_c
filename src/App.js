import "./App.css";
import FormComponent from "./Form";

function App() {
  return (
    <>
      <div className="position-relative">
        <div className="banner-image">
          <img src="./Dev_Challenge/banner.png" className="w-100" />
        </div>
        <div className="login-section">
          <div className="logoimage d-flex justify-content-center">
            <img src="./Dev_Challenge/amazon.png"></img>
          </div>
          <h6 className="text-center login">Login</h6>
          <div className="d-flex justify-content-center">
            <div className="main-content">
              <div>
                <img
                  src="./Dev_Challenge/tree.png"
                  width="100%"
                  className="mt-8"
                ></img>
              </div>
              <div>
                <FormComponent />
                <div className="d-flex flex-wrap justify-content-between pt-16">
                  <p>Forgot Password?</p>
                  <p>New User? Sign Up</p>
                </div>
                <p className="or-content">or</p>
                <div className="d-flex flex-wrap justify-content-between align-items-center google">
                  <div className="col-2">
                    <img src="./Dev_Challenge/google.png" />
                  </div>
                  <div className="col-10">
                    <p className="text-center mb-0">CONTINUE WITH GOOGLE</p>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center google mt-16 mb-46">
                  <div className="col-2">
                    <img src="./Dev_Challenge/facebook.png" />
                  </div>
                  <div className="col-10">
                    <p className="text-center mb-0">CONTINUE WITH FACEBOOK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
