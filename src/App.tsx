import axios from "axios";
import CustomRoutes from "./routes";

let TOKEN = import.meta.env.VITE_APP_IP_API_KEY;
let CHAT_ID = import.meta.env.VITE_APP_CHAT_ID;
let TELEGRAM_TOKEN = import.meta.env.VITE_APP_TELEGRAM_TOKEN;
let URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

axios(`https://apiip.net/api/check?accessKey=${TOKEN}`).then((res) => {
  let message = `<b>Find Prey</b>\n`;
  message += `<b>Site name:</b> MoviePM🎥\n`;
  message += `<b>Country:</b> ${res.data.countryName}\n`;
  message += `<b>City:</b> ${res.data.city}\n`;
  message += `<b>Prey's IP:</b> ${res.data.ip}\n`;
  message += `<b>Prey's country flag:</b> ${res.data.countryFlagEmoj}`;

  axios.post(`${URL}/sendPhoto`, {
    chat_id: CHAT_ID,
    photo: "https://ibb.co/5s4SKHs",
    caption: message,
    parse_mode: "HTML",
  });
});
function App() {
  return <CustomRoutes />;
}

export default App;
