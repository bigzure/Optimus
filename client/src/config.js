import dotenv from "dotenv";

dotenv.config();

const config = {
  api_host: process.env.REACT_APP_API_HOST,
  site_title: process.env.REACT_APP_SITE_TITLE,
};

export { config };
