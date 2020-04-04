// document.getElementsById('button1').addEventListener('click', loadTxt);
//
// document.getElementsById('button2').addEventListener('click', loadJSON);
document.getElementById('button3').addEventListener('click', REST);

// function loadTxt() {
//   fetch('data.txt')
//   .then(function(response){
//     return response.text();
//   })
//   .then(function(data){
//     console.log(data);
//     document.getElementById('result').innerHTML = data;
//   })
//   .catch(function(error){
//     console.log(error);
//   })
//
//
// }
function REST(){
  fetch('https://picsum.photos/list')
  .then(function(response){
     return response.json();
 })
 .then(function(images){
   let html = '';
   images.forEach(function(image){
     html += ` <li> <a target="_blank" href="${image.post_url}">View</a>
     ${image.author}
     </li>
     `;
   });
   document.getElementById('result').innerHTML=html;
 })
 .catch(function(error){
   console.log(error)
 })
}
