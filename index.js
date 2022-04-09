btn.onclick = () => {
  fetch("https://api.github.com/users/" + champ.value)
    .then((response) => response.json())
    .then((data) => {
      output.textContent = "";
      output.textContent = `Compte de ${data.name}`;
      const img = document.createElement("img");
      img.src = data.avatar_url;
      img.width = "100";
      output.appendChild(img);
    });
};
