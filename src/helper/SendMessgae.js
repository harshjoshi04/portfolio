import axios from "axios";

export function SendMessageApi(obj) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("deb");
      const { data } = axios.post("/api/message", obj);
      console.log(data);
      resolve(obj);
    } catch (er) {
      if (er) {
        console.log(er);
        reject(er);
      }
    }
  });
}
