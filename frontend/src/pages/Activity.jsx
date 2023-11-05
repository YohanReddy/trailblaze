import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActivity } from "../Redux/Activity/action";

export const Activity = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getActivity()).then((res) => {
      console.log(res, "res");
    });
  }, []);
  return <div>Activity</div>;
};
