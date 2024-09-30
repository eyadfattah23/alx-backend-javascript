export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees).flat();

  return {
    [Symbol.iterator]() {
      let step = 0;
      return {
        next() {
          if (step < employees.length) {
            const result = { value: employees[step], done: false };
            step += 1;
            return result;
          }
          return { done: true };
        },
      };
    },
  };
}
