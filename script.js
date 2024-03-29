const url = "wss://junyan:elite_392101@mqtt.longan.link:8084/mqtt";
const client = mqtt.connect(url); // create a client

client.on("connect", function () {
  console.log("已连接服务器");
});

function pub_callback() {
  console.log("已提交给服务器!");
  setTimeout(function () {
    alert("提交成功");
    window.location.href = "/guessNumber/success.html";
  }, 500);
  // 重定向页面， 定时器
}

function pub(message) {
  let SubscribeToThreads = document.getElementById(
    "your_SubscribeToThreads"
  ).value;
  let topic = SubscribeToThreads;
  client.publish(topic, message, {}, pub_callback);
}

function submit() {
  console.log("submit!");
  let your_name = document.getElementById("your_name").value;
  let your_number = parseInt(document.getElementById("your_number").value);
  let SubscribeToThreads = document.getElementById(
    "your_SubscribeToThreads"
  ).value;

  if (
    your_name &&
    0 <= your_number &&
    your_number <= 100 &&
    SubscribeToThreads.length > 0
  ) {
    console.log(your_name, your_number);
    pub(your_name + " , " + your_number);
  } else {
    alert("输入有误");
  }
}
