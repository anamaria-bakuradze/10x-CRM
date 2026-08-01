async function fetchClients() {
    try {
        let result = await fetch("https://dummyjson.com/users?limit=30").then((response) => response.json());
        const crm_clients = result.users;
        console.log(crm_clients);
    } catch (error) {
        console.error("Error fetching clients data:", error);
    }
}

fetchClients();
console.log(JSON.parse(localStorage.getItem("crm_users")));

export function users() {
    return crm_users = JSON.parse(localStorage.getItem("crm_users")) || [];
}
