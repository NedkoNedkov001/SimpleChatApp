export const controller = {}

controller.home = async (req, res) => {
    const data = { title: "SimpleChatApp", page: '../home/index' };
    return res.render('shared/layout', data);
  }
