// const path =  require("path");
const io =  new Server(server);

app.use(express.static(path.resolve("./public")));

io.on('connection', (socket) => {
    console.log(" a user connected");
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});