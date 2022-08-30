import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="spokes" color="#0000FF" height={200} width={100} />;
    </div>
  );
};

export default Loading;
