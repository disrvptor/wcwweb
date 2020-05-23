import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/models/Client';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ClientsService {

	constructor(private http: HttpClient) { }

	getClients(): Observable<Client[]> {
		return this.http.get(environment.api + '/clients').pipe(
			map(res => {
				var clients = res as Client[];
				// Filter out duplicates
				clients = clients.filter(function (elem, index, self) {
					return index === self.findIndex(client => {
						return elem.name === client.name
							&& elem.mac === client.mac
							&& elem.ip === client.ip
							&& elem.online === client.online
					});
				})
				// Sort by name first
				clients.sort((c1,c2) => c1.name.localeCompare(c2.name))
				// Sort by online/offline second
				clients.sort((c1, c2) => c1.online==c2.online ? 0 : c1.online ? -1 : 1)
				return clients;
			})
		);
	}

	getIgnoredMACs(): Observable<string[]> {
		return this.http.get(environment.api + '/clients?action=ignored').pipe(
			map(res => res as any)
		);
	}

}
