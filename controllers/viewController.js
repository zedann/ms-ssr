exports.index = (req, res, next) => {
  try {
    res.render("base", { title: "الصفحة الرائيسية" });
  } catch (error) {
    res.render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.login = (req, res, next) => {
  try {
    res.render("pages/loginPage", { title: "تسجيل الدخول" });
  } catch (error) {
    res.render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.register = (req, res, next) => {
  try {
    res.render("pages/registerPage", { title: "تسجيل طالب" });
  } catch (error) {
    res.render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
exports.task = (req, res, next) => {
  try {
    res.render("pages/tasksPage", { title: "الواجب" });
  } catch (error) {
    res.render("error", { title: "error", msg: "Something Went Wronge!" });
  }
};
