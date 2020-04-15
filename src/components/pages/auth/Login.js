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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={onChange}
        />
        <input
          type="text"
          name="password"
          value={data.password}
          onChange={onChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
