import React from 'react'

const SignIn = () => {
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="text-black_color text-3xl font-bold ">Sign In</h3>
        <div className="flex flex-col gap-4 mt-7">
          <input type="text" placeholder="Email" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
          <input type="text" placeholder="Password" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
        </div>
        <button className="bg-black_color text-white my-5 w-full rounded-md py-2 px-4 hover:bg-gray-800 transition-colors">Continue</button>
        <p className="text-black font-bold"> Don't have an account? <a href='/login'><span className="text-secondary underline cursor-pointer">Register</span></a> Here</p>
        <div className="flexCenter mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </section>
  )
}

export default SignIn