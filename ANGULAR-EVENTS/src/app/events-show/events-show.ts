import { Component } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'events-show',
  imports: [DatePipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  title = 'Lista de eventos';
  events: IEvent[] = [
    {
      title: 'Evento de prueba 1',
      image:' ',
      date: '2025-12-25',
      description: 'Navidad ho ho ho',
      price: 35,
    },
    {
      title: 'Evento de prueba 2',
      image:' ',
      date: '2026-01-01',
      description: '¡Año nuevo 2026!',
      price: 45,
    },
  ];
}
