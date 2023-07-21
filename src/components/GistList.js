import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPublicGists } from "../services/gistService";
import { gitsLoading, setGists } from "../redux/slices/gitsSlice";
import styled from "styled-components";
import Gist from "./Gist";

const GistList = () => {
  const dispatch = useDispatch();
  const { gistsList, isLoading } = useSelector((state) => state.gistsSlice);
  console.log("isLoading: ", isLoading);
  console.log("gitsList: ", gistsList);

  const fetchGistList = async () => {
    try {
      dispatch(gitsLoading(true));
      const { data } = await getPublicGists();
      dispatch(setGists(data));
    } catch (err) {
      dispatch(gitsLoading(false));
    } finally {
      dispatch(gitsLoading(false));
    }
  };

  useEffect(() => {
    fetchGistList();
  }, []);

  if (isLoading) return "Loading....";

  return (
    <GistListWrapper>
      {gistsList.map((gist, index) => (
        <Gist {...gist} key={index} />
      ))}
    </GistListWrapper>
  );
};

const GistListWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export default GistList;
