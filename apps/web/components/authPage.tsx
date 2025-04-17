"use client"
import { Button } from "@repo/ui/button"
import { error } from "console"
import Link from "next/link"
import { useForm, ValidationRule } from "react-hook-form"

export interface IForm {
    name: string,
    email: string,
    password: string,
    terms: boolean
}


export function AuthPage({ type, onSubmit }: {
    type: "signin" | "signup",
    onSubmit: (data: IForm) => void

}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IForm>()



    const validatePassword: Record<string, ValidationRule<any>> | undefined = type === "signup" ? {
        hasUppercase: (value: string) =>
            /[A-Z]/.test(value) || "Must include at least one uppercase letter",
        hasLowercase: (value: string) =>
            /[a-z]/.test(value) || "Must include at least one lowercase letter",
        hasNumber: (value: string) =>
            /[0-9]/.test(value) || "Must include at least one number",
        hasSpecialChar: (value: string) =>
            /[\W_]/.test(value) || "Must include at least one special character",
        minLength: (value: string) =>
            value.length >= 8 || "Must be at least 8 characters long",
    } : {}




    return (<>
        <div className="flex h-screen  bg-gradient-to-tl from-[#92e491] via-[#c2f1c1] to-[#e0f9df] ">
            <div className=" w-full max-lg:hidden " >
                <img className="h-full w-full  " src="/soil_plant.jpg" alt="" />
            </div>
            <div className="w-full  flex flex-col items-center justify-center p-5 ">
                <div className="mb-8">
                    <img className="h-7 w-36" src="/farmvisonLogo.png" alt="" />
                </div>
                <div className=" mb-8 ">
                    <h1 className="text-4xl font-bold pb-2 text-center text-[#207521] ">{type === "signup" ? "Create an account" : "Login"}</h1>
                    <p className="text-sm">{type === "signup" ? "Let's get started. Fill in the details below to create your account." : "Enter your details below to access your account."}</p>
                </div>
                <div className="w-96 p-7   ">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" >
                        {/*name  */}
                        {type === "signup" && (
                            <label htmlFor="name">
                                <h1 className="text-lg font-medium  ">Name</h1>
                                <input placeholder="Name" className="w-full outline-none border border-black rounded p-2 " id="name" {...register("name", { required: { message: "name is required ", value: true }, })} />
                                {errors.name && <p className="text-sm text-red-500 ">{errors.name?.message}</p>}
                            </label>
                        )}

                        {/* email */}
                        <label htmlFor="email">
                            <h1 className="text-lg font-medium  ">Email</h1>
                            <input type="email" placeholder="Email" className="w-full outline-none border border-black rounded p-2 " id="email" {...register("email",
                                {
                                    required: { value: true, message: "email is required" },
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "enter the correct email"
                                    }
                                })}
                            />
                            {errors.email && <p className="text-sm text-red-500 ">{errors.email?.message}</p>}

                            {/* password */}
                        </label>
                        <label htmlFor="password">
                            <h1 className="text-lg font-medium  ">Password</h1>
                            <input placeholder="Password" className="w-full outline-none border border-black rounded p-2 " id="password" {...register("password", {
                                required: { value: true, message: "password is required" },
                                validate: validatePassword
                            })} />
                            {errors.password ? <p className="text-sm text-red-500 "  >{errors.password.message}</p> : (type === "signup" && <p>Minimun 8 characters</p>)}

                        </label>
                        {type === "signup" && (
                            <label htmlFor="checkbox" className="flex gap-2 mb-3 mt-3  " >
                                <input type="checkbox" id="checkbox"  {...register("terms", { required: true })} />
                                <p> I agree to the <Link href={"/terms&conditions"} className="underline" >Terms & Conditions</Link></p>
                            </label>
                        )}
                        <input className={`bg-gradient-to-t from-[#228b22] to-[#207521] text-white  py-2 font-semibold cursor-pointer rounded border border-black  ${type === "signin" && "mt-6"} `} type="submit" />
                    </form>
                </div>
                <div >
                    <p>Already have an account? <Link className="underline" href={type === "signup" ? "/signin" : "/signup"}>{type === "signup" ? "Sign In" : "Sign Up"}</Link></p>
                </div>
            </div>
        </div>
    </>)
}