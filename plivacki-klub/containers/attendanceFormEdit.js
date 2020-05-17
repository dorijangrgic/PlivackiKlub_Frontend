import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getSingle, update } from "../services/API";
import CustomModal from "../components/modal/modal";
import Router from "next/router";
import AttendanceFormEditComponent from "../components/attendance/attendanceEditForm";

const AttendanceFormEditContainer = ({ attendanceId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [attendanceData, setAttendanceData] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log("Submit", data);
    update(data, "attendances", attendanceId)
      .then(res => {
        console.log("Response container", res);
        Router.push("/attendances");
        return res;
      })
      .catch(err => console.log(err));
  };

  const getAttendance = () => {
    getSingle("attendances", attendanceId)
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
          setAttendanceData(res);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (attendanceId) {
      getAttendance();
    }
  }, [attendanceId]);

  return (
    <>
      <AttendanceFormEditComponent
        attendanceData={attendanceData}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={onSubmit}
      />
      <CustomModal showModal={showModal} modalMessage={modalMessage} />
    </>
  );
};

export default AttendanceFormEditContainer;
