import { useState } from "react";
import Input from "../../components/input"
import { INPUT_TYPES } from "../../domain/input-types"
import { LoginFormWrapper, LoginTitle } from "./style";

const LoginForm:React.FC = () => {
    const emailLabel = "Email"
    const passwordLabel = "Palavra-passe"
    const [inputEmail, setInputEmail] = useState<string>('');
    const [inputPassword, setInputPassword] = useState<string>('');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const label = e.target.name
        if (label === emailLabel) {
            return setInputEmail(e.target.value)
        }
        if (label === passwordLabel) {
            return setInputPassword(e.target.value)
        }

    };

    return (
        <LoginFormWrapper>
            <LoginTitle>Autenticação</LoginTitle>
            <Input
              key="email"
              label={emailLabel}
              value={inputEmail}
              inputTypes={INPUT_TYPES.EMAIL}
              handleChange={handleChange}
            />
            <Input
              key="password"
              label={passwordLabel}
              value={inputPassword}
              inputTypes={INPUT_TYPES.PASSWORD}
              handleChange={handleChange}
            />
        </LoginFormWrapper>
    )
}

export default LoginForm