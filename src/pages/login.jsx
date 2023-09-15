import React, { useState } from 'react'
// import { Link } from 'react-icons'
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


function Login() {
  // const [visible, setVisible] = useState(false);
  const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        LOGIN
      </h2>
    </div>
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-rose-600 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}

                onChange={(e)=>setEmail(e.value.target)}
                
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-1 relative">
              <input
               
                name="password"
                autoComplete="current-password"
                required
               type='password'
              value={password}
             onChange={(e)=>setPassword(e.value.target)}
                
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              {/* {visible ? (
                <AiOutlineEye
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="absolute right-2 top-2 cursor-pointer"
                  size={25}
                  onClick={() => setVisible(true)}
                />
              )} */}
            </div>
          </div>
          {/* <div className={`${styles.noramlFlex} justify-between`}>
            <div className={`${styles.noramlFlex}`}> */}
              {/* <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              /> */}
              {/* <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label> */}
            {/* </div> */}
            <div className="text-sm">
              <a
                href=".forgot-password"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          {/* </div> */}
          <div>
            <button
              type="submit"
              className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-slate-950 bg-white hover:bg-rose-600"
            >
              Submit
            </button>
          </div>
          <div >
            <h4>Not have any account?</h4>
            {/* <Link to="/sign-up" className="text-blue-600 pl-2">
              Sign Up
            </Link> */}
          </div>
        </form>
      </div>
     </div>
   </div>
      

  )

}

  

export default Login