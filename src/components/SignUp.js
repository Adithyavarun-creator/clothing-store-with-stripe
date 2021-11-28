import React,{useState} from 'react' 

import FormInput from './FormInput'
import Button from './Button' 
import {auth,createUserProfileDocument} from '../firebase/firebase.utils'
import './SignUp.styles.scss'
 
import {connect} from 'react-redux'
import { signUpStart } from '../redux/user/user-actions'

const SignUp =({signUpStart}) =>{
    const [userCredentials,setUserCredentials] = useState({
        displayName:'',
             email:'',
             password:'',
             confirmPassword:''
    })
    const {displayName,email,password,confirmPassword} = userCredentials
    // constructor(){
    //     super()

    //     this.state={
    //         displayName:'',
    //         email:'',
    //         password:'',
    //         confirmPassword:''
    //     }
    // }

   const handlesubmit = async event=>{
       event.preventDefault()
       //const {signUpStart} = this.props

       const {displayName,email,password,confirmPassword} = userCredentials

       if(password !== confirmPassword){
           alert('Passwords dont match')
           return
       }
       signUpStart({displayName,email,password})
    }

    //    try{
    //     const {user} = await auth.createUserWithEmailAndPassword(
    //         email,
    //         password
    //         )

    //     await createUserProfileDocument(user,{displayName})

        // this.setState({
        //     displayName:'',
        //     email:'',
        //     password:'',
        //     confirmPassword:''
        // })

//        }catch(error){
//         console.log(error);
//        }
//    }

   const handlechange = event =>{
       const {name,value} = event.target;
       setUserCredentials({
           ...userCredentials,
           [name]:value
       })
   }

        //const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">
                    I don not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form"
                onSubmit={handlesubmit}>

                    <FormInput
                     type="text"
                     name="displayName"
                     value={displayName}
                     onChange={handlechange}
                     label="Display name"
                     required />

                    <FormInput
                     type="email"
                     name="email"
                     value={email}
                     onChange={handlechange}
                     label="Email"
                     required />

                    <FormInput
                     type="password"
                     name="password"
                     value={password}
                     onChange={handlechange}
                     label="Password"
                     required />

                    <FormInput
                     type="password"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={handlechange}
                     label="Confirm Password"
                     required />

                     <Button type="submit">
                        SIGN UP
                     </Button>

                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp)