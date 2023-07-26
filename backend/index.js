const express = require("express");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

// cors 오류 해결 코드
app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get("/getData", (req, res) => {
  const jsonFile = fs.readFileSync("./data/ToDoListData.json", "utf-8");
  res.send(jsonFile);
});

app.post("/postData", (req, res) => {
  const data = req.body;

  const jsonFile = fs.readFileSync("./data/ToDoListData.json", "utf-8");

  // json 형식으로 변환
  const jsonData = JSON.parse(jsonFile);

  jsonData.push(data);
  fs.writeFileSync("./data/ToDoListData.json", JSON.stringify(jsonData));

  res.status(200).send("write ok");
});

app.post("/completeToDoList", (req, res) => {
  const completeData = req.body;

  //object 변수를 배열로 변경
  const completeDataArray = Object.values(completeData);

  const jsonFile = fs.readFileSync("./data/ToDoListData.json", "utf-8");

  // 이미 완료된 데이터 가져오기
  const completeJsonFile = fs.readFileSync("./data/completeData.json", "utf-8");

  // json 형식으로 변환
  let jsonData = JSON.parse(jsonFile);
  let completeJsonData = JSON.parse(completeJsonFile);

  completeJsonData.push(...completeData);

  console.log(completeData);

  completeDataArray.forEach((arrayId) => {
    jsonData = jsonData.filter((item) => arrayId.id != item.id);
  });
  fs.writeFileSync("./data/ToDoListData.json", JSON.stringify(jsonData));
  fs.writeFileSync(
    "./data/completeData.json",
    JSON.stringify(completeJsonData)
  );

  res.status(200).send("complete Ok");
});

// 완료된 데이터 보내기
app.get("/completedGetData", (req, res) => {
  const completeJsonFile = fs.readFileSync("./data/completeData.json", "utf-8");
  res.send(completeJsonFile);
});

app.listen(3000, () => {
  console.log("3000 port server start");
});
