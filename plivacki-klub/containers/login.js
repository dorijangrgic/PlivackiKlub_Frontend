import React, { useState } from "react";
import Router from "next/router";
import LoginComponent from "../components/login/login";
import { useForm } from "react-hook-form";
import { login } from "../services/user";
import CustomModal from "../components/modal/modal";

// container handles the logic
const LoginContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const response = await login(data);

    // console.log("Container", response);

    if (!response["token"]) {
      setShowModal(true);
      setModalMessage(response.message);
      // console.log(response.message);
    } else {
      localStorage.setItem("token", response.token);
      Router.push("/dashboard/");
      // console.log(response.token);
    }
  };

  return (
    <>
      <LoginComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default LoginContainer;
