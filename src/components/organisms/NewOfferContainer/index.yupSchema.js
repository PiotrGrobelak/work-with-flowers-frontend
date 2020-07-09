import * as Yup from 'yup';

export const AddOfferSchema = Yup.object().shape({
  type: Yup.string().required('Wybierz stanowisko'),
  title: Yup.string()
    .min(2, 'Minimalna liczba znaków to 2')
    .max(60, 'Maksymalna liczba znaków to 60')
    .required('Uzupełnij pole'),
  companyName: Yup.string()
    .min(1, 'Minimalna liczba znaków to 1')
    .max(20, 'Maksymalna liczba znaków to 20')
    .required('Uzupełnij pole'),
  city: Yup.string()
    .max(30, 'Maksymalna liczba znaków to 30')
    .required('Uzupełnij pole'),
  adress: Yup.string()
    .max(40, 'Maksymalna liczba znaków to 40')
    .required('Uzupełnij pole'),
  email: Yup.string().email('Niepoprawny e-mail').required('Podaj e-mail'),
  about: Yup.string()
    .min(10, 'Minimalna liczba znaków to 10')
    .max(600, 'Maksymalna liczba znaków to 600')
    .required('Uzupełnij pole'),
  description: Yup.string()
    .min(10, 'Minimalna liczba znaków to 10')
    .max(600, 'Maksymalna liczba znaków to 600')
    .required('Uzupełnij pole'),
  requirements: Yup.array()
    .of(
      Yup.string()
        .min(3, 'Minimalna liczba znaków to 3')
        .max(50, 'Maksymalna liczba znaków to 30'),
    )
    .test('test-one', 'Uzupełnij pola', function (item) {
      const isNotUndefined = !item.some((filed) => filed === undefined);
      return isNotUndefined;
    })
    .min(0)
    .max(10, 'Maksymalna liczba pól to 10')
    .required('Podaj przynajmniej jedno wymagnie'),
});
