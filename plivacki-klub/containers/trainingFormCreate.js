import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CustomModal from "../components/modal/modal";
import { create, getAll, getAllById } from "../services/API";
import Router from "next/router";
import TrainingFormCreateComponent from "../components/trainingForm/trainingFormCreate";

const TrainingFormCreateContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [groups, setGroups] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [trainingId, setTrainingId] = useState();
  const [attendances, setAttendances] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  let groupId = null;

  const fillUsers = () => {
    // get all users from groupId
    console.log("Fillam usere", trainingId, groupId);

    getAllById("groups", "users", groupId)
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          return res.json();
        }
      })
      .then(res => {
        setUsers(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  const createAttendances = data => {
    console.log("Attendances create", data);
    
    const dataToSend = {};
    dataToSend["trainingId"] = trainingId;

    let userAttendances = [];

    for (let key of Object.keys(data)) {
      if (key.substring(0, 4) === "user") {
        userAttendances.push({
          id: key.substring(4),
          finished: data[key]
        });
      }
    }

    dataToSend["userIds"] = userAttendances;
    console.log("Data to send", dataToSend);
    
    create(dataToSend, "attendances")
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
        } else {
          console.log("Attendances created");
        }
      })
      .catch(err => console.log(err));
  };

  const onNext = data => {
    // when clicked next, user should enter attendances
    // training is created and users are filled
    console.log("Submit training", data);
    create(data, "trainings")
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
        } else {
          groupId = res.groupId;
          setTrainingId(res.id);
          setAttendances(true);
          fillUsers();
        }
      })
      .catch(err => console.log(err));
  };

  const onSubmit = data => {
    console.log("On submit", attendances);
    if (!attendances) {
      // call next()
      console.log("Training is not created");
      onNext(data);
    } else {
      // create attendances
      console.log(
        "Training is already created, now it's time to create attendances"
      );
      createAttendances(data);
    }
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

  useEffect(() => {
    fillGroups();
    fillTasks();
  }, []);

  return (
    <>
      <TrainingFormCreateComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        groups={groups}
        tasks={tasks}
        users={users}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default TrainingFormCreateContainer;
