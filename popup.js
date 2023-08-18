const inp = document.getElementById("dataInput");
const out = document.getElementById("content");

inp.addEventListener("change", async function (e) {
  out.textContent = "Loading...";
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://text-analysis12.p.rapidapi.com/summarize-text/api/v1.1",
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "YOUR_API_KEY",
      "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
    },
    processData: false,
    data: JSON.stringify({
      language: "english",
      summary_percent: 20,
      text: inp.value,
    }),
  };

  $.ajax(settings).done(function (response) {
    out.textContent = response.summary;
    console.log(response);
  });
});
