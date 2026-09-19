const users = [
  ["Aarav Mehta","IB-10024","Active","18 Sep 2026"],
  ["Priya Shah","IB-10023","Pending","18 Sep 2026"],
  ["Rahul Nair","IB-10022","Active","17 Sep 2026"],
  ["Ananya Rao","IB-10021","Active","17 Sep 2026"],
  ["Vikram Singh","IB-10020","Pending","16 Sep 2026"]
];

const reviews = [
  ["IB-10023","Priya Shah","Identity review pending"],
  ["IB-10020","Vikram Singh","Documents awaiting review"],
  ["IB-10017","Neha Patel","Account verification pending"]
];

const orders = [
  ["DEMO-4182","RELIANCE","Buy • 5 shares"],
  ["DEMO-4181","TCS","Buy • 2 shares"],
  ["DEMO-4179","INFY","Sell • 3 shares"]
];

document.getElementById("userTable").innerHTML = users.map(u => `
  <tr><td><strong>${u[0]}</strong></td><td>${u[1]}</td>
  <td><span class="badge ${u[2].toLowerCase()}">${u[2]}</span></td><td>${u[3]}</td></tr>
`).join("");

document.getElementById("reviewList").innerHTML = reviews.map(r => `
  <div class="review"><div><b>${r[1]}</b><small>${r[0]} • ${r[2]}</small></div><span class="badge pending">Review</span></div>
`).join("");

document.getElementById("orderList").innerHTML = orders.map(o => `
  <div class="order"><div><b>${o[1]}</b><small>${o[0]} • ${o[2]}</small></div><span class="badge active">Demo</span></div>
`).join("");

const sidebar = document.getElementById("sidebar");
document.getElementById("menuBtn").addEventListener("click", () => sidebar.classList.toggle("open"));
document.querySelectorAll(".sidebar a").forEach(link => link.addEventListener("click", () => sidebar.classList.remove("open")));

document.querySelectorAll(".control").forEach(button => {
  button.addEventListener("click", () => {
    alert("Starter interface only. Connect secure authentication and a backend before enabling this admin action.");
  });
});
