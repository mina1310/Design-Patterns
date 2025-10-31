export function activeEmployeIterator(employees) {
  let index = 0;
  function hasNext() {
    while (index < employees.length) {
      if (employees[index].active) {
        return true;
      }
      index++;
    }
    return false;
  }
  function next() {
    return hasNext() ? employees[index++] : null;
  }
  return { hasNext, next };
}
