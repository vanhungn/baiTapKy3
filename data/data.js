const users = [
    {
      id: 1,
      email: "exam1@gmail.com",
      password: "password",
      role: 1,
      status: "active",
      info: {
        name: "name1",
        age: 25,
        phone: "0902223333",
        address: "HN",
        favorites: ["fav1", "fav2", "fav3"],
      },
    },
    {
      id: 2,
      email: "exam2@gmail.com",
      password: "password",
      role: 2,
      status: "active",
      info: {
        name: "name2",
        age: 22,
        phone: "0902223333",
        address: "HN",
        favorites: ["fav1", "fav2"],
      },
    },
    {
      id: 3,
      email: "exam3@gmail.com",
      password: "password",
      role: 1,
      status: "pending",
      info: {
        name: "name3",
        age: 20,
        phone: "",
        address: "SG",
        favorites: ["fav1", "fav2", "fav3", "fav4"],
      },
    },
    {
      id: 4,
      email: "exam4@gmail.com",
      password: "password",
      role: 2,
      status: "pending",
      info: {
        name: "name4",
        age: 15,
        phone: "0908889955",
        address: "SG",
        favorites: ["fav1"],
      },
    },
    {
      id: 5,
      email: "exam5@gmail.com",
      password: "password",
      role: 2,
      status: "pending",
      info: {
        name: "name5",
        age: 30,
        phone: "0908889955",
        address: "HP",
        favorites: ["fav1"],
      },
    },
    {
      id: 6,
      email: "exam6@gmail.com",
      password: "password",
      role: 2,
      status: "active",
      info: {
        name: "name6",
        age: 26,
        phone: "",
        address: "HP",
        favorites: ["fav1"],
      },
    },
  ];

  module.exports = users;