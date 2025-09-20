// Simple validation demo
function validateLogin(username, password) {
  if (!username || !password) { console.log("Error: Username and password are required!"); return false; }
  console.log("Login attempt:", username);
  return true;
}
