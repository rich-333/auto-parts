export function StatusBadge({ isActive }) {
  const statusText = isActive ? 'Activa' : 'Inactiva';
  const bgColor = isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700';

  return (
    <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${bgColor}`}>
      {statusText}
    </span>
  );
}