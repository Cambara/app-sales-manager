import LoginForm from "../../../features/login/login-form.component"
import { LoginFormWrapper } from "./style"

const Home: React.FC<{}> = () => {

    return (
        <div>
            <LoginFormWrapper>
                <LoginForm/>
            </LoginFormWrapper>
        </div>
    )
}

export default Home