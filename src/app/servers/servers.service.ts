export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'ProductionServer',
      status: 'online'
    },
    {
      id: 2,
      name: 'TestServer',
      status: 'offline'
    },
    {
      id: 3,
      name: 'DevServer',
      status: 'offline'
    }
  ];

  getServers() {
    return this.servers.slice();
  }

  getServer(id: number) {
    const server = this.servers.find(s => {
      return s.id === id;
    });
    return server;
  }

  updateServer(serverData: { id: number; name: string; status: string }) {
    const server = this.servers.find(s => {
      return s.id === serverData.id;
    });
    if (server) {
      server.name = serverData.name;
      server.status = serverData.status;
    }
  }
}
