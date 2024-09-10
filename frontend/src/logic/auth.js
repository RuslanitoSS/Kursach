const testUser = {
  id: 1,
  firstName: "Руслан",
  lastName: "Супроткин",
  email: "suprotkinr@gmail.com",
  role: "student",
};

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const authToken = generateAuthToken();

  return [200, { authToken, user: testUser }];
}
export async function login() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const authToken = generateAuthToken();

  return [200, { authToken, user: testUser }];
}

function generateAuthToken() {
  return Math.random().toString(36).substring(2);
}
