import DetailComponent from "../components/detail/detail";
import { useEffect, useState } from "react";
import { getAllById, getSingle } from "../services/API";
import Router from "next/router";

const DetailContainer = ({ id, name, subName, attributes }) => {
  const [details, setDetails] = useState([]);
  const [masterData, setMasterData] = useState({});

  const checkSubName = () => {
    if(subName === "users"){
      attributes.splice(attributes.length - 2, attributes.length);
    }
  }

  const getMaster = () => {
    getSingle(name, id)
      .then(res => {
        if (res.status === 401 || res.status === 403)
          Router.push("/users/login");
        if (res.status === 404) {
          // show modal
          Router.push(`/${name}`);
        } else {
          return res.json();
        }
      })
      .then(res => {
        setMasterData(res);
      })
      .catch(err => console.log(err));
  };

  const getDetails = () => {
    getAllById(name, subName, id)
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          Router.push("/users/login");
          throw new Exception("Forbidden call");
        } else {
          return res.json();
        }
      })
      .then(res => {
        setDetails(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    if (id) {
      getMaster();
      getDetails();
    } else {
      checkSubName();
    }
  }, [id]);

  return (
    <DetailComponent
      details={details}
      masterData={masterData}
      id={id}
      name={name}
      subName={subName}
      attributes={attributes}
    ></DetailComponent>
  );
};

export default DetailContainer;
