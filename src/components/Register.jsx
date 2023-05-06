import axios from 'axios';
import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({ name: "", emailid: "",imageurl: "", password: "",  score: 0  })
  let name,value;
  const handleChange=(e)=>{
    name=e.target.name;
    value=e.target.value
    setUser({...user,[name]:value})
    console.log(user)
  }
  const dataPost=async(e)=>{
    e.preventDefault();
    user.score=parseInt(user.score)
    const {name,emailid,password,imageurl,score}=user;
     
    const res= await axios.post("http://localhost:8080/user",{
      name,'email-id':emailid,'profile-picture-url':imageurl,password,score
    })
    if(res){
      alert("Registation completed ! please login")
    }

  }
  return (
    <>
      <div>
        <section className="h-screen">
          <div className="h-full">

            <div
              className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div
                className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample" />
              </div>


              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <h1 className="text-lg rounded-md border-2 my-4 p-auto pl-3 ">Registration form</h1>
                <form method="POST">
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text" name="name"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear "
                      id="exampleFormControlInput2"
                      placeholder="Name"  value={user.name} onChange={handleChange}/>
                  
                  </div>





                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text" name="emailid"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                      id="exampleFormControlInput2"
                      placeholder="Email address" value={user.emailid} onChange={handleChange} />
                   
                  </div>


                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="password" name="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                      id="exampleFormControlInput22"
                      placeholder="Password" value={user.password} onChange={handleChange} />

                  </div>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text" name="imageurl"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                      id="exampleFormControlInput22"
                      placeholder="url"  value={user.imageurl} onChange={handleChange}/>
                 
                  </div>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text" name="score"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                      id="exampleFormControlInput22"
                      placeholder="Score" value={user.score} onChange={handleChange} />
                    
                  </div>
                     <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="inline-block rounded bg-primary text-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="black" onClick={dataPost}>Register

                    </button>


                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>)
}

export default Register