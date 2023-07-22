import dayjs from "dayjs";
import { DEBOUNCE_TIMEOUT } from "./constant";

/**
 * Get date and return string formatted date
 * @param {*} date
 * @param {string} date format
 * @returns {string} formatted date
 */
const getFormattedDate = (date, format) => dayjs(date).format(format);

/** To delay the execution of func */
const debounceFunction = () => {
  let timeoutId = null;
  return (callback) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, DEBOUNCE_TIMEOUT);
  };
};

const debounce = debounceFunction();

/**
 * It check if the given data is empty or not
 * @param {any} value any data
 * @returns {Boolean} true/false based on condition
 */
const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export { getFormattedDate, debounce, isEmpty };
