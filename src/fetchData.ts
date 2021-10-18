import fetch from "node-fetch";

const getUser = (userId: number) =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`${response.status} Error`);
      } else {
        return response.json();
      }
    }
  );

getUser(2)
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("--Completed--");
  });

const main = async () => {
  try {
    const user = await getUser(2);
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("-- Complete --");
  }
};

main();
