/* User Test Object */
const usr = {
  "name": "Micah Lindley",
  "username": "-archon-",
  "color": "#fff",
  "pic": "img/user-test.jpeg",
  "description": "I'm a web developer and programmer who built this platform.",
  "designs": ["QwErTy", "AsDfGh", "ZxCvBn"],
  "design": {"QwErTy": "https://cdn.dribbble.com/users/3281409/screenshots/9430198/media/89c017940ae79b797d5d3397a78e1f0d.jpeg", "AsDfGh": "https://cdn.dribbble.com/users/3281409/screenshots/8358416/media/aac76b8e826f0f7bb9b3074a3c981358.jpeg", "ZxCvBn": "https://cdn.dribbble.com/users/3281409/screenshots/7824155/media/1e32f7b274e29ad23ff074b17938464e.jpeg"}
}

/* Code */

document.getElementById('username').innerText = usr["username"];
document.getElementById('body').style.backgroundColor = usr["color"];
document.getElementById('profilePic').src = usr["pic"];
document.getElementById('desc').innerText = usr["description"];

usr.designs.forEach(renderDesigns);

function renderDesigns(item, index) {
  var designs = document.getElementById('renderDesigns');
  console.log(item);
  var img = document.createElement("IMG"); 
  img.src = usr.design[item];
  designs.appendChild(img);
  var br = document.createElement("BR"); 
  designs.appendChild(br);
  var br = document.createElement("BR"); 
  designs.appendChild(br);
}