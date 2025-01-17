import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Octicon from "react-octicon";
import styled from "styled-components";
import { getGistForUser, getPublicGists } from "services/gistService";
import { gistsLoading, setGists, setGistsError } from "redux/slices/gistsSlice";
import { isEmpty, debounce } from "utils/helper";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  /** If search gets empty get all gist */
  const getGists = async () => {
    dispatch(gistsLoading(true));
    dispatch(setGistsError(false));
    try {
      const { data } = await getPublicGists();
      dispatch(setGists(data));
    } catch (error) {
      console.error(error);
      dispatch(setGistsError(true));
    } finally {
      dispatch(gistsLoading(false));
    }
  };

  /** Get gist on the basis of value*/
  const searchUser = async (value) => {
    dispatch(setGistsError(false));
    if (isEmpty(value)) {
      dispatch(setGists([]));
      getGists();
      return;
    }
    try {
      dispatch(gistsLoading(true));
      const { data } = await getGistForUser(value);
      dispatch(setGists(data));
    } catch (error) {
      dispatch(setGistsError(true));
      console.error(error);
    } finally {
      dispatch(gistsLoading(false));
    }
  };

  /**
   * Change handler for search field
   */
  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
    debounce(() => searchUser(value));
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={searchValue}
          onChange={handleChange}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;
