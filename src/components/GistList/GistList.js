import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Gist } from "components";
import { gistsLoading, setGists, setGistsError } from "redux/slices/gistsSlice";
import { getPublicGists } from "services/gistService";
import { NoDataFound, Skeleton } from "sharedComponets";
import { isEmpty } from "utils/helper";

const API_CRASH_MESSAGE = "Something went wrong";
const NO_GIST_FOUND = "No Gists Found";

export const GistList = () => {
  const dispatch = useDispatch();

  const { gistsList, isLoading, isError } = useSelector(
    (state) => state.gistsSlice
  );

  const fetchGistList = async () => {
    dispatch(setGistsError(false));
    try {
      dispatch(gistsLoading(true));
      const { data } = await getPublicGists();
      dispatch(setGists(data));
    } catch (err) {
      dispatch(setGistsError(true));
    } finally {
      dispatch(gistsLoading(false));
    }
  };

  useEffect(() => {
    fetchGistList();
  }, []);

  /** Show loading when api is fetching gists */
  if (isLoading) return <Skeleton count={4} />;

  /** If api fails show the fall back component
   *  Text can be variable based on error codes
   *  and message return from api
   */
  if (isError) return <NoDataFound text={API_CRASH_MESSAGE} />;

  /**
   * If no data return from api show empty state
   */
  if (isEmpty(gistsList)) return <NoDataFound text={NO_GIST_FOUND} />;

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
