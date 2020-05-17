import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getSingle, update, getAll } from "../services/API";
import CustomModal from "../components/modal/modal";
import Router from "next/router";
import GroupFormEditComponent from "../components/groupForm/groupFormEdit";

const GroupFormEditContainer = ({ groupId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [groupData, setGroupData] = useState({});
  const [clubs, setClubs] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);
    update(data, "groups", groupId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/groups");
        return res;
      })
      .catch(err => console.log(err));
  };

  const getGroup = () => {
    getSingle("groups", groupId)
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
          setGroupData(res);
        }
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
    if (groupId) {
      getGroup();
    }
    fillClubs();
  }, [groupId]);

  return (
    <>
      <GroupFormEditComponent
        groupData={groupData}
        clubs={clubs}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
      <CustomModal showModal={showModal} modalMessage={modalMessage} />
    </>
  );
};

export default GroupFormEditContainer;
