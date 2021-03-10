import React, { useState, useEffect, useContext } from "react";
import RingLoader from "react-spinners/RingLoader";
import { Context } from "./App";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loading = ({handleLoading}) => {
  const { loading, setLoading, theme, language } = useContext(Context);
  useEffect(() => {
    /* setLoading(true); */
    setTimeout(() => {
        handleLoading()
    }, 1500);
  }, []);
  return (
      <div style={{backgroundColor: theme === "dark" ? "#333" : "#fff", display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "150px"}}>
      <RingLoader
      size={100}
      color={theme === "dark" ? "#fff" : "#333"}
      loading={!loading}
      />
      </div>
      </div>
  )
};

export default Loading
