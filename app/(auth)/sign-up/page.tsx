'use client'

import AuthForm from "@/components/AuthForm"
import { signUpSchema } from "@/lib/validations"

const SignUpPage = () => {

    return (
        <AuthForm
            type={"SIGN UP"}
            schema={signUpSchema}
            defaultValues={{
                email: "",
                password: "",
                fullName: "",
                universityId: 0,
                universityCard: ""
            }}

            onSubmit={() => { }}
        />

    )
}

export default SignUpPage
