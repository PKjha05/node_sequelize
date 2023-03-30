import app from "./server.js";
import syncModels from "./dbsync.js";

syncModels();

const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  console.log("listening on port " + port);
});
