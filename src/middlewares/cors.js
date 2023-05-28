const permission = async(response) => {
  await response.header("Access-Control-Allow-Origin", "*")
  await response.header("Access-Control-Allow-Credentials", "true");
  await response.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  await response.header("Access-Control-Allow-Headers", "*")
}

export {permission}