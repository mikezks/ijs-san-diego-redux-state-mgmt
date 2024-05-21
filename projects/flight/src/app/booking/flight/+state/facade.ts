import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { ticketActions } from "./actions";
import { ticketFeature } from "./ngrx-store/reducer";
import { FlightFilter } from "../logic/model/flight-filter";
import { Flight } from "../logic/model/flight";
import { injectTicketStore } from "./ngrx-signals/tickets.signal.store";


export function injectTicketsFacade() {
  const store = injectTicketStore();

  return {
    flights: store.flightEntities,
    search: (filter: FlightFilter) =>
      store.dispatch(ticketActions.flightsLoad(filter)),
    update: (flight: Flight) =>
      store.dispatch(ticketActions.flightUpdate({ flight })),
    reset: () =>
      store.dispatch(ticketActions.flightsClear())
  };
}
