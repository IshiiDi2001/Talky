import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg items-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-darkOrange">
          Login <span className="text-sky-500">Talky</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base  text-black label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full text-black input input-bordered bg-sky-500 placeholder-white h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm text-gray-500 hover:underline hover:text-lightOrange mt-2 inline-block"
          >
            {"Don't have an account? Sign Up"}
          </Link>

          <div className="flex flex-col items-center">
            <button
              className="btn bg-white mt-3 text-darkOrange border border-darkOrange text-lg hover:bg-darkOrange hover:text-white hover:border-darkOrange"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
