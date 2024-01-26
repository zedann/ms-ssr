/**
 *
 * @param {success | error} type
 * @param {string} msg
 */
const hideAlert = () => {
  const el = document.querySelector(".alert");
  console.log(el);
  if (el) {
    el.parentElement.removeChild(el);
  }
};
const showAlert = (type, msg) => {
  hideAlert();
  if (type === "success") type = "primary";
  else type = "danger";
  const markup = `<div class="alert alert-${type} text-center" role="alert">${msg}</div>`;
  document.querySelector("nav").insertAdjacentHTML("afterend", markup);
  window.setTimeout(hideAlert, 5000);
};
const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:5555/api/v1/users/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      showAlert(res.data.status, "تم تسجيل الدخول بنجاح");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (error) {
    showAlert("error", error.response.data.message);
  }
};
if (document.querySelector(".form")) {
  document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("here login1");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });
}
