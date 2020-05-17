import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../components/modal/modal";
import { create, getSingle, update } from "../services/API";
import Router from "next/router";
import TaskFormEditComponent from "../components/taskForm/taskFormEdit";

const TaskFormEditContainer = ({ taskId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [taskData, setTaskData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);
    update(data, "tasks", taskId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/tasks");
        return res;
      })
      .catch(err => console.log(err));
  };

  const getTask = () => {
    getSingle("tasks", taskId)
      .then(res => {
        if (res.status === 401 || res.status === 403)
          Router.push("/users/login");
        else return res.json();
      })
      .then(res => {
        if (res.message) {
          setShowModal(true);
          setModalMessage(res.message);
        } else {
          setTaskData(res);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (taskId) {
      getTask();
    }
  }, [taskId]);

  return (
    <>
      <TaskFormEditComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        taskData={taskData}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default TaskFormEditContainer;
