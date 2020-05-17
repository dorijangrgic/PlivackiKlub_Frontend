import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../components/modal/modal";
import { create, getAll, getSingle, update } from "../services/API";
import Router from "next/router";
import TrainingFormEditComponent from "../components/trainingForm/trainingFormEdit";

const TrainingFormEditContainer = ({ trainingId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [groups, setGroups] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [trainingData, setTrainingData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);
    update(data, "trainings", trainingId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/trainings");
        return res;
      })
      .catch(err => console.log(err));
  };
  
  const fillGroups = () => {
    getAll("groups", {})
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          return res.json();
        }
      })
      .then(res => {
        setGroups(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  const fillTasks = () => {
    getAll("tasks", {})
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          return res.json();
        }
      })
      .then(res => {
        setTasks(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  const getTraining = () => {
    getSingle("trainings", trainingId)
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
          setTrainingData(res);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (trainingId) {
      getTraining();
    }
    fillGroups();
    fillTasks();
  }, [trainingId]);

  return (
    <>
      <TrainingFormEditComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        groups={groups}
        tasks={tasks}
        trainingData={trainingData}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default TrainingFormEditContainer;
