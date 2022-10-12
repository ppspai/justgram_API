const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 2,
  },
];

const createUser = (req, res) => {
  const { name, email, password } = req.body;

  const userData = {
    id: users.length + 1,
    name,
    email,
    password,
  };

  users.push(userData);
  res.json({ message: "userCreated" });
};

const createPost = (req, res) => {
  const { title, content, userId } = req.body;

  const postData = {
    id: posts.length + 1,
    title,
    content,
    userId,
  };

  posts.push(postData);
  res.json({ message: "postCreated" });
};

const checklist = (req, res) => {
  const list = [];

  users.forEach((uElement, uIdx) => {
    posts.forEach((pElement, pIdx) => {
      if (uElement.id === pElement.userId) {
        const listData = {
          userID: uElement.id,
          userName: uElement.name,
          postingId: pElement.id,
          postingTitle: pElement.title,
          postingContent: pElement.content,
        };
        list.push(listData);
      }
    });
  });
  res.json(list);
};

module.exports = { createUser, createPost, checklist };
