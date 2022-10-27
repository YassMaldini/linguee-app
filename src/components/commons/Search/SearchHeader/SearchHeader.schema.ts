import * as yup from 'yup';

const getSearchHeaderSchema = () =>
  yup.object().shape({
    search: yup
      .string()
      .matches(/^[aA-zZ\s]+$/)
      .required(),
  });

export default getSearchHeaderSchema;
