const express = require("express");
const dataRoutes = require("./routes/dataRoutes");
const reportRoutes = require("./routes/reportRoutes");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use("/api/data", dataRoutes);
app.use("/api/report", reportRoutes);

mongoose
  .connect(
    "mongodb+srv://shrimaliaditya:YvvbnmxXnF9Kd2Wr@cluster1.bfp0gl7.mongodb.net/data_lead?retryWrites=true&w=majority&appName=Cluster1",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
