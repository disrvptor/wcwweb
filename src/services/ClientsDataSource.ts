import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Client } from 'src/models/Client';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ClientsService } from './ClientsService';
import { catchError, finalize } from 'rxjs/operators';

export class ClientsDataSource implements DataSource<Client> {

	private clientsSubject = new BehaviorSubject<Client[]>([]);
	private loadingSubject = new BehaviorSubject<boolean>(false);

	public loading$ = this.loadingSubject.asObservable();

	constructor(private clientsService: ClientsService) { }

	connect(collectionViewer: CollectionViewer): Observable<Client[]> {
		return this.clientsSubject.asObservable();
	}

	disconnect(collectionViewer: CollectionViewer): void {
		this.clientsSubject.complete();
		this.loadingSubject.complete();
	}

	loadClients() {
		this.loadingSubject.next(true);
		this.clientsService.getClients().pipe(
			catchError(() => of([])),
			finalize(() => this.loadingSubject.next(false))
		)
		.subscribe(clients => this.clientsSubject.next(clients));
	}
}
