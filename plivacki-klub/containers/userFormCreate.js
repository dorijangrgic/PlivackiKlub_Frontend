import { useForm } from "react-hook-form";
import Router from "next/router";
import UserFormCreateComponent from "../components/userForm/userFormCreate";
import { useState, useEffect } from "react";
import { getAll, getSingle } from "../services/API";
import { registerUser } from "../services/user";
import CustomModal from "../components/modal/modal";

// container for Create user
const UserFormCreateContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [groups, setGroups] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);

    registerUser(data)
      .then(res => {
        console.log("Dobio sam", res);

        if (res) {
          // nije prazno, pokazi modal s greskom
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
          if (res.message) {
            setShowModal(true);
            setModalMessage(res.message);
            // Router.push("/users");
          }
        }
      })
      .catch(err => console.log(err));
  };

  const getUser = () => {
    console.log("user id", userId);

    getSingle("users", userId)
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
          setUser(res);
        }
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

  useEffect(() => {
    // fetch all groups
    fillGroups();
  }, []);

  return (
    <>
      <UserFormCreateComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        groups={groups}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default UserFormCreateContainer;
