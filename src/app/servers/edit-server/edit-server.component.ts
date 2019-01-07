import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverId;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.serverId = this.server.id;
  }

  onUpdateServer() {
    this.serversService.updateServer({ id: this.serverId, name: this.serverName, status: this.serverStatus });
  }
}
