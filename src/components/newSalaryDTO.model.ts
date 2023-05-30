export interface FullUser {
  id: string;
  salaryUser: {
    id: string;
    expertise: number;
    responsibility: number;
    hoursPerWeek: number;
    startDate: number;
    employee: boolean;
    hibernateLazyInitializer: {};
  };
  name: string;
  surname: string;
  mail: string;
}
