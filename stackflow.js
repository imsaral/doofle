var qwe
var str = "how to use google maps api";
var oReq;
var index = 0,
  index2 = 0;
var answerIds = [];
var questionIds = [];
var questions = [];
var keywords = [];
var keySearch = "";
function reqListener1() {
  var obj = JSON.parse(this.responseText);
  console.log(obj);
  let i;
  for (i in obj.items) {
    if (index2 >= 5) break;
    if (obj.items[i].is_answered === true) {
      questionIds[index2] = obj.items[i].question_id;
      questions[index2] = obj.items[i].title;
      console.log(questions[index2]);
      //answerIds[j++] = obj.items[i].accepted_answer_id;
      var oReq1 = new XMLHttpRequest();
      oReq1.addEventListener("load", reqListener2);
      oReq1.open(
        "GET",
        `https://api.stackexchange.com/2.2/questions/${
          questionIds[index2]
        }?order=desc&sort=votes&site=stackoverflow&filter=!-y(KwOdKR5Ga7mmruVArx2SJykc-M)3jKiDQBk1fq`
      );
      oReq1.send();
      index2++;
    }
  }
}
function reqListener3() {
  var obj = JSON.parse(this.responseText);
  console.log(obj);
  let i;
  for (i in obj.items) {
    if (index2 >= 10) break;
    let check = -1;
    for (let j = 0; j < index2; j++) {
      if (questionIds[j] == obj.items[i].question_id) {
        check = 1;
        break;
      }
    }
    if (obj.items[i].is_answered === true && check == -1) {
      questionIds[index2] = obj.items[i].question_id;
      questions[index2] = obj.items[i].title;
      console.log(questions[index2]);
      //answerIds[j++] = obj.items[i].accepted_answer_id;
      var oReq1 = new XMLHttpRequest();
      oReq1.addEventListener("load", reqListener2);
      oReq1.open(
        "GET",
        `https://api.stackexchange.com/2.2/questions/${
          questionIds[index2]
        }?order=desc&sort=votes&site=stackoverflow&filter=!-y(KwOdKR5Ga7mmruVArx2SJykc-M)3jKiDQBk1fq`
      );
      oReq1.send();
      index2++;
    }
  }
}
function reqListener2() {
  var obj = JSON.parse(this.responseText);
  //console.log(obj);
  let i;
  let qid = obj.items[0].question_id;
  for (i = 0; i <= index2; i++) {
    if (questionIds[i] == qid) {
      answerIds[i] = obj.items[0].answers[0].body;
      break;
    }
  }
}
function reqListener() {
  var obj = JSON.parse(this.responseText);
  console.log(obj);
  let i;
  for (i in obj.keywords) {
    keywords[i] = obj.keywords[i].keyword;
    keySearch = "[" + keywords[i].replace(/ /g, "-") + "];";
  }
  oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener3);
  oReq.open(
    "GET",
    `https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=${keySearch}&site=stackoverflow`
  );
  oReq.send();
}
oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener1);
oReq.open(
  "GET",
  `https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=${str}&site=stackoverflow`
);
oReq.send();
oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open(
  "POST",
  `https://apis.paralleldots.com/v3/keywords?api_key=c3QDGriQp9S4DXDVWDqf7wvqazd0B5xHWWCQfEfgCc4&text=${str}`
);
oReq.send();
