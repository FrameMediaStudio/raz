function openForm(pkg) {
  document.getElementById("packageInput").value = pkg;
  document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

function openProject(name) {
  document.getElementById("modal").style.display = "block";

  document.getElementById("modalContent").innerHTML = `
    <h2>${name}</h2>
    <p>This is a detailed preview of the ${name} website.</p>
    <p>Includes services, pricing, and contact sections.</p>
  `;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
