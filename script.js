function toggleMenu() {
  const navList = document.querySelector('.nav ul');
  navList.classList.toggle('show');
}
function handleSubmit(event) {

  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const coffee = document.getElementById('coffee').value;
  const size = document.querySelector('input[name="size"]:checked').value;
  
  alert(`Thank you ${name}! Your order for a ${size} ${coffee} has been placed successfully.`);

  document.getElementById('orderForm').reset();

  document.getElementById('modal-trigger').checked = false;
}