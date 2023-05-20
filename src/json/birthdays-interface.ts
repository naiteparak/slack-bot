interface Employee {
  name: string;
  email: string;
  birthday: string;
}

export default interface SupervisorData {
  supervisor: string;
  employees: {
    [employeeId: string]: Employee;
  };
}
