function Table({ children }) {
  return (
    <div className="border border-border/35 rounded-2xl px-7 bg-white shadow-lg">
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 min-w-0">
          <table>{children}</table>
        </div>
      </div>
    </div>
  );
}

export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
