import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ls from 'local-storage';

import { useStateContext } from "../../HBOProvider";
import { useMounted } from '../../Hooks/useMounted'

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();

  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls('users') !== null ? ls('users') : [];

  let {hasMounted} = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false)
    }

    console.log('load effect', users);
  }, []);

  console.log('declared users: ', users);
  const selectUser = (id) => {
    ls('activeUID', id);
    router.push('/');
  }

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div className="login-user__user-box" key={user.id} onClick={selectUser}>
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50" alt="" className="login-user__user-img" />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        )
      })
    }
  }

  const createUser = () => {
    router.push('/create');

  }

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">
          Who is Watching?
        </span>
      </div>
      <div className="login-user__form">
        {hasMounted ? showUsers() : ''}
      </div>
      <div className="login-user__buttons">
        <button className="login-user__kid" onClick={createUser}>Create User</button>
      </div>
    </div>
  )
}

export default Login