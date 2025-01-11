

function Properties(jsonObject) {
  const keys = Object.keys(jsonObject);

  return keys.length;
}

const user = {
  name: "abd karkash",
  email: "abdkarkash@gmail.com",
  age: 27

};

const Propertiesnum = Properties(user);

console.log( Propertiesnum);