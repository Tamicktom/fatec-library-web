//* Libraries imports
import { useState, useEffect } from "react";

//* Custom hooks imports
import useDebounce from "./useDebouncer";

/**
 * Hook to get cep data from viacep.com.br API
 *
 * @param cepText Cep text to be validated and used to get data from API
 *
 * @returns cep, the cep text
 * @returns cepData, the cep data from API
 * @returns isCepOk, boolean to check if cep is valid
 * @returns erros, array of errors
 */

export default function useCep(cepText: string) {
  const [cep, setCep] = useState<string>("");
  const [cepData, setCepData] = useState<any>(null);
  const [isCepOk, setCepOk] = useState<boolean>(false);
  const [erros, setErros] = useState<string[]>([]);
  const debouncedText = useDebounce<string>(cepText, 500);

  useEffect(() => {
    if (debouncedText) {
      setErros(validateCep(debouncedText).errors);
      setCepOk(validateCep(debouncedText).errors.length === 0);
      setCep(debouncedText);
    }
  }, [debouncedText]);

  useEffect(() => {
    if (isCepOk) {
      getCep(cep).then((data) => {
        setCepData(data);
      });
    }
  }, [isCepOk]);

  return { cep, cepData, isCepOk, erros };
}

function validateCep(cep: string) {
  const cepRegex = /^\d{5}-\d{3}$/;
  if (!cepRegex.test(cep)) {
    return { errors: ["Cep em formato inválido"] };
  }
  return { errors: [] };
}

async function getCep(cep: string) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  console.log(data);
  return data;
}
