import { Component, OnInit } from '@angular/core';
import { ClientsDataSource } from 'src/services/ClientsDataSource';
import { ClientsService } from 'src/services/ClientsService';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// const ELEMENT_DATA: Client[] = [
// 	{ name: 'client 1', mac: '00:00:00:00:00', ip: '127.0.0.1', online: true, ignored: false },
// 	{ name: 'client 2', mac: '00:00:00:00:00', ip: '127.0.0.1', online: false, ignored: false },
// 	{ name: 'client 3', mac: '00:00:00:00:00', ip: '127.0.0.1', online: true, ignored: false },
// 	{ name: 'client 4', mac: '00:00:00:00:00', ip: '127.0.0.1', online: false, ignored: false },
// ];

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
	displayedColumns: string[] = ['name', 'mac', 'ip', 'online', 'ignored'];
	//dataSource = ELEMENT_DATA;
	dataSource: ClientsDataSource;

	subscription: Subscription

	constructor(private clientsService: ClientsService) { }

	ngOnInit() {
		this.dataSource = new ClientsDataSource(this.clientsService);
		this.dataSource.loadClients();
		// this.subscription = timer(0, 10000).pipe(
		// 	switchMap(() => this.dataSource.loadClients())
		// ).subscribe(result => this.statustext = result);
	}

	ngOnDestroy() {
		// this.subscription.unsubscribe();
	}
}
