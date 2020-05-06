import TableComponent from "../components/table/table";
import { getAll } from "../services/API";
import { useState, useEffect } from "react";

const TableContainer = ({ name, attributes }) => {
  const [data, setData] = useState([]);

  const fillData = () => {
    console.log("Fillam");

    getAll(name)
      .then(res => res.json())
      .then(res => {
        setData(res);
        return res;
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fillData();
  }, []);

  //   return null;
  return <TableComponent attributes={attributes} data={data} />;
};

export default TableContainer;
