const aside = document.querySelector("aside");
const menu = document.getElementById("menu-btn");
const close = document.getElementById("close-btn");
const toggler = document.querySelector(".theme-toggler")

menu.addEventListener("click", () =>{
    aside.style.display = "block";
})

close.addEventListener("click", () =>{
    aside.style.display = "none";
})

toggler.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme-variables")

    toggler.querySelector("span:nth-child(1)").classList.toggle("active");
    toggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

// Fill Orders in table
orders.forEach(order =>{
    const tr = document.createElement("tr");
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class='${order.shipping === "Declined" ? "danger" : order.shipping ==="Pending" ? "warning" : "primary"}'>${order.shipping}</td>
                        <td class="primary">Details</td>

                     `;
    
     tr.innerHTML = trContent;
     document.querySelector("table tbody").appendChild(tr);
})