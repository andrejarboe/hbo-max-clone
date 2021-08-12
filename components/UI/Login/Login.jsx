import Head from 'next/head'
import { useStateContext } from "../../HBOProvider";

const Login = () => {
  const globalState = useStateContext();

  return (
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">
            Who is Watching?
          </span>
        </div>
        <div className="login-user__form">
          <div className="login-user__user-box">
            <a href="/home">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" alt="" className="login-user__user-img" />
            </a>
            <div className="login-user__user-name">{globalState.test}</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>

        </div>
      </div>
  )
}

export default Login