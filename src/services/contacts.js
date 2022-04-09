import axios from "axios";

async function getEmailsList() {
  try {
    const config = {
      method: "get",
      url: "http://localhost:5001/api/contacts",
      headers: {
        Authorization: `Basic ${process.env.REACT_APP_BASIC_AUTH}`,
      },
    };
    const { data } = await axios(config);
    return data.map((contact) => contact.email);
  } catch (e) {
    console.log(e.stack);
  }
}
const contactsService = {
  getEmailsList,
};

export default contactsService;
