import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Octicon from "react-octicon";
import styled from "styled-components";
import { getGistForUser, getPublicGists } from "services/gistService";
import { gitsLoading, setGists, setGitsError } from "redux/slices/gitsSlice";
import { isEmpty, debounce } from "utils/helper";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  /**
   * change handler for search field
   */
  const handleChange = ({ target: { value } }) => {
    setSearchValue(value);
    debounce(() => searchUser(value));
  };

  /**
   * get all gists
   */
  const getGists = async () => {
    dispatch(gitsLoading(true));
    dispatch(setGitsError(false));
    try {
      const { data } = await getPublicGists();
      dispatch(setGists(data));
    } catch (error) {
      console.error(error);
      dispatch(setGitsError(true));
    } finally {
      dispatch(gitsLoading(false));
    }
  };

  /**
   * callback for search
   */
  const searchUser = async (value) => {
    console.log("value: ", value);
    dispatch(setGitsError(false));
    if (isEmpty(value)) {
      dispatch(setGists([]));
      getGists();
      return;
    }
    try {
      dispatch(gitsLoading(true));
      const { data } = await getGistForUser(value);
      dispatch(setGists(data));
    } catch (error) {
      dispatch(setGitsError(true));
      console.error(error);
    } finally {
      dispatch(gitsLoading(false));
    }
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
