const clients = [40, 10, 20, 30, 20, 50, 30, 20, 10, 10, 10];
const washMachines = 2;

const calc = (clients, machinesCount) => {
  let time = 0;
  let currClients = clients.slice(0, machinesCount);
  clients = clients.slice(machinesCount);
  while (currClients.length) {
    const minTime = currClients.reduce((min, curr) =>
      min < curr ? min : curr
    );
    time += minTime;
    currClients = currClients
      .map((client) => client - minTime)
      .filter((client) => client);
    while (currClients.length < machinesCount && clients.length) {
      const newClient = clients.shift();
      currClients.push(newClient);
    }
  }
  return time;
};

const res = calc(clients, washMachines);
console.log(res);
