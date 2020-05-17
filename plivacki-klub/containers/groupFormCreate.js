import { useState, useEffect } from "react";
import GroupFormCreateComponent from "../components/groupForm/groupFormCreate";
import { useForm } from "react-hook-form";
import CustomModal from "../components/modal/modal";
import { create, getAll } from "../services/API";
import Router from "next/router";

const GroupFormCreateContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [clubs, setClubs] = useState([])
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);

    create(data, "groups")
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
        Router.push("/groups");
      })
      .catch(err => console.log(err));
  };

  const fillClubs = () => {
    getAll("clubs", {})
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          return res.json();
        }
      })
      .then(res => {
        setClubs(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    // fetch all clubs
    fillClubs();
  }, []);

  return (
    <>
      <GroupFormCreateComponent
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        clubs={clubs}
      />
      <CustomModal
        message={modalMessage}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default GroupFormCreateContainer;
