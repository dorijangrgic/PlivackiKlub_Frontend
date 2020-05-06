import React, { useState } from "react";
import Router from "next/router";
import ActivateComponent from "../components/activate/activate";
import { useForm } from "react-hook-form";
import { activate } from "../services/user";
import CustomModal from "../components/modal/modal";

const ActivateContainer = ({ userId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    const response = await activate(data, userId);

    console.log("Container", response);

    if (response) {
      setShowModal(true);
      setModalMessage(response.message);
      // console.log(response.message);
    } else {
      Router.push("/users/login");
      // console.log(response.token);
    }
  };

  return (
    <>
      <ActivateComponent
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

export default ActivateContainer;
