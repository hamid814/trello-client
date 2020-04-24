import React, { useState } from 'react';

const Login = ({ action }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    action(data);
  };

  return (
    <div className="login">
      <h2>
        <span>Login</span> with your account
      </h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>email:</label>
          <input
            type="text"
            placeholder="enter your email"
            name="email"
            value={data.email}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label>password:</label>
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={data.password}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <input type="submit" value="login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
