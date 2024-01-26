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
    console.log(res);
  } catch (error) {
    console.log(error);
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
