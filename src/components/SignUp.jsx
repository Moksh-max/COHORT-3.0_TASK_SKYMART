import React, { useContext, useState } from "react";
import { useForm, Watch } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../Context/MyContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const password = watch("password");

  let { users, setUsers } = useContext(MyStore);

  const formSubmit = (data) => {
    const alreadyExists = users.some((user) => user.email === data.email);

    if (alreadyExists) {
      toast.error("Email is already registered!");
      return;
    }

    toast.success("Account Created Successfully 🎉");

    const updatedUsers = [...users, data];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setCurrentUser(data);
    navigate("/home");

    reset();
  };

  return (
    <section className="w-full lg:w-1/2 min-h-screen bg-black flex items-center justify-center px-6 sm:px-8 lg:px-10 py-10 border-t lg:border-t-0 lg:border-l border-zinc-700">
      <div className="w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Create Account
        </h2>

        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Join SkyMart and start shopping smarter today.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="mt-6 space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
              Full Name
            </label>

            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]{2,30}$/,
                  message: "Write a valid name",
                },
              })}
              type="text"
              placeholder="Enter your full name"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 sm:px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-[#C8F400] transition"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
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
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 sm:px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-[#C8F400] transition"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
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
              placeholder="Create a password"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 sm:px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-[#C8F400] transition"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 font-medium mb-2 text-sm sm:text-base">
              Confirm Password
            </label>

            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              placeholder="Confirm your password"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 sm:px-5 py-3 text-white placeholder-gray-500 outline-none focus:border-[#C8F400] transition"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
            <input type="checkbox" className="mt-1 accent-[#C8F400]" />I agree
            to the Terms & Conditions and Privacy Policy.
          </label>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#C8F400] text-black py-3 rounded-xl font-bold text-sm sm:text-base hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-zinc-700"></div>
          <span className="text-gray-500 text-xs sm:text-sm">OR</span>
          <div className="flex-1 h-px bg-zinc-700"></div>
        </div>

        {/* Google */}
        <button className="w-full bg-zinc-900 border border-zinc-700 text-white py-3 rounded-xl font-semibold text-sm sm:text-base hover:border-[#C8F400] transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center mt-5 text-sm text-gray-400">
          Already have an account?{" "}
          <NavLink
            to="/ "
            className="text-[#C8F400] font-semibold hover:underline"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
