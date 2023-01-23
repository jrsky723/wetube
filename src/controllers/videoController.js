import Video from "../models/Video";

/* 
console.log("start");
Video.find({}, (error, videos) => {
  if(error) {
    return res.render("server-error");
  }
  return res.render("home",  { pageTitle: "Home", videos });
});
console.log("finished")
*/

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
  } catch {
    return res.render("server-error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching: ${video.title}` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  res.render("edit", { pageTitle: `Editing: ${video.title}` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
