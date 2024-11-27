import React, { useState } from "react";
import "./Register.scss";
import { Link, Navigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/reducers/user/user";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const { user, status, error } = useSelector((s) => s.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const dispatch = useDispatch();

  const submitForm = (data) => {
    const { confirmPassword, ...other } = data;

    dispatch(registerUser(other));
  };

  if (status === "succeeded") {
    return <Navigate to="/" />;
  }

  return (
    <section className="register">
      <div className="container">
        <div className="register__here">
          <p>
            Вы здесь:
            <Link className="register__here-link" to="/home">
              Домой
            </Link>
            <span>&gt; Зарегистрироваться</span>
          </p>
        </div>
        <form className="register__form" onSubmit={handleSubmit(submitForm)}>
          <h1>Зарегистрироваться</h1>
          <h4>Создайте новый аккаунт</h4>
          <p className="register__form-desc">
            Зарегистрируйтесь, чтобы создать учетную запись и получить доступ к{" "}
            <br />
            персонализированным настройкам. Пожалуйста, обратите внимание:{" "}
            <br />
            регистрация доступна только для клиентов, получающих поставки от
            HANOS.
          </p>
          <div>
            <p className="register__form-label">Электронная почта</p>
            <div className="register__form-inputs">
              <MdOutlineEmail className="register__form-inputs-icons-email" />
              <input
                {...register("email", { required: true })}
                className="register__form-input"
                type="email"
                placeholder="Введите свою электронную почту"
              />
              {errors.email && <span>REQUIRED</span>}
            </div>
            <p className="register__form-label">Пароль</p>
            <div className="register__form-inputs">
              <RiLockPasswordLine className="register__form-inputs-icons-password" />
              <input
                {...register("password", { required: "Пароль обязателен" })}
                className="register__form-input"
                type={isPasswordVisible ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="Введите свой пароль"
              />

              <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible ? (
                  <FaRegEye className="register__form-inputs-icons-show" />
                ) : (
                  <FaRegEyeSlash className="register__form-inputs-icons-hide" />
                )}
              </div>
            </div>
            <p className="register__form-label">Введите ещё раз пароль</p>
            <div className="register__form-inputs">
              <RiLockPasswordLine className="register__form-inputs-icons-password" />
              <input
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password || "Пароли не совпадают",
                })}
                className="register__form-input"
                type={isConfirmPasswordVisible ? "text" : "password"}
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
                placeholder="Введите ещё раз свой пароль"
              />

              <div
                onClick={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              >
                {isConfirmPasswordVisible ? (
                  <FaRegEye className="register__form-inputs-icons-show" />
                ) : (
                  <FaRegEyeSlash className="register__form-inputs-icons-hide" />
                )}
              </div>
              {errors.confirmPassword && (
                <p className="register__form-input-error">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <button type="submit" className="register__form-signin-btn">
              Зарегистрироваться
            </button>
            <Link to="/login">
              <button className="register__form-forgot-password">
                Есть аккаунт?
              </button>
            </Link>
          </div>
        </form>
      </div>
      <div className="register__empty"></div>
    </section>
  );
};

export default Register;
