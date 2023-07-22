import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Gist } from "components";
import { gitsLoading, setGists, setGitsError } from "redux/slices/gitsSlice";
import { getPublicGists } from "services/gistService";
import { NoDataFound, Skeleton } from "sharedComponets";
import { isEmpty } from "utils/helper";

export const GistList = () => {
  const dispatch = useDispatch();
  const { gistsList, isLoading, isError } = useSelector(
    (state) => state.gistsSlice
  );
  console.log("isLoading: ", isLoading);
  console.log("gitsList: ", gistsList);

  const fetchGistList = async () => {
    dispatch(setGitsError(false));
    try {
      dispatch(gitsLoading(true));
      const { data } = await getPublicGists();
      dispatch(setGists(data));
    } catch (err) {
      dispatch(setGitsError(true));
    } finally {
      dispatch(gitsLoading(false));
    }
  };

  useEffect(() => {
    fetchGistList();
  }, []);

  if (isLoading) return <Skeleton count={4} />;

  if (isError) return <NoDataFound text={"Something went wrong"} />;

  if (isEmpty(gistsList)) return <NoDataFound text={"No Gists Found"} />;

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
