// import { useState } from 'react'
// import './SignUp.css'
// import { Link } from 'react-router-dom'
// import {getDatabase , ref , set} from 'firebase/database'
// import { app } from "../FireBase";
// import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth'

// const auth = getAuth(app);


// export default function SignUp() {
//     let [fname , setFname] = useState('');
//     let [lname , setLname] = useState('');
//     let [email , setEmail] = useState('');
//     let [password , setPassword] = useState('');
//     let [Cpassword , setCpassword] = useState('');

//     let handleOnSubmit = (e) => {
//         e.preventDefault();
//     }

//     const putData = async () => {
//         if(password !== Cpassword){
//             alert('Password does not match');
//             return;
//         }
//         try {
//             await set(ref(getDatabase(app), 'users/' + email.split('@')[0]), {
//                 fname: fname,
//                 lname: lname,
//                 email: email,
//                 password: password
//             });
//             await createUserWithEmailAndPassword(auth,email, password);
//             alert('User created successfully');
//             window.location.href = '/home' 
//         }
//         catch (error) {
//             alert(error.message);
//         }
//         setFname('');
//         setLname('');
//         setEmail('');
//         setPassword('');
//         setCpassword('');
        
//       };


//   return (
//     <>
//         <p className='heading'>Incredible India</p>
//         <div>
//             <form className="form1" onSubmit={handleOnSubmit}>
//                 <p className="title">Register</p>
        
//                 <div className="flex">
//                     <input required value={fname} onChange={(e) => setFname(e.target.value)}  autoComplete='off' placeholder="First Name" type="text" className="input" />
//                     <input required value={lname} onChange={(e) => setLname(e.target.value)}  placeholder="Last Name" type="text" className="input" />
//                 </div>

//                 <div className='email'>
//                     <input required value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" type="email" className="input" />
//                 </div>

//                 <div className='password'>
//                     <input required value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" type="password" className="input" />
//                 </div>
//                 <div className='Cpassword'>
//                     <input required value={Cpassword} onChange={(e) => setCpassword(e.target.value)} placeholder="Confirm password" type="password" className="input" />
//                 </div>
                
//                 <button className = 'submit' onClick={putData}> 
//                         Submit
//                 </button>
                
//                 <p className="signin">Already have an acount ? 
//                     <Link to={'/login'} >Sign In</Link>
//                 </p>   
//             </form>

//         </div>
//     </>
//   )
// }
