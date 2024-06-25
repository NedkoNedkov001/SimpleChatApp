export const controller = {};

controller.home = async (req, res) => {
  const data = { title: "SimpleChatApp", page: "../home/index" };
  return res.render("shared/layout", data);
};

controller.chat = async (req, res) => {
  const data = { title: "Chats", page: "../home/chat" };
  return res.render("shared/layout", data);
};
