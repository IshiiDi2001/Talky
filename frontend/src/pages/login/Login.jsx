import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-darkOrange">
          Login <span className="text-sky-500">Talky</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base  text-black label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full text-black input input-bordered bg-sky-500 placeholder-white h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base text-black label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full text-black input input-bordered bg-sky-500 placeholder-white h-10"
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-500 hover:underline hover:text-lightOrange mt-2 inline-block"
          >
            {"Don't have an account? Sign Up"}
          </Link>

          <div className="flex flex-col items-center">
            <button className="btn bg-white mt-3 text-darkOrange border border-darkOrange text-lg hover:bg-darkOrange hover:text-white hover:border-darkOrange ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//           <h1 className="text-3xl font-semibold text-center text-gray-300">
//             Login <span className="text-blue-900">Talky</span>
//           </h1>
//           <form action="">
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">Username</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter Username"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label className="label">
//                 <span className="text-base label-text">Password</span>
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>

//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             >
//               {"Don't have an account? Sign Up"}
//             </a>

//             <div className="flex flex-col items-center">
//               <button className="btn btn-sm mt-2">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   export default Login;
