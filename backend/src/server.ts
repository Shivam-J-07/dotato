import { PORT } from "./env.js";
import ExpressConfig from "./appConfig.js";

const app = ExpressConfig();

app.listen(PORT, () =>
  console.log("Server Running on http://localhost:" + PORT)
);
