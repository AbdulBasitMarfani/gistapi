import dayjs from "dayjs";

const getFormattedDate = (date) => dayjs(date).format("DD/MM/YYYY");

export { getFormattedDate };
