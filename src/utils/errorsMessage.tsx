import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function errorsMessage(message: string) {
  if (message === "Request failed with status code 409")
    return toast.error("Entity already exists!");

  if (message === "Request failed with status code 422")
    return toast.error("Check the submitted format!");

  if (message === "Request failed with status code 400")
    return toast.error("Check the submitted format!");

  if (message === "Request failed with status code 401")
    return toast.error("You are not allowed to do this!");

  if (message === "Request failed with status code 404")
    return toast.error("Check the data! Any of them is incorrect.");

  return toast.error("Failed! Try again!");
}
