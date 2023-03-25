import { useEffect, useState } from "react";

//* Components imports
import CepInput from "pnpm/components/common/Inputs/CepInput";
import CpfInput from "pnpm/components/common/Inputs/CpfInput";
import EmailInput from "pnpm/components/common/Inputs/EmailInput";
import NameInput from "pnpm/components/common/Inputs/NameInput";
import PasswordInput from "pnpm/components/common/Inputs/PasswordInput";
import TelephoneInput from "pnpm/components/common/Inputs/TelephoneInput";
import NumberInput from "pnpm/components/common/Inputs/NumberInput";
import TextInput from "pnpm/components/common/Inputs/TextInput";


export default function NewUserForm() {
  const [name, setName] = useState<string>("");
  const [nameErrors, setNameErrors] = useState<string[]>([]);
  const [cpf, setCpf] = useState<string>("");
  const [cpfErrors, setCpfErrors] = useState<string[]>([]);
  const [telephone, setTelephone] = useState<string>("");
  const [telephoneErrors, setTelephoneErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [emailErrors, setEmailErrors] = useState<string[]>([]);

  const [cep, setCep] = useState<string>("");
  const [cepErrors, setCepErrors] = useState<string[]>([]);
  const [number, setNumber] = useState<number>(0);
  const [numberErrors, setNumberErrors] = useState<string[]>([]);
  const [street, setStreet] = useState<string>("");
  const [neighbourhood, setNeighbourhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");

  const [defaultAdress, setDefaultAdress] = useState<{
    street: string,
    neighbourhood: string,
    city: string,
    state: string
  }>({
    street: "",
    neighbourhood: "",
    city: "",
    state: ""
  });

  const [password, setPassword] = useState<string>("");
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [rePassword, setRePassword] = useState<string>("");
  const [rePasswordErrors, setRePasswordErrors] = useState<string[]>([]);
  const [isOk, setIsOk] = useState<boolean>(false);

  function setDefault() {

  }

  useEffect(() => {
    if (
      nameErrors.length > 0 ||
      cpfErrors.length > 0 ||
      telephoneErrors.length > 0 ||
      emailErrors.length > 0 ||
      cepErrors.length > 0 ||
      passwordErrors.length > 0 ||
      rePasswordErrors.length > 0
    ) {
      setIsOk(false);
    } else {
      setIsOk(true)
    }
  }, [nameErrors, cpfErrors, telephoneErrors, emailErrors, cepErrors, passwordErrors, rePasswordErrors]);


  return (
    <div className="flex flex-col items-center justify-center w-auto gap-8 p-8 bg-gray-100 rounded-lg">

      <div className="flex flex-col items-start justify-start mb-4 text-center">
        <h1 className="text-3xl font-bold">Cadastro de usuário</h1>
        <p className="w-72">Insira as informações do usuário que deseja cadastrar: </p>
      </div>

      <div className="flex flex-row items-center justify-start w-full gap-8">
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <NameInput setName={setName} setErrors={setNameErrors} />
          <CpfInput setCpf={setCpf} setErrors={setNameErrors} />
          <TelephoneInput setTelephone={setTelephone} setErrors={setNameErrors} />
          <EmailInput setEmail={setEmail} setErrors={setNameErrors} />
          <PasswordInput setPassword={setPassword} setErrors={setNameErrors} />
          <PasswordInput setPassword={setRePassword} setErrors={setNameErrors} />
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <CepInput
            setCep={setCep}
            setErrors={setNameErrors}
            setAdress={(neighbourhood: string, street: string, city: string, state: string) => {
              setDefaultAdress({ neighbourhood, street, city, state });
            }}
          />
          <NumberInput label="Número" setNumber={setNumber} setErrors={setNameErrors} />
          <TextInput label="Rua" setText={setStreet} min={0} max={255} value={defaultAdress.street} />
          <TextInput label="Bairro" setText={setNeighbourhood} min={0} max={255} value={defaultAdress.neighbourhood} />
          <TextInput label="Cidade" setText={setCity} min={0} max={255} value={defaultAdress.city} />
          <TextInput label="Estado" setText={setState} min={0} max={255} value={defaultAdress.state} />
        </div>
      </div>

      <button
        className="p-2 mt-4 text-sm font-bold text-white rounded-lg w-72 bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={() => {
          if (password !== rePassword) return alert("As senhas não coincidem!");
          console.log(name, cpf, telephone, email, cep, password, rePassword);
          if (
            name === "" ||
            cpf === "" ||
            telephone === "" ||
            email === "" ||
            cep === "" ||
            password === "" ||
            rePassword === ""
          ) return alert("Preencha todos os campos!");
          if (isOk) {
            alert("Usuário criado com sucesso");
          }
        }}
      >
        Cadastrar usuário
      </button>
    </div>
  );
}