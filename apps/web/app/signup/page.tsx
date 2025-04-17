"use client"
import axios from "axios";
import { AuthPage } from "../../components/authPage";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/useAuth";

export default function SignUp() {
    const { login } = useAuth()
    const router = useRouter();
    return <div className="">
        <AuthPage type="signup" onSubmit={async (data) => {
            const response = await axios.post("http://localhost:8080/api/v1/user/signup", {
                name: data.name,
                email: data.email,
                password: data.password,
                terms: data.terms
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const message = response.data.message
            console.log(message)

            if (response.status === 200) {
                login(message.accessToken, message._id);
                router.push(`/dashboard/${message._id}`);
            }



        }} />
    </div>
}