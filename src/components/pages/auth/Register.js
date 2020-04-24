import React, { useState } from 'react';

const Register = ({ action }) => {
  const [data, setData] = useState({
    name: '',
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
    <div className="register">
      <h2>
        <span>Register</span> as new user
      </h2>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>name:</label>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={data.name}
            onChange={onChange}
          />
        </div>
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
            placeholder="enter your passwrod"
            type="password"
            name="password"
            value={data.password}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <input type="submit" value="register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
