import React from "react";
import moment from "moment";

const Job = ({ company, createdAt }) => {
  const date = moment(createdAt);
  let Fdate = date.format("MMM Do, YYYY");

  return (
    <div>
        <h3>{company}</h3>
        <h3>{Fdate}</h3>
    </div>
    
  )
};

export default Job;
