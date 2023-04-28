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
): { budget: number; salary: number; percent: number } => {
  const noTaxWage = calculateIncomeNoTax(reqSalary, percentage);
  const taxWage = calculateIncomeWithTax(reqSalary, percentage);
  switch (isTax) {
    case false:
      return {
        budget: reqSalary,
        salary: noTaxWage,
        percent: Math.abs(noTaxWage - reqSalary),
      };
    case true:
      return {
        budget: taxWage,
        salary: reqSalary,
        percent: Math.abs(reqSalary - taxWage),
      };
    default:
      return {
        budget: 0,
        salary: 0,
        percent: 0,
      };
  }
};


  export const formatMoneyInput = (value: string | number): string => {
    if (!value) return value.toString();
    const numbers = value.toString().replace(/[^\d]/g, '');
    return parseInt(numbers).toLocaleString('ru-RU');
  };

  export const dEformatMoneyInput = (value: string): number => {
    if (!value) return 0;
    const numbers = value.replace(/\s/g, '');
    return +numbers;
  }