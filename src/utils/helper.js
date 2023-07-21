import dayjs from "dayjs";
import { DEBOUNCE_TIMEOUT } from "./contant";

const getFormattedDate = (date) => dayjs(date).format("DD/MM/YYYY");

const debounceFunction = () => {
  let timeoutId = null;
  return (callback) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, DEBOUNCE_TIMEOUT);
  };
};

const debounce = debounceFunction();

const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export { getFormattedDate, debounce, isEmpty };
