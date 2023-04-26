export const calculateIncomeWithTax = (
  wage: number,
  percentage: number
): number => Math.floor((wage / (100 - percentage)) * 100);

export const calculateIncomeNoTax = (
  wage: number,
  percentage: number
): number => Math.floor((wage * (100 - percentage)) / 100);

export const calculateEmployeeConditions = (
  isTax: boolean,
  reqSalary: number,
  percentage: number
): { budget: number; salary: number; tax: number } => {
  const noTaxWage = calculateIncomeNoTax(reqSalary, percentage);
  const taxWage = calculateIncomeWithTax(reqSalary, percentage);
  switch (isTax) {
    case false:
      return {
        budget: reqSalary,
        salary: noTaxWage,
        tax: Math.abs(noTaxWage - reqSalary),
      };
    case true:
      return {
        budget: taxWage,
        salary: reqSalary,
        tax: Math.abs(reqSalary - taxWage),
      };
    default:
      return {
        budget: 0,
        salary: 0,
        tax: 0
      };
  }
};
