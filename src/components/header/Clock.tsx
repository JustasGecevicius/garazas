import Clock from 'react-live-clock';

export function ClockComponent() {
  return (
    <Clock
      format='HH:mm:ss'
      ticking
      timezone='Europe/Vilnius'
    />
  );
}
