import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { setCurrentUser } = useContext(MyStore);
  const navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const formSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password,
    );

    if (user) {
     toast.success("Login Successful 🎉");

      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home");
    } else {
       toast.error("Invalid Email or Password ❌");
    }

    reset();
  };
  return (
    <section className="w-1/2 min-h-screen bg-black flex items-center justify-center px-10 border-l-1 border-white ">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white">Sign In</h2>

        <p className="text-gray-400 mt-2">
          Welcome back! Sign in to continue shopping.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="mt-10 space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Email Address
            </label>

            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#C8F400] transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Password
            </label>

            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must contain at least one letter and one number",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#C8F400] transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-[#C8F400]" />
              Remember me
            </label>

            <button type="button" className="text-[#C8F400] hover:underline">
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#C8F400] text-black py-4 rounded-xl font-bold hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-zinc-700"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>

        {/* Google Button */}
        <button className="w-full border border-zinc-700 bg-zinc-900 text-white py-4 rounded-xl font-semibold hover:border-[#C8F400] transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center mt-8 text-gray-400">
          Don't have an account?{" "}
          <NavLink
            to={"/signUp"}
            className="text-[#C8F400] font-semibold cursor-pointer hover:underline"
          >
            Sign Up
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
