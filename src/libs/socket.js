import io from "socket.io-client";

const connected = false;
let socket;
if (!connected) {
  socket = io("localhost:3030");
}
export default socket;
