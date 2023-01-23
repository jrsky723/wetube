import "./db";
import "./models/Video";
import app from "./server";

const PORT = 3000;

const handleListening = () => console.log(`server listening ports http://localhost:${PORT}`);

app.listen(PORT, handleListening);
