const list = document.getElementById("list");
const sites = ["Antools", "Coffee", "Knifes", "Mountains", "Music", "Paper"];
for (let i = 0; i < sites.length; i++) {
    const site = sites[i];
    const link = `<li><a href="sites/${site}/index.html" target="_blank">${site}</a></li>`;
    list.insertAdjacentHTML("beforeend", link);
}
