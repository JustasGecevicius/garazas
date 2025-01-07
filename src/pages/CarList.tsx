import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { ListElement } from '../components/carListComponents/listElement';

type Props = {};

export function CarList(props: Props) {
  const vehicles = [null, null, null, null];
  const table = useReactTable({
    data: vehicles,
    columns: [],
    getCoreRowModel: getCoreRowModel(),
  });
  return <div></div>;
}
