import { activeEmployeIterator } from "../utils/activeEmployeIteartor";

const employees = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
];

export function EmployeeList() {
  const iterator = new activeEmployeIterator(employees);
  const activeEmployee = [];
  while (iterator.hasNext()) {
    activeEmployee.push(iterator.next().name);
  }

  return (
    <div>
      <h3>
        now we are showing you the list of active employees with iterator
        pattern
      </h3>
      <ul>
        {activeEmployee.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
