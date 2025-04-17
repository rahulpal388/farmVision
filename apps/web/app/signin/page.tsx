"use client"
import { AuthPage } from "../../components/authPage";
import axios from "axios"
import { useAuth } from "../../context/useAuth";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const { login } = useAuth();
    const router = useRouter()

    return <div>
        <AuthPage type="signin" onSubmit={async (data) => {
            const response = await axios.post("http://localhost:8080/api/v1/user/login", {
                name: data.name,
                email: data.email,
                password: data.password,
                terms: data.terms
            }, {
                withCredentials: true

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