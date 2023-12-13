const mainContainer = document.createElement("main");
mainContainer.classList.add("container");
document.body.append(mainContainer);

const showUser = (users) => {
  users.slice(0, 15).forEach((userInfo) => {
    const userContainer = document.createElement("div");
    userContainer.classList.add("user-container");
    // document.body.append(userContainer);
    mainContainer.append(userContainer);

    const userName = document.createElement("p");
    userName.classList.add(".user-name");
    // userName.innerText = `Vorname: ${userInfo.firstName}`;
    userName.innerHTML = `<strong>Vorname: </strong> ${userInfo.firstName}`;

    const userSurname = document.createElement("p");
    userSurname.classList.add(".user-surname");
    // userSurname.innerText = `Nachname: ${userInfo.lastName}`;
    userSurname.innerHTML = `<strong>Nachname: </strong> ${userInfo.lastName}`;

    const userAge = document.createElement("p");
    userAge.classList.add(".user-age");
    // userAge.innerText = `Alter: ${userInfo.age}`;
    userAge.innerHTML = `<strong>Alter: </strong> ${userInfo.age}`;

    const userMail = document.createElement("p");
    userMail.classList.add(".user-mail");
    // userMail.innerText = `Email: ${userInfo.email}`;
    userMail.innerHTML = `<strong>Email: </strong> ${userInfo.email}`;

    const userPhone = document.createElement("p");
    userPhone.classList.add(".user-phone");
    // userPhone.innerText = `Telefonnummer: ${userInfo.phone}`;
    userPhone.innerHTML = `<strong>Telefonnummer: </strong> ${userInfo.phone}`;

    const userAvatar = document.createElement("img");
    userAvatar.classList.add(".user-img");
    userAvatar.src = userInfo.image;

    userContainer.append(
      userAvatar,
      userName,
      userSurname,
      userAge,
      userMail,
      userPhone
    );
  });
};

const fetchProduct = (callback) =>
  fetch(`https://dummyjson.com/users`)
    .then((responce) => responce.json())
    .then((data) => callback(data.users));

fetchProduct((user) => showUser(user));
