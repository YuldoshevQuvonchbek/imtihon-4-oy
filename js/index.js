const BASE_URL = "http://localhost:3004";

let elUsersList = document.querySelector(".list-job");

async function request(path) {
  let res = await fetch(BASE_URL + path);

  let data = await res.json();

  return data;
}
async function getUsers() {
  let jobs = await request("/jobs");

  renderData(jobs);
}

function renderData(arr) {
  arr.forEach((element) => {
    let elLi = document.createElement("li");

    elLi.textContent = element.name;
    elUsersList.append(elLi);
  });
}

function renderer() {
  elUsersList.innerHTML = null;

  for (let i = 0; i < BASE_URL.length; i++) {
    var elLi = document.createElement("li");

    elLi.innerHTML = `
      <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${BASE_URL.jobs[i].job_title}</h5>
                    <h6 class="card-subtitle mb-3 text-body-secondary">
                      Salary:${BASE_URL.jobs[i].salary}
                    </h6>
                    <div>
                      <p class="m-0 text-body-secondary">
                        Company: ${BASE_URL.jobs[i].job_title}
                      </p>
                      <p class="m-0 text-body-secondary">
                        Location: ${BASE_URL.jobs[i].job_title}
                      </p>
                    </div>
                    <div class="d-flex">
                      <button href="#" class="btn btn-danger ms-auto">
                        Delete
                      </button>
                      <button href="#" class="btn btn-success ms-2">
                        More...
                      </button>
                    </div>
                  </div>
                </div>
    `;

    elUsersList.appendChild(elLi);
  }
}

getUsers();
