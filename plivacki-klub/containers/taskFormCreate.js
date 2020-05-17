import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../components/modal/modal";
import { create } from "../services/API";
import Router from "next/router";
import TaskFormCreateComponent from "../components/taskForm/taskFormCreate";

const TaskFormCreateContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);

    create(data, "tasks")
      .then(res => {
        console.log("Response1", res);
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
        }
        return res.json();
      })
      .then(res => {
        console.log("Response2", res);
        if (res.errors) {
          let errorMessages = "";
          res.errors.map(el => {
            console.log(el);
            for (let key of Object.keys(el)) {
              errorMessages += el[key];
            }
          });
          setShowModal(true);
          setModalMessage(errorMessages);
        }
        Router.push("/tasks");
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <TaskFormCreateComponent
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

export default TaskFormCreateContainer;
