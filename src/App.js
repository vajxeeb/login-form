import { useState } from 'react';
import './App.css';
// import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap'
// import { IoMdAdd } from 'react-icons/io'
// import { MdCancel } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import showDialog from './showDialog';

const App = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const _email = "abc@gmail.com"
  const _password = "12345"


  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [login_status, setLogin_Status] = useState("")


  const notify = (type, message) => {
    switch (type) {
      case 'warning':
        return toast.warning(<h5 className='t'>{message}</h5>);
      case 'success':
        return toast.success(<h5 className='t'>{message}</h5>);
      case 'error':
        return toast.error(<h5 className='t'>{message}</h5>);
      default:
        return toast(<h5 className='t'>{message}</h5>);
    }
  }

  const Login = () => {
    if (email === _email && password === _password) {
      notify("success", "ສຳເລັດ")
    } else {
      notify("warning", "ລະຫັດບໍ່ຖືກຕ້ອງ")
    }
  }


  return (
    <div className="App">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white shadow">
                <div className="card-body p-5 text-center">
                  {/* <img src={logo} style={{width:"100px", height:"100px"}}></img> */}
                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">ເຂົ້າສູ່ລະບົບ</h2>
                    <p className="text-white-50 mb-5">ກະລຸນາປ້ອນລະອີເມວ ແລະ ລະຫັດຜ່ານເພື່ອເຂົ້າສູ່ລະບົບ!</p>

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" className="form-control form-control-lg text-center"
                        placeholder='ອີເມວ' onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* <label className="form-label" for="typeEmailX">Email</label> */}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" className="form-control form-control-lg text-center"
                        placeholder='ລະຫັດຜ່ານ' onChange={(e) => setPassword(e.target.value)}
                      />
                      {/* <label className="form-label" for="typePasswordX">Password</label> */}
                    </div>

                    <p className="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">ລືມລະຫັດຜ່ານ?</a></p>

                    <button className="btn btn-outline-light btn-lg px-5" type="submit"
                      onClick={Login}
                    >ເຂົ້າສູ່ລະບົບ</button>
                    <showDialog show={show} handleShow={handleShow}></showDialog>

                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white"><i className="bi bi-meta"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                    </div>

                  </div>

                  <ToastContainer />

                  <div>
                    <p className="mb-0">ຍັງບໍ່່ມີບັນຊີ? <a href="#!" className="text-white-50 fw-bold">ລົງທະບຽນ</a></p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
