import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop:filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-darkOrange">
          Sign Up <span className="text-sky-500">Talky</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base text-black label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full text-black input input-bordered h-10 bg-sky-500 placeholder-white"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base text-black label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full text-black input input-bordered h-10 bg-sky-500 placeholder-white"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-black label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full text-black input input-bordered h-10 bg-sky-500 placeholder-white"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base text-black label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Re-enter Password"
              className="w-full text-black input input-bordered h-10 bg-sky-500 placeholder-white"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm text-gray-500 hover:underline hover:text-lightOrange mt-2 inline-block"
          >
            {"Already have an account? Login"}
          </Link>

          <div className="flex flex-col items-center">
            <button
              className="btn bg-white mt-3 text-darkOrange border border-darkOrange text-lg hover:bg-darkOrange hover:text-white hover:border-darkOrange"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
